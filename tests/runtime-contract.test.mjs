import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src-v2/core/consumer-runtime.ts", import.meta.url), "utf8");
const javascript = ts.transpile(source, { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 });
const runtime = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`);
const litStub = `
  export class LitElement {}
  export const html = (...parts) => parts;
  export const css = (...parts) => parts;
  export const customElement = () => (target) => target;
  export const property = () => () => {};
  export const state = () => () => {};
`;
const litStubUrl = `data:text/javascript;base64,${Buffer.from(litStub).toString("base64")}`;

async function importTypeScript(relativePath) {
  const moduleUrl = new URL(relativePath, import.meta.url);
  let output = ts.transpileModule(await readFile(moduleUrl, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
      experimentalDecorators: true,
    },
  }).outputText;

  for (const match of [...output.matchAll(/from (["'])(.+?)\1/g)]) {
    const specifier = match[2];
    if (specifier === "lit" || specifier === "lit/decorators.js") {
      output = output.replace(match[0], `from "${litStubUrl}"`);
      continue;
    }
    if (!specifier.startsWith(".")) continue;
    const dependencyUrl = new URL(
      specifier.endsWith(".ts") ? specifier : `${specifier}.ts`,
      moduleUrl,
    );
    const dependency = await importTypeScript(
      new URL(dependencyUrl).pathname.replace(/^.*?src-v2\//, "../src-v2/"),
    );
    output = output.replace(
      match[0],
      `from "data:text/javascript;base64,${Buffer.from(dependency).toString("base64")}"`,
    );
  }
  return output;
}

async function loadTypeScript(relativePath) {
  const output = await importTypeScript(relativePath);
  return import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
}

const devicePower = await loadTypeScript("../src-v2/core/device-power.ts");
const energyModel = await loadTypeScript("../src-v2/core/energy-model.ts");
const cardData = await loadTypeScript("../src-v2/core/card-data.ts");
const configMerge = await loadTypeScript("../src-v2/config/merge-config.ts");
const editorModule = await loadTypeScript("../src-v2/editor/editor.ts");
const FlowCardEditor = editorModule.SolarBatteryEconomyFlowCardEditor;

const consumer = (overrides = {}) => ({
  consumer_id: "9d0bb38e-17de-4c78-8b96-f48f91b47781",
  name: "EV charger",
  energy_entity: null,
  power_entity: "sensor.ev_power",
  power: { value: 1250, unit: "W", quality: "valid" },
  status: { entity_id: null, value: null, quality: "not_configured", level: null },
  soc: { entity_id: null, value: null, unit: null, quality: "not_configured" },
  temperature: { entity_id: null, value: null, unit: null, quality: "not_configured" },
  ...overrides,
});

test("consumer runtime keeps stable IDs and accepts normalized valid W power", () => {
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({ contract_version: 1, consumers: [consumer()] });
  assert.equal(snapshot.consumers.get("9d0bb38e-17de-4c78-8b96-f48f91b47781").name, "EV charger");
  assert.equal(runtime.getConsumerPowerReading("9d0bb38e-17de-4c78-8b96-f48f91b47781", snapshot).value, 1250);
});

test("consumer runtime rejects unsupported contract and preserves invalid power quality", () => {
  assert.equal(runtime.adaptConsumerRuntimeSnapshot({ contract_version: 2, consumers: [] }), undefined);
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({
    contract_version: 1,
    consumers: [consumer({ power: { value: 1250, unit: "kW", quality: "invalid_unit" } })],
  });
  assert.equal(
    snapshot.consumers.get("9d0bb38e-17de-4c78-8b96-f48f91b47781").power.quality,
    "invalid_unit",
  );
});

test("consumer IDs remain the lookup key across reordered runtime rows", () => {
  const secondId = "f14c5e28-c6d3-4cf8-9f54-31a2e77ad600";
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({
    contract_version: 1,
    consumers: [consumer({ consumer_id: secondId, name: "Second", power: { value: 20, unit: "W", quality: "valid" } }), consumer()],
  });
  assert.equal(runtime.getConsumerPowerReading("9d0bb38e-17de-4c78-8b96-f48f91b47781", snapshot).value, 1250);
  assert.equal(runtime.getConsumerPowerReading(secondId, snapshot).value, 20);
});

const consumerId = "9d0bb38e-17de-4c78-8b96-f48f91b47781";
const snapshotForPower = (power) => runtime.adaptConsumerRuntimeSnapshot({
  contract_version: 1,
  consumers: [consumer({ power })],
});
const slot = (overrides = {}) => ({
  enabled: true,
  consumerId,
  powerEntity: "sensor.local_fallback",
  ...overrides,
});

test("device power resolves a selected stable SBE consumer ID", () => {
  const result = devicePower.resolveDevicePower(
    slot(),
    snapshotForPower({ value: 1250, unit: "W", quality: "valid" }),
  );
  assert.deepEqual(result, {
    value: 1250,
    quality: "valid",
    entity: "sensor.ev_power",
  });
});

test("valid zero-watt SBE power remains distinguishable from missing data", () => {
  const result = devicePower.resolveDevicePower(
    slot(),
    snapshotForPower({ value: 0, unit: "W", quality: "valid" }),
  );
  assert.equal(result.value, 0);
  assert.equal(result.quality, "valid");
});

test("missing consumer ID reports missing configuration without reading local states", () => {
  const states = new Proxy({}, {
    get() { throw new Error("local sensor fallback was read"); },
  });
  const result = devicePower.resolveDevicePower(
    slot({ consumerId: undefined }),
    snapshotForPower({ value: 1250, unit: "W", quality: "valid" }),
  );
  assert.equal(result.value, null);
  assert.equal(result.quality, "not_configured");
});

test("unknown SBE consumer ID reports missing consumer without local fallback", () => {
  const states = new Proxy({}, {
    get() { throw new Error("local sensor fallback was read"); },
  });
  const result = devicePower.resolveDevicePower(
    slot({ consumerId: "missing-consumer-id" }),
    snapshotForPower({ value: 1250, unit: "W", quality: "valid" }),
  );
  assert.equal(result.value, null);
  assert.equal(result.quality, "missing_consumer");
});

test("invalid and missing SBE power qualities are not treated as valid zero", () => {
  for (const power of [
    { value: null, unit: "W", quality: "invalid_unit" },
    { value: null, unit: "W", quality: "missing" },
  ]) {
    const result = devicePower.resolveDevicePower(slot(), snapshotForPower(power));
    assert.equal(result.value, null);
    assert.equal(result.quality, power.quality);
  }
});

test("invalid runtime power keeps its quality on the inactive device flow", () => {
  const config = { layout: "desktop", devices: [slot(), slot(), slot(), slot()] };
  const flows = energyModel.getLiveFlows(
    config,
    undefined,
    snapshotForPower({ value: null, unit: "W", quality: "invalid" }),
  );
  assert.equal(flows["house-car"].power, 0);
  assert.equal(flows["house-car"].quality, "invalid");
  assert.equal(flows["house-car"].active, false);
});

test("selected SBE consumer power never reads hass.states", () => {
  const configuredSlot = slot();
  Object.defineProperty(configuredSlot, "powerEntity", {
    get() { throw new Error("local powerEntity fallback was read"); },
  });
  const result = devicePower.resolveDevicePower(
    configuredSlot,
    snapshotForPower({ value: 1250, unit: "W", quality: "valid" }),
  );
  assert.equal(result.value, 1250);
  assert.equal(result.quality, "valid");
});

test("flow drawing and device label use the same SBE consumer power", () => {
  const config = {
    layout: "desktop",
    devices: [slot(), slot(), slot(), slot()],
  };
  const hass = { states: {} };
  const snapshot = snapshotForPower({ value: 1250, unit: "W", quality: "valid" });
  const flows = energyModel.getLiveFlows(config, undefined, snapshot);
  const data = cardData.getCardData(hass, config, undefined, snapshot, null);

  assert.equal(flows["house-car"].power, 1250);
  assert.equal(data.devices[0].power, 1250);
  assert.equal(data.devices[0].powerQuality, "valid");
  assert.equal(flows["house-car"].power, data.devices[0].power);
});

test("old local entity fields are ignored and missing SBE power is explicit", () => {
  const legacy = {
    layout: "desktop",
    devices: [
      slot({ consumerId: undefined, powerEntity: "sensor.local_fallback", statusEntity: "sensor.local_status", optionalEntity: "sensor.local_soc", statusRules: [{ threshold: 1, label: "Local active" }] }),
      slot(), slot(), slot(),
    ],
  };
  const config = configMerge.mergeConfig(legacy);
  assert.equal("powerEntity" in config.devices[0], false);
  assert.equal("statusEntity" in config.devices[0], false);
  const data = cardData.getCardData(
    { states: {
      "sun.sun": { state: "above_horizon" },
      "sensor.local_fallback": { state: "900" },
      "sensor.local_status": { state: "Active" },
      "sensor.local_soc": { state: "80" },
    } },
    config,
    undefined,
    undefined,
    null,
  );
  assert.equal(data.devices[0].power, null);
  assert.equal(data.devices[0].powerQuality, "not_configured");
  assert.equal(data.devices[0].status, "Select SBE consumer");
});

test("mergeConfig preserves Home Assistant metadata and current card settings", () => {
  const config = configMerge.mergeConfig({
    type: "custom:solar-battery-economy-flow-card",
    grid_options: { columns: 6 },
    layout_options: { grid_columns: 12 },
    view_layout: { position: "main" },
    visibility: [{ condition: "user", users: ["user-1"] }],
    card_mod: { style: { "ha-card": "color: red" } },
    layout: "mobile",
    solarInfoEntity: "sensor.solar_info",
    devices: [slot({ title: "Car", icon: "car" }), slot(), slot(), slot()],
  });

  assert.equal(config.type, "custom:solar-battery-economy-flow-card");
  assert.deepEqual(config.grid_options, { columns: 6 });
  assert.deepEqual(config.layout_options, { grid_columns: 12 });
  assert.deepEqual(config.view_layout, { position: "main" });
  assert.deepEqual(config.visibility, [{ condition: "user", users: ["user-1"] }]);
  assert.deepEqual(config.card_mod, { style: { "ha-card": "color: red" } });
  assert.equal(config.layout, "mobile");
  assert.equal(config.solarInfoEntity, "sensor.solar_info");
  assert.equal(config.devices[0].title, "Car");
  assert.equal(config.devices[0].consumerId, consumerId);
});

test("mergeConfig continues filtering legacy local runtime fields from slots", () => {
  const config = configMerge.mergeConfig({
    devices: [slot({
      powerEntity: "sensor.local_power",
      statusEntity: "sensor.local_status",
      optionalEntity: "sensor.local_optional",
      statusRules: [{ threshold: 10, label: "Local active" }],
    })],
  });
  for (const field of ["powerEntity", "statusEntity", "optionalEntity", "statusRules"]) {
    assert.equal(field in config.devices[0], false, `${field} must be filtered`);
  }
});

test("mergeConfig safely fills missing slots and replaces null entries with defaults", () => {
  const absent = configMerge.mergeConfig({ devices: undefined });
  assert.equal(absent.devices.length, 4);
  assert.deepEqual(absent.devices.map((device) => device.enabled), [false, false, false, false]);

  const short = configMerge.mergeConfig({ devices: [slot({ title: "One" }), null] });
  assert.equal(short.devices.length, 4);
  assert.equal(short.devices[0].title, "One");
  assert.deepEqual(short.devices.slice(1).map((device) => device), [
    { enabled: false }, { enabled: false }, { enabled: false },
  ]);
});

test("mergeConfig is idempotent", () => {
  const config = configMerge.mergeConfig({
    type: "custom:solar-battery-economy-flow-card",
    grid_options: { columns: 6 },
    layout: "desktop",
    devices: [slot({ statusLabels: [" First ", "", "Third"] }), null],
  });
  assert.deepEqual(configMerge.mergeConfig(config), config);
});

function makeEditor(config) {
  const editor = Object.create(FlowCardEditor.prototype);
  editor._config = configMerge.mergeConfig(config);
  editor._deviceDrafts = {};
  editor._fireConfigChanged = function () {
    this.lastEmittedConfig = this._config;
  };
  return editor;
}

test("editor setConfig clears drafts and retains Home Assistant type", () => {
  const editor = makeEditor({ type: "custom:solar-battery-economy-flow-card" });
  editor._deviceDrafts = { 0: { title: "Stale draft" } };
  editor.setConfig({ type: "custom:solar-battery-economy-flow-card", layout: "mobile" });
  assert.deepEqual(editor._deviceDrafts, {});
  assert.equal(editor._config.type, "custom:solar-battery-economy-flow-card");
});

test("general editor changes retain config.type", () => {
  const editor = makeEditor({ type: "custom:solar-battery-economy-flow-card" });
  editor._valueChanged({ detail: { value: { layout: "mobile" } } });
  assert.equal(editor.lastEmittedConfig.type, "custom:solar-battery-economy-flow-card");
  assert.equal(editor.lastEmittedConfig.layout, "mobile");
});

test("device editor changes retain config.type and omit empty status labels", () => {
  const editor = makeEditor({
    type: "custom:solar-battery-economy-flow-card",
    devices: [slot(), slot(), slot(), slot()],
  });
  editor._deviceValueChanged(0, {
    detail: { value: { enabled: true, consumerId, statusLabel1: "", statusLabel2: "  ", statusLabel3: "Ready" } },
  });
  assert.equal(editor.lastEmittedConfig.type, "custom:solar-battery-economy-flow-card");
  assert.deepEqual(editor.lastEmittedConfig.devices[0].statusLabels, [undefined, undefined, "Ready"]);
});

test("empty status labels use the runtime-level presentation defaults", () => {
  const config = configMerge.mergeConfig({
    devices: [slot({ statusLabels: ["", "  ", undefined] }), slot(), slot(), slot()],
  });
  assert.deepEqual(config.devices[0].statusLabels, [undefined, undefined, undefined]);
  for (const level of [1, 2, 3]) {
    const snapshot = runtime.adaptConsumerRuntimeSnapshot({
      contract_version: 1,
      consumers: [consumer({ status: { entity_id: null, value: null, quality: "valid", level } })],
    });
    const data = cardData.getCardData({ states: {} }, config, undefined, snapshot, null);
    assert.equal(data.devices[0].status, `Level ${level}`);
  }
});

test("consumer status level and optional readings come only from SBE runtime", () => {
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({
    contract_version: 1,
    consumers: [consumer({
      status: { entity_id: "sensor.sbe_status", value: "Running", quality: "valid", level: 2 },
      soc: { entity_id: "sensor.sbe_soc", value: 81, unit: "%", quality: "valid" },
    })],
  });
  const config = {
    layout: "desktop",
    devices: [slot({ optionalType: "soc", statusLabels: ["Idle", "Charging", "Complete"] }), slot(), slot(), slot()],
  };
  const data = cardData.getCardData({ states: {} }, config, undefined, snapshot, null);
  assert.equal(data.devices[0].status, "Charging");
  assert.equal(data.devices[0].optionalValue, "81 %");
});

test("Flow V2 renders phase data only from the SBE runtime and releases subscription on disconnect", async () => {
  const { readFile } = await import("node:fs/promises");
  const card = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  const phaseRenderer = await readFile(new URL("../src-v2/renderers/phase-load-renderer.ts", import.meta.url), "utf8");
  assert.match(card, /subscribe_live_runtime/);
  assert.match(card, /renderPhaseLoadPanel\(phaseLoadData, phaseLoadSummary\)/);
  assert.match(card, /void unsubscribe\(\)\.catch/);
  assert.match(phaseRenderer, /phase\.activeSegments/);
  assert.match(phaseRenderer, /phase\.loadState/);
  assert.match(phaseRenderer, /FASBELASTNING/);
});

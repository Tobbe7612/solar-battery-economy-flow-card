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
  export const svg = (...parts) => parts;
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
const dashboardData = await loadTypeScript("../src-v2/core/dashboard-data.ts");
const viewModel = await loadTypeScript("../src-v2/core/view-model.ts");
const dashboardSubscriptionModule = await loadTypeScript("../src-v2/core/dashboard-subscription.ts");
const phaseDetail = await loadTypeScript("../src-v2/renderers/phase-network-detail.ts");
const energyTodayLabels = await loadTypeScript("../src-v2/renderers/labels/energy-today.ts");
const deviceSlots = await loadTypeScript("../src-v2/core/device-slots.ts");
const additionalFlowDefinitions = await loadTypeScript("../src-v2/renderers/graph/additional-device-flow-definitions.ts");
const solarArcModule = await loadTypeScript("../src-v2/renderers/solar-arc.ts");
const flowRendering = await loadTypeScript("../src-v2/renderers/flow-renderer.ts");
const labelRendering = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
const labelLayout = await loadTypeScript("../src-v2/renderers/labels/label-layout.ts");
const edgeRenderer = await loadTypeScript("../src-v2/renderers/graph/render-edge-v2.ts");
const labelRenderer = await loadTypeScript("../src-v2/renderers/labels/label-renderer.ts");
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
    gridHistoryEntity: "sensor.old_history",
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
  assert.equal("gridHistoryEntity" in config, false);
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
  assert.equal(absent.devices.length, 8);
  assert.deepEqual(absent.devices.map((device) => device.enabled), Array(8).fill(false));

  const short = configMerge.mergeConfig({ devices: [slot({ title: "One" }), null] });
  assert.equal(short.devices.length, 8);
  assert.equal(short.devices[0].title, "One");
  assert.deepEqual(short.devices.slice(1).map((device) => device), [
    ...Array.from({ length: 7 }, () => ({ enabled: false })),
  ]);
});

test("four-slot saved configurations preserve legacy indices and append four empty slots", () => {
  const oldDevices = [
    slot({ title: "HALO", consumerId: "ev-existing", icon: "car", enabled: true }),
    slot({ title: "Spa", consumerId: "spa-existing", icon: "spa", enabled: true }),
    slot({ title: "Heat pump", consumerId: "hp-existing", icon: "heatpump", enabled: true }),
    slot({ title: "Appliance", consumerId: "app-existing", icon: "appliance", enabled: true }),
  ];
  const migrated = configMerge.mergeConfig({ devices: oldDevices });
  assert.deepEqual(migrated.devices.slice(0, 4).map(({ enabled, title, consumerId, icon }) => ({ enabled, title, consumerId, icon })),
    oldDevices.map(({ enabled, title, consumerId, icon }) => ({ enabled, title, consumerId, icon })));
  assert.deepEqual(migrated.devices.slice(4), Array.from({ length: 4 }, () => ({ enabled: false })));
  assert.deepEqual(migrated.devices.map((item) => item.consumerId), [
    "ev-existing", "spa-existing", "hp-existing", "app-existing", undefined, undefined, undefined, undefined,
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

test("the four independent display/value choices select the correct card parts", () => {
  for (const display of ["overview", "consumers"]) {
    for (const value of ["live", "energy_today"]) {
      const view = viewModel.getViewModel(display, value, false);
      assert.equal(view.showSolar, display === "overview");
      assert.equal(view.showGrid, display === "overview");
      assert.equal(view.showBattery, display === "overview");
      assert.equal(view.showHouse, true);
      assert.equal(view.showIndividualConsumers, display === "consumers");
      assert.equal(view.showConsumerSummary, display === "overview");
      assert.equal(view.showCompactPhases, display === "overview");
      assert.equal(view.showDetail, false);
      assert.equal(view.showFlowGraph, true);
    }
  }
  const detail = viewModel.getViewModel("consumers", "energy_today", true);
  assert.equal(detail.showDetail, true);
  assert.equal(detail.showHouse, false);
  assert.equal(detail.showFlowGraph, false);
  assert.equal(detail.showIndividualConsumers, false);
});

test("enabled consumer power sums valid readings only and deduplicates stable IDs", () => {
  const result = dashboardData.summarizeConsumerPower([
    { enabled: true, consumerId: "a", power: 100, powerQuality: "valid" },
    { enabled: true, consumerId: "b", power: null, powerQuality: "missing" },
    { enabled: true, consumerId: "a", power: 900, powerQuality: "valid" },
    { enabled: false, consumerId: "c", power: 400, powerQuality: "valid" },
  ]);
  assert.deepEqual(result, { value: 100, enabledCount: 3, validCount: 1, missingCount: 1, duplicateCount: 1 });
});

test("additional configured car slots stay out of the consumer subtotal", () => {
  const devices = dashboardData.consumerSubtotalDevices([
    { icon: "car", enabled: true, consumerId: "halo-1" },
    ...[1, 2, 3, 4, 5, 6].map((index) => ({ icon: "spa", enabled: true, consumerId: `consumer-${index}` })),
    { icon: "car", enabled: true, consumerId: "halo-2" },
  ]);
  assert.deepEqual(devices.map((device) => device.consumerId), [
    "consumer-1", "consumer-2", "consumer-3", "consumer-4", "consumer-5", "consumer-6",
  ]);
});

test("aggregate consumer flow excludes HALO and keeps a partial valid subtotal", () => {
  const idB = "f14c5e28-c6d3-4cf8-9f54-31a2e77ad600";
  const carId = "car-consumer-id";
  const config = { devices: [
    slot({ consumerId: carId, enabled: true }),
    slot({ consumerId, enabled: true }),
    slot({ consumerId: idB, enabled: true }),
    slot({ consumerId: "missing", enabled: false }),
  ] };
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({ contract_version: 1, consumers: [
    consumer({ consumer_id: carId, power: { value: 1250, unit: "W", quality: "valid" } }),
    consumer({ power: { value: 300, unit: "W", quality: "valid" } }),
    consumer({ consumer_id: idB, power: { value: null, unit: "W", quality: "missing" } }),
  ] });
  const baseLivePower = { flows: {
    solar_house: 90, solar_battery: 20, solar_export: 0,
    battery_house: 15, battery_grid: 0, grid_house: 80,
    grid_battery: 0, unknown_grid_export: 0,
  } };
  const flows = energyModel.getLiveFlows(config, baseLivePower, snapshot, { value: 300, validCount: 1, missingCount: 1 });
  assert.equal(flows["house-consumer-summary"].power, 300);
  assert.equal(flows["house-consumer-summary"].active, true);
  assert.equal(flows["house-consumer-summary"].quality, "partial");
  assert.equal(flows["house-car"].power, 1250);
  assert.equal(flows["solar-house"].power, 90);
  assert.equal(flows["battery-house"].power, 15);
  assert.equal(flows["grid-house"].power, 80);
  assert.equal(flows["grid-house"].active, true);
});

test("extended slots read live power by stable SBE IDs and preserve the four legacy flow IDs", () => {
  const ids = Array.from({ length: 8 }, (_, index) => `stable-consumer-${index}`);
  const config = configMerge.mergeConfig({
    devices: ids.map((id, index) => slot({ consumerId: id, enabled: true, icon: index === 0 || index === 7 ? "car" : "spa" })),
  });
  const snapshot = runtime.adaptConsumerRuntimeSnapshot({
    contract_version: 1,
    consumers: ids.map((id, index) => consumer({
      consumer_id: id,
      name: `Consumer ${index + 1}`,
      power: { value: (index + 1) * 100, unit: "W", quality: "valid" },
    })),
  });
  const flows = energyModel.getLiveFlows(config, undefined, snapshot, { value: 2100, validCount: 6, missingCount: 0 });
  assert.deepEqual([flows["house-car"].power, flows["house-spa"].power, flows["house-heatpump"].power, flows["house-appliance"].power], [100, 200, 300, 400]);
  assert.equal(flows["house-consumer-slot-5"].power, 500);
  assert.equal(flows["house-consumer-slot-6"].power, 600);
  assert.equal(flows["house-consumer-slot-7"].power, 700);
  assert.equal(flows["house-car-2"].power, 800);
  assert.equal(flows["house-consumer-summary"].power, 2100);
});

test("consumer view flow definitions connect house to enabled consumer label positions", async () => {
  const anchorsModule = await loadTypeScript("../src-v2/renderers/anchors.ts");
  const portsModule = await loadTypeScript("../src-v2/renderers/graph/flow-ports.ts");
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const desktopDefinitions = await loadTypeScript("../src-v2/renderers/graph/desktop-flow-definitions.ts");
  const mobileDefinitions = await loadTypeScript("../src-v2/renderers/graph/mobile-flow-definitions.ts");
  const layouts = [
    { labels: await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts"), definitions: desktopDefinitions.DESKTOP_FLOW_DEFINITIONS, desktop: true },
    { labels: await loadTypeScript("../src-v2/renderers/labels/mobile-labels.ts"), definitions: mobileDefinitions.MOBILE_FLOW_DEFINITIONS, desktop: false },
  ];
  for (const { labels, definitions, desktop } of layouts) {
    const positioned = positioning.positionLabels(labels.DESKTOP_LABELS ?? labels.MOBILE_LABELS, "consumers");
    const ports = portsModule.createFlowPorts(anchorsModule.createAnchors(positioned));
    const consumerDefinitions = definitions.filter((definition) => definition.id.startsWith("house-") && definition.id !== "house-consumer-summary");
    assert.deepEqual(consumerDefinitions.map((definition) => definition.liveFlow).sort(), ["house-appliance", "house-car", "house-heatpump", "house-spa"]);
    for (const definition of consumerDefinitions) {
      const end = definition.getEnd(ports);
      assert.ok(end.x >= 0 && end.y >= 0);
      assert.notDeepEqual(end, definition.getStart(ports));
      const endpointPort = {
        "house-car": desktop ? "car" : "carLeft",
        "house-spa": desktop ? "spa" : "spaRight",
        "house-heatpump": desktop ? "heatpump" : "heatpumpRight",
        "house-appliance": desktop ? "appliance" : "applianceLeft",
      }[definition.id];
      assert.deepEqual(end, ports[endpointPort]);
    }
  }
});

test("extra consumer Graph Engine edges end at their indexed box anchors", async () => {
  const anchorsModule = await loadTypeScript("../src-v2/renderers/anchors.ts");
  const portsModule = await loadTypeScript("../src-v2/renderers/graph/flow-ports.ts");
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const labelsModule = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const labels = positioning.positionLabels(labelsModule.DESKTOP_LABELS, "consumers");
  const ports = portsModule.createFlowPorts(anchorsModule.createAnchors(labels));
  for (const definition of additionalFlowDefinitions.createAdditionalDeviceFlowDefinitions()) {
    const index = definition.id === "house-car-2" ? 7 : Number(definition.id.slice(-1)) - 1;
    const expected = ports.deviceSlots[index][index === 7 ? "left" : "top"];
    assert.deepEqual(definition.getEnd(ports), expected);
    assert.deepEqual(expected, {
      x: index === 7 ? 1630 : labels.find((label) => label.deviceIndex === index).x + 100,
      y: index === 7 ? 948 : labels.find((label) => label.deviceIndex === index).y,
    });
  }
});

test("today-energy omits graph connections while live flow edges retain their animation", async () => {
  const edge = { id: "grid-house", start: { x: 0, y: 0 }, end: { x: 100, y: 100 }, power: 1800, active: true, color: "#FF6B6B" };
  const live = flattenTemplate(edgeRenderer.renderEdgeV2(edge, true));
  const flowRenderer = await readFile(new URL("../src-v2/renderers/flow-renderer.ts", import.meta.url), "utf8");
  assert.match(flowRenderer, /valueMode === "live" \? renderGraph/);
  assert.equal((flowRenderer.match(/renderGraph\(/g) ?? []).length, 1);
  assert.match(live, /animateMotion/);
});

test("label layout updates visible bounds and graph anchors together", async () => {
  const anchorsModule = await loadTypeScript("../src-v2/renderers/anchors.ts");
  const portsModule = await loadTypeScript("../src-v2/renderers/graph/flow-ports.ts");
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const labels = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const moved = positioning.positionLabels(labels.DESKTOP_LABELS, "consumers");
  const house = moved.find((label) => label.id === "house");
  assert.deepEqual(house.anchorBounds, { x: house.x, y: house.y, width: house.width, height: house.height });
  const ports = portsModule.createFlowPorts(anchorsModule.createAnchors(moved));
  assert.deepEqual(ports.houseTop, { x: house.x + house.width / 2, y: house.y });
  assert.deepEqual(ports.car, { x: moved.find((label) => label.id === "car").x + 100, y: moved.find((label) => label.id === "car").y });
});

test("HALO uses a shared right-aligned position across overview/consumer and live/today views", async () => {
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const layouts = [
    { labels: await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts"), sceneWidth: 1920, expectedX: 1630 },
    { labels: await loadTypeScript("../src-v2/renderers/labels/mobile-labels.ts"), sceneWidth: 430 },
  ];
  for (const layout of layouts) {
    const labels = layout.labels.DESKTOP_LABELS ?? layout.labels.MOBILE_LABELS;
    for (const displayMode of ["overview", "consumers"]) {
      let sharedPosition;
      for (const valueMode of ["live", "energy_today"]) {
        // Value mode does not affect label positioning within a display layout.
        const halo = positioning.positionLabels(labels, displayMode).find((label) => label.id === "car");
        assert.ok(halo, `${displayMode}/${valueMode} has a HALO label`);
        sharedPosition ??= { x: halo.x, y: halo.y };
        assert.deepEqual({ x: halo.x, y: halo.y }, sharedPosition);
        assert.ok(halo.x >= 0 && halo.x + halo.width <= layout.sceneWidth);
      }
      if (layout.expectedX !== undefined && displayMode === "overview") assert.deepEqual(sharedPosition, { x: layout.expectedX, y: 750 });
    }
    if (layout.expectedX === undefined) {
      const overviewHalo = positioning.positionLabels(labels, "overview").find((label) => label.id === "car");
      const consumerHalo = positioning.positionLabels(labels, "consumers").find((label) => label.id === "car");
      assert.deepEqual([overviewHalo.x, overviewHalo.y], [291.84375, 380]);
      assert.deepEqual([consumerHalo.x, consumerHalo.y], [291.84375, 435]);
    }
  }
});

test("desktop consumer layout shifts ordinary boxes left/down and centers the house between rows", async () => {
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const desktopLabels = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const positioned = positioning.positionLabels(desktopLabels.DESKTOP_LABELS, "consumers");
  const ordinary = positioned.filter((label) => label.deviceIndex >= 1 && label.deviceIndex <= 6);
  const vehicles = positioned.filter((label) => label.deviceIndex === 0 || label.deviceIndex === 7);
  assert.equal(ordinary.length, 6);
  assert.equal(new Set(ordinary.map((label) => `${label.x},${label.y}`)).size, 6);
  assert.deepEqual(ordinary.map(({ deviceIndex, x, y }) => ({ deviceIndex, x, y })), [
    { deviceIndex: 1, x: 350, y: 315 }, { deviceIndex: 2, x: 760, y: 315 }, { deviceIndex: 3, x: 1170, y: 315 },
    { deviceIndex: 4, x: 350, y: 735 }, { deviceIndex: 5, x: 760, y: 735 }, { deviceIndex: 6, x: 1170, y: 735 },
  ]);
  const house = positioned.find((label) => label.id === "house");
  assert.deepEqual({ x: house.x, y: house.y }, { x: 760, y: 525 });
  const upperCenterY = ordinary[0].y + ordinary[0].height / 2;
  const lowerCenterY = ordinary[3].y + ordinary[3].height / 2;
  assert.equal(house.y + house.height / 2, (upperCenterY + lowerCenterY) / 2);
  const originalConsumerColumns = [450, 860, 1270];
  for (const label of ordinary) {
    const order = label.deviceIndex - 1;
    const originalRowTop = order < 3 ? 255 : 675;
    assert.equal(label.x, originalConsumerColumns[order % 3] - label.width / 2);
    assert.equal(label.y, originalRowTop + label.height / 2);
  }
  for (let i = 0; i < ordinary.length; i += 1) {
    for (let j = i + 1; j < ordinary.length; j += 1) {
      const a = ordinary[i], b = ordinary[j];
      assert.ok(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);
    }
  }
  assert.deepEqual(vehicles.map(({ deviceIndex, x, y }) => ({ deviceIndex, x, y })), [
    { deviceIndex: 0, x: 1630, y: 750 }, { deviceIndex: 7, x: 1630, y: 888 },
  ]);
  assert.ok(Math.max(...ordinary.map((label) => label.x + label.width)) < Math.min(...vehicles.map((label) => label.x)));
});

test("consumer views omit solar flow definitions while overview keeps solar flows", async () => {
  const flowRendererSource = await readFile(new URL("../src-v2/renderers/flow-renderer.ts", import.meta.url), "utf8");
  const definitions = await loadTypeScript("../src-v2/renderers/graph/desktop-flow-definitions.ts");
  const solarIds = definitions.DESKTOP_FLOW_DEFINITIONS.filter((definition) => definition.id.startsWith("solar-")).map((definition) => definition.id);
  assert.deepEqual(solarIds, ["solar-house", "solar-battery", "solar-export"]);
  assert.match(flowRendererSource, /desktopConsumers[\s\S]*!definition\.id\.startsWith\("solar-"\)/);
  assert.match(flowRendererSource, /if \(viewMode === "overview"\)/);
});

test("desktop consumer labels no longer render the grouping frame or heading", async () => {
  const source = await readFile(new URL("../src-v2/renderers/labels/render-labels.ts", import.meta.url), "utf8");
  assert.doesNotMatch(source, /FÖRBRUKARE/);
  assert.doesNotMatch(source, /rgba\(8,20,31,0\.18\)/);
});

test("solar arc particle effects are gated by display mode only, for live and today views", async () => {
  const cardSource = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  assert.match(cardSource, /cardData\.solarPower,[\s\S]*this\.displayMode === ['\"]overview['\"] && this\.valueMode === ['\"]live['\"]/);
  const layout = { sceneWidth: 1920, solarArc: { centerX: 960, centerY: 180, width: 1300, height: 100, sunRadius: 18 } };
  const sun = { progress: 0.5, aboveHorizon: true, left: 960, top: 100, sunrise: "07:10", sunset: "16:25" };
  for (const displayMode of ["overview", "consumers"]) {
    for (const valueMode of ["live", "energy_today"]) {
      const showParticles = displayMode === "overview" && valueMode === "live";
      const rendered = flattenTemplate(solarArcModule.renderSolarArc(sun, layout, 1200, showParticles));
      assert.equal(rendered.includes("animateMotion"), showParticles, `${displayMode}/${valueMode} particle visibility`);
      assert.match(rendered, /solar-arc-path/);
      assert.match(rendered, /solar-arc-sun/);
      assert.match(rendered, /07:10/);
      assert.match(rendered, /16:25/);
    }
  }
  assert.match(await readFile(new URL("../src-v2/renderers/flow-renderer.ts", import.meta.url), "utf8"), /renderGraph\(/);
});

test("desktop consumer routes use actual house branches and attach to all six consumers and both vehicles", async () => {
  const anchorsModule = await loadTypeScript("../src-v2/renderers/anchors.ts");
  const portsModule = await loadTypeScript("../src-v2/renderers/graph/flow-ports.ts");
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const labelsModule = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const definitions = additionalFlowDefinitions.createDesktopConsumerFlowDefinitions();
  const labels = positioning.positionLabels(labelsModule.DESKTOP_LABELS, "consumers");
  const ports = portsModule.createFlowPorts(anchorsModule.createAnchors(labels));
  assert.equal(definitions.length, 8);
  for (const definition of definitions) {
    const index = definition.id === "house-car" ? 0 : definition.id === "house-car-2" ? 7
      : definition.id === "house-spa" ? 1 : definition.id === "house-heatpump" ? 2
        : definition.id === "house-appliance" ? 3 : Number(definition.id.slice(-1)) - 1;
    const vehicle = index === 0 || index === 7;
    const target = ports.deviceSlots[index][vehicle ? "left" : index <= 3 ? "bottom" : "top"];
    assert.deepEqual(definition.getEnd(ports), target);
    assert.deepEqual(definition.getStart(ports), ports.consumerHouseBranches[index]);
    assert.ok(definition.getWaypoints(ports).length >= 2);
  }
  assert.deepEqual(ports.consumerHouseBranches[1], { x: 800, y: 525 });
  assert.deepEqual(ports.consumerHouseBranches[5], { x: 860, y: 645 });
});

test("mobile consumer view places six loads in two rows with house centered and vehicles beside it", async () => {
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const mobileLabels = await loadTypeScript("../src-v2/renderers/labels/mobile-labels.ts");
  const positioned = positioning.positionLabels(mobileLabels.MOBILE_LABELS, "consumers");
  const bySlot = new Map(positioned.filter((label) => label.deviceIndex !== undefined).map((label) => [label.deviceIndex, label]));
  assert.deepEqual([1, 2, 3, 4, 5, 6].map((index) => [bySlot.get(index).x, bySlot.get(index).y]), [
    [15, 220], [156, 220], [297, 220], [15, 650], [156, 650], [297, 650],
  ]);
  const house = positioned.find((label) => label.id === "house");
  assert.deepEqual([house.x, house.y], [156, 435]);
  assert.equal(house.x + house.width / 2, 215);
  assert.equal(house.y + house.height / 2, ((220 + 76 / 2) + (650 + 76 / 2)) / 2);
  assert.deepEqual([bySlot.get(7).x, bySlot.get(7).y], [20.15625, 435]);
  assert.deepEqual([bySlot.get(0).x, bySlot.get(0).y], [291.84375, 435]);
  for (const label of positioned.filter((item) => item.deviceIndex !== undefined)) {
    assert.ok(label.x >= 0 && label.x + label.width <= 430);
    assert.ok(label.y >= 0 && label.y + label.height <= 790);
  }
  assert.ok(bySlot.get(7).x + bySlot.get(7).width <= house.x);
  assert.ok(house.x + house.width <= bySlot.get(0).x);
  const anchorsModule = await loadTypeScript("../src-v2/renderers/anchors.ts");
  const portsModule = await loadTypeScript("../src-v2/renderers/graph/flow-ports.ts");
  const definitions = additionalFlowDefinitions.createMobileConsumerFlowDefinitions();
  const ports = portsModule.createFlowPorts(anchorsModule.createAnchors(positioned));
  assert.equal(definitions.length, 8);
  for (const definition of definitions) {
    const index = definition.id === "house-car" ? 0 : definition.id === "house-car-2" ? 7
      : definition.id === "house-spa" ? 1 : definition.id === "house-heatpump" ? 2
        : definition.id === "house-appliance" ? 3 : Number(definition.id.slice(-1)) - 1;
    assert.deepEqual(definition.getEnd(ports), ports.deviceSlots[index][index === 0 ? "left" : index === 7 ? "right" : index <= 3 ? "bottom" : "top"]);
  }
});

test("mobile overview aligns Test with HALO and keeps both vehicle boxes inside the scene", async () => {
  const positioning = await loadTypeScript("../src-v2/renderers/labels/render-labels.ts");
  const mobileLabels = await loadTypeScript("../src-v2/renderers/labels/mobile-labels.ts");
  const positioned = positioning.positionLabels(mobileLabels.MOBILE_LABELS, "overview");
  const halo = positioned.find((label) => label.deviceIndex === 0);
  const test = positioned.find((label) => label.deviceIndex === 7);
  const house = positioned.find((label) => label.id === "house");
  assert.equal(test.y, halo.y);
  assert.equal(house.x + house.width / 2 - (test.x + test.width / 2), halo.x + halo.width / 2 - (house.x + house.width / 2));
  assert.ok(test.x >= 0 && test.x + test.width <= 430);
  assert.ok(test.x + test.width <= house.x);
  const layout = await loadTypeScript("../src-v2/layouts/mobile-layout.ts");
  assert.equal(layout.mobileLayout.sceneHeight, 790);
});

test("enabled Test vehicle is rendered in both overview value modes and flows only when active", async () => {
  const labels = await Promise.all([
    loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts"),
    loadTypeScript("../src-v2/renderers/labels/mobile-labels.ts"),
  ]);
  const cardData = {
    devices: Array.from({ length: 8 }, (_, index) => ({
      enabled: index === 0 || index === 7,
      consumerId: index === 7 ? "existing-test-car-id" : "existing-halo-id",
      title: index === 7 ? "Test" : "HALO",
      power: 0,
      powerQuality: "valid",
      status: "Standby",
      icon: "car",
    })),
    solarPower: 0, solarStatus: "Night", solarEntity: "",
    batterySoc: null, batteryPower: 0, batteryStatus: "Standby", batteryEntity: "",
    housePower: 0, houseStatus: "No load", houseEntity: "",
    gridPower: 0, gridStatus: "Balance", gridEntity: "",
  };
  const activeTestFlow = { id: "house-car-2", active: true, power: 780, intensity: 0.15, quality: "valid" };
  const inactiveTestFlow = { ...activeTestFlow, active: false, power: 0 };
  for (const [index, sceneWidth] of [1920, 430].entries()) {
    const sourceLabels = index === 0 ? labels[0].DESKTOP_LABELS : labels[1].MOBILE_LABELS;
    const overviewLabels = labelRendering.renderLabels(sourceLabels, cardData, {}, "overview", {}, false);
    assert.match(flattenTemplate(overviewLabels), /Test/);
    const active = flattenTemplate(flowRendering.renderFlows(
      { sceneWidth }, { "house-car-2": activeTestFlow }, cardData, {}, "overview", {}, "live",
    ));
    const inactive = flattenTemplate(flowRendering.renderFlows(
      { sceneWidth }, { "house-car-2": inactiveTestFlow }, cardData, {}, "overview", {}, "live",
    ));
    const today = flattenTemplate(flowRendering.renderFlows(
      { sceneWidth }, { "house-car-2": activeTestFlow }, cardData, {}, "overview", {}, "energy_today",
    ));
    assert.match(active, /Test/);
    assert.equal((active.match(/class="energy-edge"/g) ?? []).length, 1);
    assert.doesNotMatch(inactive, /class="energy-edge"/);
    assert.match(today, /Test/);
    assert.doesNotMatch(today, /class="energy-edge"/);
  }
});

test("consumer view renders six ordinary and two configured vehicle slots without inventing values", async () => {
  const desktopLabels = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const devices = Array.from({ length: 8 }, (_, index) => ({
    enabled: true,
    consumerId: `existing-sbe-id-${index}`,
    title: index === 0 ? "HALO 1" : index === 7 ? "HALO 2" : `Consumer ${index}`,
    power: index * 100,
    powerQuality: "valid",
    status: "Online",
    icon: index === 0 || index === 7 ? "car" : "appliance",
  }));
  const cardData = {
    devices, solarPower: 0, solarStatus: "Night", solarEntity: "",
    batterySoc: null, batteryPower: 0, batteryStatus: "Standby", batteryEntity: "",
    housePower: 0, houseStatus: "No load", houseEntity: "",
    gridPower: 0, gridStatus: "Balance", gridEntity: "",
  };
  const rendered = flattenTemplate(labelRendering.renderLabels(
    desktopLabels.DESKTOP_LABELS, cardData, {}, "consumers", {}, false,
  ));
  for (const title of ["HALO 1", "HALO 2", "Consumer 1", "Consumer 2", "Consumer 3", "Consumer 4", "Consumer 5", "Consumer 6"]) {
    assert.match(rendered, new RegExp(title));
  }
});

test("extended Flow Card slots retain legacy flow IDs and use graph-anchored edges for new slots", async () => {
  assert.deepEqual(Array.from({ length: 8 }, (_, index) => deviceSlots.getDeviceFlowId(index)), [
    "house-car", "house-spa", "house-heatpump", "house-appliance",
    "house-consumer-slot-5", "house-consumer-slot-6", "house-consumer-slot-7", "house-car-2",
  ]);
  const definitions = additionalFlowDefinitions.createAdditionalDeviceFlowDefinitions();
  assert.deepEqual(definitions.map((definition) => definition.liveFlow), [
    "house-consumer-slot-5", "house-consumer-slot-6", "house-consumer-slot-7", "house-car-2",
  ]);
  const card = await readFile(new URL("../src-v2/editor/editor.ts", import.meta.url), "utf8");
  assert.match(card, /_renderDeviceEditor\(7, "HALO 2/);
  assert.match(card, /\[1, 2, 3, 4, 5, 6\]/);
});

test("energy today labels use kWh, distinct descriptors, and directional indicators", async () => {
  const dashboard = dashboardData.adaptDashboardCardData({
    contract_version: 2,
    energy: { today: {
      solar: { total_kwh: 2.5 }, battery: { charged_kwh: 1.2, discharged_kwh: 0.7 },
      grid: { import: { value_kwh: 3, status: "partial", complete: false }, export: { value_kwh: 0.4, status: "complete", complete: true } },
    } },
    calendar_analysis: { today: {
      house: { consumption_kwh: 4.2 }, consumers: { a: { analysis: { energy_kwh: 1.1 } } },
    } },
  });
  const metrics = energyTodayLabels.buildEnergyTodayLabelMetrics([
    { enabled: true, consumerId: "a", status: "Normal" },
  ], dashboard);
  assert.equal(metrics.solar.line1, "2.50 kWh");
  assert.equal(metrics.grid.line1, "3.00 kWh");
  assert.equal(metrics.grid.line2, "0.40 kWh");
  assert.deepEqual([metrics.grid.line1Indicator, metrics.grid.line1IndicatorLabel, metrics.grid.line1IndicatorColor], ["↓", "Import från nät", "#FF6B6B"]);
  assert.deepEqual([metrics.grid.line2Indicator, metrics.grid.line2IndicatorLabel, metrics.grid.line2IndicatorColor], ["↑", "Export till nät", "#35B86B"]);
  assert.equal(metrics.battery.line1, "1.20 kWh");
  assert.deepEqual([metrics.battery.line1Indicator, metrics.battery.line1IndicatorLabel], ["↓", "Laddat i batteriet"]);
  assert.deepEqual([metrics.battery.line2Indicator, metrics.battery.line2IndicatorLabel], ["↑", "Urladdat från batteriet"]);
  assert.equal(metrics.a, undefined);
  assert.equal(metrics.car.line1, "1.10 kWh");
  assert.equal(metrics.car.line2, "Energi idag");
  const labelFactory = await loadTypeScript("../src-v2/renderers/labels/label-factory.ts");
  const gridState = labelFactory.createGridLabel({ gridPower: 0, gridStatus: "Importerar", gridEntity: "grid" }, metrics.grid);
  const batteryState = labelFactory.createBatteryLabel({ batteryPower: 0, batterySoc: 60, batteryStatus: "Laddar", batteryEntity: "battery" }, metrics.battery);
  const gridCard = flattenTemplate(labelRenderer.renderLabel({ id: "grid", title: "GRID", icon: "grid", x: 0, y: 0, width: 200, height: 120 }, gridState, {}, false));
  const batteryCard = flattenTemplate(labelRenderer.renderLabel({ id: "battery", title: "BATTERY", icon: "battery", x: 0, y: 0, width: 200, height: 120 }, batteryState, {}, false));
  for (const card of [gridCard, batteryCard]) {
    assert.match(card, /energy-label-indicator/);
  }
  assert.ok(labelLayout.fitTextFontSize(metrics.grid.line1, 26, 100) > 20);
  assert.ok(labelLayout.fitTextFontSize(metrics.battery.line1, 26, 100) > 20);
  assert.match(gridCard, /3\.00 kWh/);
  assert.match(batteryCard, /1\.20 kWh/);
  assert.match(gridCard, /#FF6B6B/);
  assert.match(gridCard, /#35B86B/);
  assert.match(batteryCard, /#35B86B/);
  assert.match(batteryCard, /#E3A43B/);
  assert.equal(Object.values(metrics).some((metric) => /ofullständig|saknas/i.test(`${metric.line1} ${metric.line2} ${metric.line3}`)), false);
  assert.match(energyTodayLabels.getEnergyTodayCoverageNote(dashboard), /Täckningsstatus saknas/);
  assert.match(energyTodayLabels.getEnergyTodayCoverageNote(dashboard, ["gone"]), /Vissa dagsvärden saknas/);
});

test("today energy metrics map all six ordinary slots by their stable SBE consumer IDs", () => {
  const ids = Array.from({ length: 6 }, (_, index) => `daily-${index + 1}`);
  const dashboard = dashboardData.adaptDashboardCardData({
    contract_version: 2,
    calendar_analysis: { today: { consumers: Object.fromEntries(ids.map((id, index) => [id, {
      analysis: { energy_kwh: index + 1.25 },
    }])) } },
  });
  const devices = [
    { enabled: true, consumerId: "halo-1", status: "Charging" },
    ...ids.map((consumerId) => ({ enabled: true, consumerId, status: "Running" })),
    { enabled: false, status: "Select SBE consumer" },
  ];
  const metrics = energyTodayLabels.buildEnergyTodayLabelMetrics(devices, dashboard);
  assert.equal(metrics.device_1.line1, "1.25 kWh");
  assert.equal(metrics.device_6.line1, "6.25 kWh");
  assert.equal(metrics["consumer-7"].line2, "Energi idag");
});

test("label text keeps original hierarchy and only shrinks when text exceeds its box", () => {
  const fit = labelLayout.fitTextFontSize;
  assert.equal(fit("520 W", 26, 110), 26);
  assert.equal(fit("83 %", 19, 110), 19);
  assert.ok(fit("Laddat 12.34 kWh", 19, 110) < 19);
  assert.ok(fit("A very long status string", 14, 110) <= 14);
  const bounded = labelLayout.fitSvgText("A user supplied title that is much too long", 14, 110);
  assert.ok(bounded.text.endsWith("…"));
  assert.ok(bounded.text.length < "A user supplied title that is much too long".length);
  assert.ok(bounded.fontSize <= 14);
});

test("energy-today label animation does not imply instantaneous power", () => {
  const label = { id: "house", title: "HOUSE", icon: "house", x: 0, y: 0, width: 200, height: 120 };
  const state = { line1: "4.20 kWh", line3: "Förbrukning idag", power: 2200, color: "#FF6B6B" };
  const live = flattenTemplate(labelRenderer.renderLabel(label, state, {}, true));
  const today = flattenTemplate(labelRenderer.renderLabel(label, state, {}, false));
  assert.match(live, /is-pulsing/);
  assert.match(live, /energy-label-glow/);
  assert.doesNotMatch(today, /is-pulsing|energy-label-glow/);
});

test("energy-today removes the completeness note and hides live status in every view", async () => {
  const cardSource = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  const styles = await readFile(new URL("../src-v2/styles/card-styles.ts", import.meta.url), "utf8");
  assert.doesNotMatch(cardSource, /renderValueNotes|value-mode-notes/);
  assert.doesNotMatch(styles, /value-mode-notes/);
  const labelsModule = await loadTypeScript("../src-v2/renderers/labels/desktop-labels.ts");
  const devices = Array.from({ length: 8 }, (_, index) => ({
    enabled: true, consumerId: `coverage-${index}`, title: `Device ${index}`,
    power: 100 + index, powerQuality: "valid", status: `Live status ${index}`, icon: index === 0 || index === 7 ? "car" : "appliance",
  }));
  const metrics = energyTodayLabels.buildEnergyTodayLabelMetrics(devices, undefined, true);
  const data = {
    devices, solarPower: 0, solarStatus: "Night", solarEntity: "",
    batterySoc: null, batteryPower: 0, batteryStatus: "Standby", batteryEntity: "",
    housePower: 0, houseStatus: "No load", houseEntity: "",
    gridPower: 0, gridStatus: "Balance", gridEntity: "",
  };
  for (const view of ["overview", "consumers"]) {
    const energyRendered = flattenTemplate(labelRendering.renderLabels(labelsModule.DESKTOP_LABELS, data, {}, view, metrics, false));
    assert.doesNotMatch(energyRendered, /Live status [0-7]/, `${view} hides status in energy-today`);
    assert.match(energyRendered, /Energi idag/);
    const liveRendered = flattenTemplate(labelRendering.renderLabels(labelsModule.DESKTOP_LABELS, data, {}, view, {}, true));
    assert.match(liveRendered, /Live status 0/);
    assert.match(liveRendered, /Live status 7/);
  }
});

test("mobile overview places consumer summary before phase analysis and keeps detail popup bounded", async () => {
  const styles = await readFile(new URL("../src-v2/styles/card-styles.ts", import.meta.url), "utf8");
  assert.match(styles, /\.card\.mobile \.consumer-summary \{[^}]*top:470px/);
  assert.match(styles, /\.card\.mobile \.compact-phase-panel \{[^}]*top:590px/);
  assert.match(styles, /aspect-ratio: 430 \/ 790/);
  assert.match(styles, /\.card\.mobile \.phase-network-detail \{ top:36px; right:6px; bottom:8px; left:6px; max-height:calc\(100% - 44px\); overflow-x:hidden; overflow-y:auto/);
  assert.match(styles, /\.card\.mobile \.detail-header \{ position:sticky/);
  assert.match(styles, /\.card\.mobile \.detail-phase-grid \{ grid-template-columns:minmax\(0,1fr\)/);
});

test("mobile phase popup trims dead space but keeps a bounded scrollable fallback", async () => {
  const styles = await readFile(new URL("../src-v2/styles/card-styles.ts", import.meta.url), "utf8");
  const rule = styles.match(/\.card\.mobile \.phase-network-detail \{([^}]*)\}/)?.[1] ?? "";
  const top = Number(rule.match(/top:(\d+)px/)?.[1]);
  const bottom = Number(rule.match(/bottom:(\d+)px/)?.[1]);
  const offset = Number(rule.match(/max-height:calc\(100% - (\d+)px\)/)?.[1]);
  assert.equal(offset, top + bottom);
  assert.ok(top >= 34);
  assert.match(rule, /overflow-y:auto/);
  assert.match(rule, /overflow-x:hidden/);
  assert.match(rule, /padding:6px/);
  assert.match(styles, /\.card\.mobile \.detail-header \{ position:sticky; top:-6px;[^}]*padding:3px 0/);
  assert.match(styles, /\.card\.mobile \.detail-grid-card \{ gap:5px; margin:8px auto 8px; padding:9px 10px; \}/);
  assert.match(styles, /\.card\.mobile \.detail-phase-grid \{ grid-template-columns:minmax\(0,1fr\); gap:5px; \}/);
  assert.match(styles, /\.card\.mobile \.detail-phase-card \{ padding:8px 10px; \}/);
  assert.match(styles, /\.card\.mobile \.detail-phase-values \{ gap:8px; margin-top:8px; \}/);
  assert.match(styles, /\.card\.mobile \.detail-phase-meter-label \{ margin-top:8px; \}/);
  assert.match(styles, /\.card\.mobile \.detail-phase-values strong \{ font-size:24px; \}/);
  assert.match(styles, /\.phase-network-detail \{ position:absolute; z-index:22; inset:70px 38px 30px; overflow:auto;[^}]*padding:30px 36px;/);
  assert.match(styles, /\.detail-grid-card \{ display:grid; gap:12px; max-width:1100px; margin:24px auto 28px; padding:30px 36px;/);
  const detail = await readFile(new URL("../src-v2/renderers/phase-network-detail.ts", import.meta.url), "utf8");
  for (const part of ["formatPower(phase?.power", "formatCurrent(phase?.current", "detail-phase-meter", "directionLabel(phase.direction)", "detail-meter-caption"]) {
    assert.ok(detail.includes(part), `${part} remains rendered`);
  }
});

test("consumer-summary flow endpoint follows summary box CSS on desktop and mobile", async () => {
  const styles = await readFile(new URL("../src-v2/styles/card-styles.ts", import.meta.url), "utf8");
  const desktop = styles.match(/\.consumer-summary \{ position: absolute; z-index: 19; left: (\d+)px; top: (\d+)px; width: (\d+)px/);
  const mobile = styles.match(/\.card\.mobile \.consumer-summary \{ left:(\d+)px; top:(\d+)px; width:calc\(100% - (\d+)px\)/);
  assert.ok(desktop && mobile);
  const [left, top, width] = desktop.slice(1).map(Number);
  const [mobileLeft, mobileTop, mobileInset] = mobile.slice(1).map(Number);
  assert.deepEqual(flowRendering.getConsumerSummaryPort(1920), { x: left + width / 2, y: top });
  assert.deepEqual(flowRendering.getConsumerSummaryPort(430), { x: mobileLeft + (430 - mobileInset) / 2, y: mobileTop });
  assert.deepEqual(flowRendering.getConsumerSummaryPort(430), { x: 215, y: 470 });
  assert.deepEqual(flowRendering.getConsumerSummaryPort(1920), { x: 980, y: 815 });
  const renderer = await readFile(new URL("../src-v2/renderers/flow-renderer.ts", import.meta.url), "utf8");
  assert.match(renderer, /ports\.consumerSummary = getConsumerSummaryPort\(layout\.sceneWidth\)/);
  for (const path of ["../src-v2/renderers/graph/desktop-flow-definitions.ts", "../src-v2/renderers/graph/mobile-flow-definitions.ts"]) {
    const definitions = await loadTypeScript(path);
    const definition = definitions.DESKTOP_FLOW_DEFINITIONS?.find((item) => item.id === "house-consumer-summary")
      ?? definitions.MOBILE_FLOW_DEFINITIONS?.find((item) => item.id === "house-consumer-summary");
    const ports = { houseBottomCenter: { x: 11, y: 22 }, consumerSummary: { x: 33, y: 44 } };
    assert.equal(definition.liveFlow, "house-consumer-summary");
    assert.equal(definition.getStart(ports), ports.houseBottomCenter);
    assert.equal(definition.getEnd(ports), ports.consumerSummary);
  }
});

test("compact phase overview omits amps while detail retains them; meter handles values safely", async () => {
  const card = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  const compact = card.match(/private renderCompactPhases[\s\S]*?(?=protected firstUpdated)/)?.[0] ?? "";
  const detail = await readFile(new URL("../src-v2/renderers/phase-network-detail.ts", import.meta.url), "utf8");
  assert.doesNotMatch(compact, /formatCurrent|phase\.current| A`/);
  assert.match(detail, /formatCurrent\(phase\?\.current/);
  assert.equal(phaseDetail.phaseMeterFill(75), 75);
  assert.equal(phaseDetail.phaseMeterFill(-10), 0);
  assert.equal(phaseDetail.phaseMeterFill(140), 100);
  assert.equal(phaseDetail.phaseMeterFill(0), 0);
  assert.equal(phaseDetail.phaseMeterFill(null), null);
  assert.equal(phaseDetail.phaseMeterFill(Number.NaN), null);
});

test("live phase detail renders and supports repeated back and reopen cycles", async () => {
  const phases = ["L1", "L2", "L3"].map((name, index) => ({
    name, current: index + 1, power: (index + 1) * 100, direction: "import",
  }));
  let returned = 0;
  const render = () => phaseDetail.renderPhaseNetworkDetail({
    phases, liveGridValue: 600, liveGridStatus: "Importerar", onBack: () => { returned += 1; },
  });
  for (let cycle = 0; cycle < 3; cycle += 1) {
    const template = render();
    const backHandler = template.find((part) => typeof part === "function");
    const renderedText = flattenTemplate(template);
    assert.equal(typeof backHandler, "function");
    assert.match(renderedText, /Fas- och nätanalys/);
    assert.match(renderedText, /\+600 W/);
    assert.match(renderedText, /1\.0 A/);
    assert.match(renderedText, /Importerar/);
    backHandler();
    render();
  }
  assert.equal(returned, 3);
  const source = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  assert.doesNotMatch(source, /HistoryRequestGate|appendLiveHistory|history_during_period/);
});

test("phase detail preserves signed direction and displays zero and missing live readings", () => {
  const phases = [
    { name: "L1", current: 0, power: -150, percent: 0, direction: "export", loadState: "normal" },
    { name: "L2", current: 2.1, power: 0, percent: 12, direction: "import", loadState: "normal" },
    { name: "L3", current: null, power: null, percent: null, direction: "missing", loadState: "missing" },
  ];
  const result = flattenTemplate(phaseDetail.renderPhaseNetworkDetail({
    phases, liveGridValue: -150, liveGridStatus: "Exporting", onBack: () => {},
  }));
  assert.match(result, /Exporting/);
  assert.match(result, /-150 W/);
  assert.match(result, /0 W/);
  assert.match(result, /— A/);
  assert.match(result, /Belastning L3 saknas/);
});

function flattenTemplate(value) {
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(flattenTemplate).join(" ");
  return "";
}

test("SBE dashboard adaptation preserves missing and partial energy quality", () => {
  const data = dashboardData.adaptDashboardCardData({
    contract_version: 2,
    energy: { today: {
      solar: { total_kwh: 2.5 }, battery: { charged_kwh: null, discharged_kwh: 1.2 },
      grid: { import: { value_kwh: 3, status: "partial", complete: false }, export: { value_kwh: null, status: "missing_statistics", complete: false } },
    } },
    calendar_analysis: { today: {
      house: { consumption_kwh: 4.2 },
      consumers: { a: { analysis: { energy_kwh: 1.1 } } },
    } },
  });
  assert.equal(data.solar.value, 2.5);
  assert.equal(data.solar.quality, "partial");
  assert.equal(data.gridImport.value, 3);
  assert.equal(data.gridImport.quality, "partial");
  assert.equal(data.gridExport.value, null);
  assert.equal(data.batteryCharged.value, null);
  assert.equal(data.consumers.get("a").value, 1.1);
  assert.equal(dashboardData.adaptDashboardCardData({ contract_version: 1 }), undefined);
});

test("consumer energy subtotal marks missing and unreported coverage as partial", () => {
  const metrics = new Map([["a", { value: 1.25, unit: "kWh", quality: "partial" }]]);
  const result = dashboardData.summarizeConsumerEnergy([
    { enabled: true, consumerId: "a" }, { enabled: true, consumerId: "b" },
  ], metrics);
  assert.equal(result.metric.value, 1.25);
  assert.equal(result.metric.quality, "partial");
  assert.equal(result.missingCount, 1);
});

test("dashboard subscription is single-instance and releases a late subscription", async () => {
  const subscription = new dashboardSubscriptionModule.DashboardSubscription();
  let calls = 0;
  let released = 0;
  const connection = {
    subscribeMessage: async () => {
      calls += 1;
      return () => { released += 1; };
    },
  };
  await Promise.all([
    subscription.subscribe(connection, "entry", () => {}, assert.fail),
    subscription.subscribe(connection, "entry", () => {}, assert.fail),
  ]);
  assert.equal(calls, 1);
  subscription.unsubscribeNow();
  assert.equal(released, 1);

  let resolveSubscription;
  const pending = new dashboardSubscriptionModule.DashboardSubscription();
  const delayedConnection = { subscribeMessage: () => new Promise((resolve) => { resolveSubscription = resolve; }) };
  const operation = pending.subscribe(delayedConnection, "entry", () => {}, assert.fail);
  pending.unsubscribeNow();
  resolveSubscription(() => { released += 1; });
  await operation;
  assert.equal(released, 2);
});

test("Flow V2 renders phase data only from the SBE runtime and releases subscription on disconnect", async () => {
  const { readFile } = await import("node:fs/promises");
  const card = await readFile(new URL("../src-v2/card.ts", import.meta.url), "utf8");
  const phaseRenderer = await readFile(new URL("../src-v2/renderers/phase-load-renderer.ts", import.meta.url), "utf8");
  assert.match(card, /subscribe_live_runtime/);
  assert.match(card, /renderCompactPhases\(phaseLoadData, phaseLoadSummary\)/);
  assert.match(card, /void unsubscribe\(\)\.catch/);
  assert.match(phaseRenderer, /phase\.activeSegments/);
  assert.match(phaseRenderer, /phase\.loadState/);
  assert.match(phaseRenderer, /FASBELASTNING/);
});

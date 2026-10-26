import { adaptConsumerRuntimeSnapshot, type ConsumerRuntimeSnapshot } from "./consumer-runtime";
import { adaptLivePowerSnapshot, type LivePowerSnapshot } from "./live-power";

export interface RuntimePhase {
  name: "L1" | "L2" | "L3";
  current: number | null;
  power: number | null;
  percent: number | null;
  activeSegments: number | null;
  direction: "import" | "export" | "missing";
  loadState: "normal" | "warning" | "critical" | "missing";
}

export interface RuntimePhaseSummary {
  powerComplete: boolean;
  netPower: number | null;
  importPower: number | null;
  exportPower: number | null;
  loadComplete: boolean;
  mostLoadedPhase: { name: RuntimePhase["name"]; percent: number } | null;
  activeSegments: number | null;
  loadState: RuntimePhase["loadState"];
  direction: RuntimePhase["direction"];
}

export interface LiveRuntimeSnapshot {
  contract_version: 1;
  livePower: LivePowerSnapshot;
  consumers: ConsumerRuntimeSnapshot;
  batterySoc: { entityId: string | null; value: number | null; quality: string };
  phaseLoad: {
    phases: RuntimePhase[];
    summary: RuntimePhaseSummary;
  };
}

type RecordValue = Record<string, unknown>;
const record = (value: unknown): RecordValue | undefined =>
  value !== null && typeof value === "object" ? value as RecordValue : undefined;
const finite = (value: unknown): number | null =>
  typeof value === "number" && Number.isFinite(value) ? value : null;

export function adaptLiveRuntimeSnapshot(value: unknown): LiveRuntimeSnapshot | undefined {
  const payload = record(value);
  if (payload?.contract_version !== 1) return undefined;
  const livePower = adaptLivePowerSnapshot(payload.live_power);
  const consumers = adaptConsumerRuntimeSnapshot(payload.consumers);
  const batterySoc = record(payload.battery_soc);
  const phaseLoad = record(payload.phase_load);
  const summary = record(phaseLoad?.summary);
  if (!livePower.snapshot || !consumers || phaseLoad?.contract_version !== 1 ||
      !Array.isArray(phaseLoad.phases) || !summary) return undefined;

  const phases: RuntimePhase[] = [];
  for (const value of phaseLoad.phases) {
    const phase = record(value);
    if (phase?.name !== "L1" && phase?.name !== "L2" && phase?.name !== "L3") continue;
    const direction = phase.direction === "import" || phase.direction === "export" ? phase.direction : "missing";
    const loadState = phase.load_state === "normal" || phase.load_state === "warning" || phase.load_state === "critical"
      ? phase.load_state : "missing";
    phases.push({
      name: phase.name,
      current: finite(phase.current),
      power: finite(phase.power),
      percent: finite(phase.percent),
      activeSegments: finite(phase.active_segments),
      direction,
      loadState,
    });
  }
  if (phases.length !== 3) return undefined;
  const mostLoadedValue = record(summary.most_loaded_phase);
  const summaryDirection = summary.direction === "import" || summary.direction === "export" ? summary.direction : "missing";
  const summaryLoadState = summary.load_state === "normal" || summary.load_state === "warning" || summary.load_state === "critical"
    ? summary.load_state : "missing";
  return {
    contract_version: 1,
    livePower: livePower.snapshot,
    consumers,
    batterySoc: {
      entityId: typeof batterySoc?.entity_id === "string" ? batterySoc.entity_id : null,
      value: batterySoc?.quality === "valid" ? finite(batterySoc.value) : null,
      quality: typeof batterySoc?.quality === "string" ? batterySoc.quality : "missing",
    },
    phaseLoad: {
      phases,
      summary: {
        powerComplete: summary.power_complete === true,
        netPower: finite(summary.net_power_w),
        importPower: finite(summary.import_power_w),
        exportPower: finite(summary.export_power_w),
        loadComplete: summary.load_complete === true,
        mostLoadedPhase: mostLoadedValue &&
          (mostLoadedValue.name === "L1" || mostLoadedValue.name === "L2" || mostLoadedValue.name === "L3") &&
          finite(mostLoadedValue.percent) !== null
          ? { name: mostLoadedValue.name, percent: finite(mostLoadedValue.percent)! }
          : null,
        activeSegments: finite(summary.active_segments),
        loadState: summaryLoadState,
        direction: summaryDirection,
      },
    },
  };
}

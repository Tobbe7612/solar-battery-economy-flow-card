import { CONSUMER_SLOT_INDICES } from "./device-slots";

export interface EnergyMetric {
  value: number | null;
  unit: "kWh";
  quality: "valid" | "partial" | "missing";
  detail?: string;
}

export interface DashboardCardData {
  solar: EnergyMetric;
  gridImport: EnergyMetric;
  gridExport: EnergyMetric;
  batteryCharged: EnergyMetric;
  batteryDischarged: EnergyMetric;
  house: EnergyMetric;
  consumers: Map<string, EnergyMetric>;
}

type RecordValue = Record<string, unknown>;
const record = (value: unknown): RecordValue | undefined =>
  value !== null && typeof value === "object" ? value as RecordValue : undefined;

function numeric(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function plainMetric(value: unknown, detail = "SBE lämnar ingen täckningsstatus för detta dagsvärde"): EnergyMetric {
  const parsed = numeric(value);
  return { value: parsed, unit: "kWh", quality: parsed === null ? "missing" : "partial", ...(parsed === null ? {} : { detail }) };
}

function gridMetric(value: unknown): EnergyMetric {
  const item = record(value);
  const parsed = numeric(item?.value_kwh);
  const status = typeof item?.status === "string" ? item.status : "";
  const complete = item?.complete === true || status === "complete";
  const acceptable = parsed !== null && (complete || status === "partial");
  return {
    value: acceptable ? parsed : null,
    unit: "kWh",
    quality: !acceptable ? "missing" : complete ? "valid" : "partial",
    ...(acceptable && !complete ? { detail: status || "Delvis täckning" } : {}),
  };
}

export function adaptDashboardCardData(value: unknown): DashboardCardData | undefined {
  const payload = record(value);
  if (payload?.contract_version !== 2) return undefined;
  const energy = record(payload.energy);
  const today = record(energy?.today);
  const solar = record(today?.solar);
  const battery = record(today?.battery);
  const grid = record(today?.grid);
  const gridImport = record(grid?.import);
  const gridExport = record(grid?.export);
  const todayAnalysis = record(record(payload.calendar_analysis)?.today);
  const houseAnalysis = record(todayAnalysis?.house);
  const consumerRows = record(todayAnalysis?.consumers);
  const consumers = new Map<string, EnergyMetric>();
  for (const [id, raw] of Object.entries(consumerRows ?? {})) {
    const analysis = record(record(raw)?.analysis);
    consumers.set(id, plainMetric(analysis?.energy_kwh, "SBE:s konsumentdata innehåller ingen täckningsflagga"));
  }
  return {
    solar: plainMetric(solar?.total_kwh),
    gridImport: gridMetric(gridImport),
    gridExport: gridMetric(gridExport),
    batteryCharged: plainMetric(battery?.charged_kwh),
    batteryDischarged: plainMetric(battery?.discharged_kwh),
    house: plainMetric(houseAnalysis?.consumption_kwh, "SBE:s husdata innehåller ingen täckningsflagga"),
    consumers,
  };
}

export interface ConsumerPowerSummary {
  value: number;
  enabledCount: number;
  validCount: number;
  missingCount: number;
  duplicateCount: number;
}

/** Returns only the six fixed ordinary-consumer slots; both vehicle slots stay separate. */
export function consumerSubtotalDevices<T>(devices: readonly T[]): T[] {
  return CONSUMER_SLOT_INDICES.map((index) => devices[index]).filter((device): device is T => device !== undefined);
}

export function summarizeConsumerPower(
  devices: readonly { enabled: boolean; consumerId?: string; power: number | null; powerQuality: string }[],
): ConsumerPowerSummary {
  const seen = new Set<string>();
  let value = 0;
  let validCount = 0;
  let enabledCount = 0;
  let missingCount = 0;
  let duplicateCount = 0;
  for (const device of devices) {
    if (!device.enabled) continue;
    enabledCount += 1;
    if (!device.consumerId || seen.has(device.consumerId)) {
      if (device.consumerId && seen.has(device.consumerId)) duplicateCount += 1;
      else missingCount += 1;
      continue;
    }
    seen.add(device.consumerId);
    if (device.powerQuality === "valid" && typeof device.power === "number" && Number.isFinite(device.power)) {
      value += device.power;
      validCount += 1;
    } else {
      missingCount += 1;
    }
  }
  return { value, enabledCount, validCount, missingCount, duplicateCount };
}

export function summarizeConsumerEnergy(
  devices: readonly { enabled: boolean; consumerId?: string }[],
  consumers: Map<string, EnergyMetric> | undefined,
): { metric: EnergyMetric; validCount: number; missingCount: number } {
  const seen = new Set<string>();
  let value = 0;
  let validCount = 0;
  let missingCount = 0;
  let partial = false;
  for (const device of devices) {
    if (!device.enabled) continue;
    if (!device.consumerId || seen.has(device.consumerId)) {
      missingCount += 1;
      continue;
    }
    seen.add(device.consumerId);
    const metric = consumers?.get(device.consumerId);
    if (!metric || metric.value === null) {
      missingCount += 1;
      continue;
    }
    value += metric.value;
    validCount += 1;
    partial ||= metric.quality === "partial";
  }
  const quality = validCount === 0 ? "missing" : missingCount > 0 || partial ? "partial" : "valid";
  return {
    metric: { value: validCount ? value : null, unit: "kWh", quality, ...(quality === "partial" ? { detail: "Delsumma; datatäckning är ofullständig eller saknar status" } : {}) },
    validCount,
    missingCount,
  };
}

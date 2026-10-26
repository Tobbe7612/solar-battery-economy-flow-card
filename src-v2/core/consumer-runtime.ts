export interface ConsumerRuntimeConsumer {
  consumer_id: string;
  name: string;
  energy_entity: string | null;
  power_entity: string | null;
  power: {
    value: number | null;
    unit: string | null;
    quality: string;
  };
  status: { entity_id: string | null; value: unknown; quality: string; level: number | null };
  soc: { entity_id: string | null; value: number | null; unit: string | null; quality: string };
  temperature: { entity_id: string | null; value: number | null; unit: string | null; quality: string };
}

export interface ConsumerRuntimeSnapshot {
  contract_version: 1;
  consumers: Map<string, ConsumerRuntimeConsumer>;
}

type UnknownRecord = Record<string, unknown>;

function asRecord(value: unknown): UnknownRecord | undefined {
  return value !== null && typeof value === "object"
    ? value as UnknownRecord
    : undefined;
}

export function adaptConsumerRuntimeSnapshot(
  value: unknown,
): ConsumerRuntimeSnapshot | undefined {
  const payload = asRecord(value);
  if (payload?.contract_version !== 1 || !Array.isArray(payload.consumers)) {
    return undefined;
  }

  const consumers = new Map<string, ConsumerRuntimeConsumer>();
  for (const item of payload.consumers) {
    const row = asRecord(item);
    const power = asRecord(row?.power);
    const status = asRecord(row?.status);
    const soc = asRecord(row?.soc);
    const temperature = asRecord(row?.temperature);
    if (
      typeof row?.consumer_id !== "string" ||
      !row.consumer_id ||
      typeof row.name !== "string" ||
      !power ||
      typeof power.quality !== "string"
    ) {
      continue;
    }

    const value = typeof power.value === "number" && Number.isFinite(power.value)
      ? power.value
      : null;
    consumers.set(row.consumer_id, {
      consumer_id: row.consumer_id,
      name: row.name,
      energy_entity: typeof row.energy_entity === "string"
        ? row.energy_entity
        : null,
      power_entity: typeof row.power_entity === "string"
        ? row.power_entity
        : null,
      power: {
        value,
        unit: typeof power.unit === "string" ? power.unit : null,
        quality: power.quality,
      },
      status: {
        entity_id: typeof status?.entity_id === "string" ? status.entity_id : null,
        value: status?.value,
        quality: typeof status?.quality === "string" ? status.quality : "missing",
        level: typeof status?.level === "number" && Number.isFinite(status.level) ? status.level : null,
      },
      soc: {
        entity_id: typeof soc?.entity_id === "string" ? soc.entity_id : null,
        value: typeof soc?.value === "number" && Number.isFinite(soc.value) ? soc.value : null,
        unit: typeof soc?.unit === "string" ? soc.unit : null,
        quality: typeof soc?.quality === "string" ? soc.quality : "missing",
      },
      temperature: {
        entity_id: typeof temperature?.entity_id === "string" ? temperature.entity_id : null,
        value: typeof temperature?.value === "number" && Number.isFinite(temperature.value) ? temperature.value : null,
        unit: typeof temperature?.unit === "string" ? temperature.unit : null,
        quality: typeof temperature?.quality === "string" ? temperature.quality : "missing",
      },
    });
  }

  return { contract_version: 1, consumers };
}

export function getConsumerPowerReading(
  consumerId: string | undefined,
  snapshot: ConsumerRuntimeSnapshot | undefined,
): ConsumerRuntimeConsumer["power"] | undefined {
  return consumerId ? snapshot?.consumers.get(consumerId)?.power : undefined;
}

export function getConsumerPowerEntity(
  consumerId: string | undefined,
  snapshot: ConsumerRuntimeSnapshot | undefined,
): string | undefined {
  if (!consumerId) {
    return undefined;
  }
  return snapshot?.consumers.get(consumerId)?.power_entity ?? undefined;
}

export function getConsumerName(
  consumerId: string | undefined,
  snapshot: ConsumerRuntimeSnapshot | undefined,
): string | undefined {
  if (!consumerId) {
    return undefined;
  }
  return snapshot?.consumers.get(consumerId)?.name;
}

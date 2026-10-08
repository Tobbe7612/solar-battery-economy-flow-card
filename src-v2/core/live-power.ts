export interface LivePowerSnapshot {
  unit?: string;
  flows: {
    solar_house: number;
    solar_battery: number;
    solar_export: number;
    battery_house: number;
    battery_grid: number;
    grid_house: number;
    grid_battery: number;
    unknown_grid_export: number;
  };
  aggregates: {
    solar_total: number;
    house_total: number;
    battery_net: number;
    grid_net: number;
  };
}

type UnknownRecord = Record<string, unknown>;

function asRecord(value: unknown): UnknownRecord | undefined {
  return value !== null && typeof value === 'object'
    ? value as UnknownRecord
    : undefined;
}

function readNumber(
  source: UnknownRecord,
  key: string,
): number | undefined {
  const flow = asRecord(source[key]);
  if (!flow) {
    return undefined;
  }

  const value = flow.value;
  if (typeof value !== 'number' && typeof value !== 'string') {
    return undefined;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return undefined;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
}

export function adaptLivePowerSnapshot(
  value: unknown,
): LivePowerSnapshot | undefined {
  const payload = asRecord(value);
  const sourceFlows = asRecord(payload?.flows);
  const sourceAggregates = asRecord(payload?.aggregates);
  if (!sourceFlows || !sourceAggregates) {
    return undefined;
  }

  const flows = {
    solar_house: readNumber(sourceFlows, 'solar_house'),
    solar_battery: readNumber(sourceFlows, 'solar_battery'),
    solar_export: readNumber(sourceFlows, 'solar_export'),
    battery_house: readNumber(sourceFlows, 'battery_house'),
    battery_grid: readNumber(sourceFlows, 'battery_grid'),
    grid_house: readNumber(sourceFlows, 'grid_house'),
    grid_battery: readNumber(sourceFlows, 'grid_battery'),
    unknown_grid_export: readNumber(sourceFlows, 'unknown_grid_export'),
  };
  const aggregates = {
    solar_total: readNumber(sourceAggregates, 'solar_total'),
    house_total: readNumber(sourceAggregates, 'house_total'),
    battery_net: readNumber(sourceAggregates, 'battery_net'),
    grid_net: readNumber(sourceAggregates, 'grid_net'),
  };

  if (
    Object.values(flows).some((flow) => flow === undefined) ||
    Object.values(aggregates).some((aggregate) => aggregate === undefined)
  ) {
    return undefined;
  }

  return {
    unit: typeof payload?.unit === 'string' ? payload.unit : undefined,
    flows: flows as LivePowerSnapshot['flows'],
    aggregates: aggregates as LivePowerSnapshot['aggregates'],
  };
}

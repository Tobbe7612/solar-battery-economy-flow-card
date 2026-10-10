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

export type LivePowerValueIssue = 'null' | 'missing' | 'invalid';

export type LivePowerAdaptation =
  | { snapshot: LivePowerSnapshot; issue?: undefined }
  | { snapshot?: undefined; issue: LivePowerValueIssue };

type UnknownRecord = Record<string, unknown>;
type NumberRead = { value: number } | { issue: LivePowerValueIssue };

function asRecord(value: unknown): UnknownRecord | undefined {
  return value !== null && typeof value === 'object'
    ? value as UnknownRecord
    : undefined;
}

function readNumber(
  source: UnknownRecord | undefined,
  key: string,
): NumberRead {
  if (!source || !(key in source)) {
    return { issue: 'missing' };
  }

  const flow = asRecord(source[key]);
  if (!flow || !('value' in flow)) {
    return { issue: 'missing' };
  }

  const value = flow.value;
  if (value === null) {
    return { issue: 'null' };
  }
  if (typeof value !== 'number' && typeof value !== 'string') {
    return { issue: 'invalid' };
  }
  if (typeof value === 'string' && value.trim() === '') {
    return { issue: 'invalid' };
  }

  const number = Number(value);
  return Number.isFinite(number)
    ? { value: number }
    : { issue: 'invalid' };
}

export function adaptLivePowerSnapshot(
  value: unknown,
): LivePowerAdaptation {
  const payload = asRecord(value);
  const sourceFlows = asRecord(payload?.flows);
  const sourceAggregates = asRecord(payload?.aggregates);
  if (!sourceFlows || !sourceAggregates) {
    return { issue: 'missing' };
  }

  const flowValues = {
    solar_house: readNumber(sourceFlows, 'solar_house'),
    solar_battery: readNumber(sourceFlows, 'solar_battery'),
    solar_export: readNumber(sourceFlows, 'solar_export'),
    battery_house: readNumber(sourceFlows, 'battery_house'),
    battery_grid: readNumber(sourceFlows, 'battery_grid'),
    grid_house: readNumber(sourceFlows, 'grid_house'),
    grid_battery: readNumber(sourceFlows, 'grid_battery'),
    unknown_grid_export: readNumber(sourceFlows, 'unknown_grid_export'),
  };
  const aggregateValues = {
    solar_total: readNumber(sourceAggregates, 'solar_total'),
    house_total: readNumber(sourceAggregates, 'house_total'),
    battery_net: readNumber(sourceAggregates, 'battery_net'),
    grid_net: readNumber(sourceAggregates, 'grid_net'),
  };
  const reads = [...Object.values(flowValues), ...Object.values(aggregateValues)];
  const issue = reads.find((read): read is { issue: LivePowerValueIssue } => 'issue' in read);
  if (issue) {
    return { issue: issue.issue };
  }

  const numericValue = (read: NumberRead): number => {
    if ('value' in read) {
      return read.value;
    }
    throw new Error('Unreachable Live Power value state');
  };

  return {
    snapshot: {
      unit: typeof payload?.unit === 'string' ? payload.unit : undefined,
      flows: {
        solar_house: numericValue(flowValues.solar_house),
        solar_battery: numericValue(flowValues.solar_battery),
        solar_export: numericValue(flowValues.solar_export),
        battery_house: numericValue(flowValues.battery_house),
        battery_grid: numericValue(flowValues.battery_grid),
        grid_house: numericValue(flowValues.grid_house),
        grid_battery: numericValue(flowValues.grid_battery),
        unknown_grid_export: numericValue(flowValues.unknown_grid_export),
      },
      aggregates: {
        solar_total: numericValue(aggregateValues.solar_total),
        house_total: numericValue(aggregateValues.house_total),
        battery_net: numericValue(aggregateValues.battery_net),
        grid_net: numericValue(aggregateValues.grid_net),
      },
    },
  };
}

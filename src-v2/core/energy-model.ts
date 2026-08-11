import { findMainFlowEntities } from "../config/autodiscovery";

export interface LiveFlow {
  id: string;
  active: boolean;
  power: number;
  intensity: number;
}

export function getLiveFlows(
    hass: any
): Record<string, LiveFlow> {

  const getPower = (entity?: string): number => {
    if (!entity) {
      return 0;
    }
    const state = hass?.states?.[entity]?.state;
    const value = Number(state);
    return isNaN(value)
      ? 0
      : value;
  };

  // Same 8 sensors as card-data.ts's main flow, resolved via the
  // same discovery lookup — one source of truth, no more risk of
  // the two drifting apart.
  const flowEntities = findMainFlowEntities(hass);

  const flows: Record<string, LiveFlow> = {
    'solar-house': createFlow(
      'solar-house',
      getPower(flowEntities.solarHouse)
    ),
    'solar-battery': createFlow(
      'solar-battery',
      getPower(flowEntities.solarBattery)
    ),
    'solar-export': createFlow(
      'solar-export',
      getPower(flowEntities.solarExport)
    ),
    'battery-house': createFlow(
      'battery-house',
      getPower(flowEntities.batteryHouse)
    ),
    'battery-grid': createFlow(
      'battery-grid',
      getPower(flowEntities.batteryGrid)
    ),
    'grid-house': createFlow(
      'grid-house',
      getPower(flowEntities.gridHouse)
    ),
    'grid-battery': createFlow(
      'grid-battery',
      getPower(flowEntities.gridBattery)
    ),
    // Device flows — unchanged for now (Etapp 3b).
    'house-spa': createFlow(
      'house-spa',
      getPower(
        'sensor.plugg_spabad_power'
      )
    ),
    'house-car': createFlow(
      'house-car',
      getPower(
        'sensor.volvo_ec40_charging_power'
      )
    ),
    'house-heatpump': createFlow(
      'house-heatpump',
      getPower(
        'sensor.thermia_power_estimator_total_effekt'
      )
    ),
    'house-appliance': createFlow(
      'house-appliance',
      getPower(
        'sensor.vitvaror_effekt'
      )
    ),
  };
  return flows;
}

function createFlow(
  id: string,
  power: number
): LiveFlow {
  const active = power > 1;
  const intensity = Math.min(
    1,
    power / 5000
  );

  return {
    id,
    power,
    active,
    intensity
  };
}

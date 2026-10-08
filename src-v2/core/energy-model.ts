import type { FlowCardConfig } from "../config/config";
import type { LivePowerSnapshot } from "./live-power";

export interface LiveFlow {
  id: string;
  active: boolean;
  power: number;
  intensity: number;
}

export function getLiveFlows(
    hass: any,
    config: FlowCardConfig,
    livePowerSnapshot?: LivePowerSnapshot,
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

  const livePower = livePowerSnapshot?.flows;

  const flows: Record<string, LiveFlow> = {
    'solar-house': createFlow(
      'solar-house',
      livePower?.solar_house ?? 0
    ),
    'solar-battery': createFlow(
      'solar-battery',
      livePower?.solar_battery ?? 0
    ),
    'solar-export': createFlow(
      'solar-export',
      livePower?.solar_export ?? 0
    ),
    'battery-house': createFlow(
      'battery-house',
      livePower?.battery_house ?? 0
    ),
    'battery-grid': createFlow(
      'battery-grid',
      livePower?.battery_grid ?? 0
    ),
    'grid-house': createFlow(
      'grid-house',
      livePower?.grid_house ?? 0
    ),
    'grid-battery': createFlow(
      'grid-battery',
      livePower?.grid_battery ?? 0
    ),
    'house-spa': createFlow(
          'house-spa',
          getPower(
              config.devices[1]?.powerEntity
          )
      ),

      'house-car': createFlow(
          'house-car',
          getPower(
              config.devices[0]?.powerEntity
          )
      ),

      'house-heatpump': createFlow(
          'house-heatpump',
          getPower(
              config.devices[2]?.powerEntity
          )
      ),

      'house-appliance': createFlow(
          'house-appliance',
          getPower(
              config.devices[3]?.powerEntity
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

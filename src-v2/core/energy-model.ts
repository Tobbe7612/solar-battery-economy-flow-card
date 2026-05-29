export interface LiveFlow {

  id: string;

  active: boolean;

  power: number;

  intensity: number;
}

export function getLiveFlows(hass: any) {

  const getPower = (entity: string): number => {

    const state = hass?.states?.[entity]?.state;

    const value = Number(state);

    return isNaN(value)
      ? 0
      : value;
  };

  const flows: Record<string, LiveFlow> = {

    'solar-house': createFlow(
      'solar-house',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_solar_house'
      )
    ),

    'solar-battery': createFlow(
      'solar-battery',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_solar_battery'
      )
    ),

    'solar-export': createFlow(
      'solar-export',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_solar_export'
      )
    ),

    'battery-house': createFlow(
      'battery-house',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_battery_house'
      )
    ),

    'battery-grid': createFlow(
      'battery-grid',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_battery_grid'
      )
    ),

    'grid-house': createFlow(
      'grid-house',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_grid_house'
      )
    ),

    'grid-battery': createFlow(
      'grid-battery',
      getPower(
        'sensor.solar_battery_economy_energy_system_power_grid_battery'
      )
    )
  };

  return flows;
}

function createFlow(
  id: string,
  power: number
): LiveFlow {

  const active = power > 10;

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
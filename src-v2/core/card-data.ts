export interface CardData {
  solarEnergy: number;

  batteryToHouse: number;
  solarExportEnergy: number;
  gridToHouseEnergy: number;

  systemEfficiency: number;
  savingsToday: number;
  totalSavings: number;

  gridIndependence: number;
  co2Saved: number;
  selfSufficiency: number;
}

export function getCardData(
  hass: any
): CardData {

  const solarEnergy =
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_solar_house'
      ]?.state ?? 0
    ) +
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_solar_battery'
      ]?.state ?? 0
    ) +
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_solar_export'
      ]?.state ?? 0
    );

  const systemEfficiency =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_31_battery_utilization'
      ]?.state ?? 0
    );

  const savingsToday =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_03_savings_today'
      ]?.state ?? 0
    );

  const co2Saved =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_33_co2_saved'
      ]?.state ?? 0
    );

  const selfSufficiency =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_32_solar_self_consumption_rate'
      ]?.state ?? 0
    );

  const batteryToHouse =
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_battery_house'
      ]?.state ?? 0
    );

  const solarExportEnergy =
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_solar_export'
      ]?.state ?? 0
    );

  const gridToHouseEnergy =
    Number(
      hass.states[
        'sensor.solar_battery_economy_energy_system_energy_grid_house'
      ]?.state ?? 0
    );

  const totalSavings =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_01_total_savings'
      ]?.state ?? 0
    );

  const gridIndependence =
    Number(
      hass.states[
        'sensor.solar_battery_economy_financial_30_grid_independence'
      ]?.state ?? 0
    );

  return {

    solarEnergy,

    batteryToHouse,
    solarExportEnergy,
    gridToHouseEnergy,

    systemEfficiency,
    savingsToday,
    totalSavings,

    gridIndependence,
    co2Saved,
    selfSufficiency
  };
}
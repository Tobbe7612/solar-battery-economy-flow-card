export interface CardData {
  solarPower: number;
  solarStatus: string;

  batteryToHouse: number;
  solarExportEnergy: number;
  gridToHouseEnergy: number;

  systemEfficiency: number;
  savingsToday: number;
  totalSavings: number;

  gridIndependence: number;
  co2Saved: number;
  selfSufficiency: number;

  batterySoc: number;
  batteryPower: number;
  batteryStatus: string;

  housePower: number;
  houseStatus: string;

  gridPower: number;
  gridStatus: string;

  carPower: number;
  carSoc: number;
  carStatus: string;

  spaPower: number;
  spaTemperature: number;
  spaStatus: string;

  heatpumpPower: number;
  heatpumpStatus: string;

  appliancePower: number;
  applianceStatus: string;
}

export function getCardData(
  hass: any
): CardData {

  const solarPower =
    Number(
        hass.states[
            "sensor.solar_battery_economy_energy_system_power_solar_house"
        ]?.state ?? 0
    )
    +
    Number(
        hass.states[
            "sensor.solar_battery_economy_energy_system_power_solar_battery"
        ]?.state ?? 0
    )
    +
    Number(
        hass.states[
            "sensor.solar_battery_economy_energy_system_power_solar_export"
        ]?.state ?? 0
    );

  const solarStatus =
    hass?.states?.["sun.sun"]?.state === "above_horizon"
        ? "Över horisonten"
        : "Under horisonten";

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

  const batterySoc =
    Number(
      hass.states[
        "sensor.saj_battery_energy_percent"
      ]?.state ?? 0
    );

  const batteryPower =
    Number(
      hass.states[
        "sensor.saj_realtime_battery_power"
      ]?.state ?? 0
    );

  // SAJ:
  //  + batteryPower = Batteriet levererar effekt (urladdar)
  //  - batteryPower = Batteriet tar emot effekt (laddar)
  const batteryStatus =
      batteryPower < -1
          ? "Laddar"
          : batteryPower > 1
              ? "Urladdar"
              : "Standby";

  const solarToHouse =
      Number(
          hass.states[
              "sensor.solar_battery_economy_energy_system_power_solar_house"
          ]?.state ?? 0
      );

  const batteryToHousePower =
      Number(
          hass.states[
              "sensor.solar_battery_economy_energy_system_power_battery_house"
          ]?.state ?? 0
      );

  const gridToHousePower =
      Number(
          hass.states[
              "sensor.solar_battery_economy_energy_system_power_grid_house"
          ]?.state ?? 0
      );

  const housePower =
      solarToHouse +
      batteryToHousePower +
      gridToHousePower;

  const houseSources: string[] = [];

  if (solarToHouse > 1) {
      houseSources.push("Sol");
  }

  if (batteryToHousePower > 1) {
      houseSources.push("Batteri");
  }

  if (gridToHousePower > 1) {
      houseSources.push("Elnät");
  }

  const houseStatus =
      houseSources.length > 0
          ? houseSources.join(" + ")
          : "Ingen last";

  const houseToGridPower =
      Number(
          hass.states[
              "sensor.solar_battery_economy_energy_system_power_house_grid"
          ]?.state ?? 0
      );

  const batteryToGridPower =
      Number(
          hass.states[
              "sensor.solar_battery_economy_energy_system_power_battery_grid"
          ]?.state ?? 0
      );
    const gridToBatteryPower =
        Number(
            hass.states[
                "sensor.solar_battery_economy_energy_system_power_grid_battery"
            ]?.state ?? 0
        );

    const solarToGridPower =
        Number(
            hass.states[
                "sensor.solar_battery_economy_energy_system_power_solar_export"
            ]?.state ?? 0
        );

  const gridPower =
        gridToHousePower +
        gridToBatteryPower -
        houseToGridPower -
        batteryToGridPower -
        solarToGridPower;

  const gridStatus =
      gridPower > 1
          ? "Importerar"
          : gridPower < -1
              ? "Exporterar"
              : "Balans";

  const carPower =
      Number(
          hass.states[
              "sensor.volvo_ec40_charging_power"
          ]?.state ?? 0
      );

  const carSoc =
      Number(
          hass.states[
              "sensor.volvo_ec40_batteri"
          ]?.state ?? 0
      );

  const carStatus =
      hass.states[
          "sensor.volvo_ec40_charging_status"
      ]?.state ?? "Okänd";

  const spaPower =
      Number(
          hass.states[
              "sensor.plugg_spabad_power"
          ]?.state ?? 0
      );

  const spaTemperature =
      Number(
          hass.states[
              "climate.spa_thermostat"
          ]?.attributes?.current_temperature ?? 0
      );

  const hvacMode =
      hass.states[
          "climate.spa_thermostat"
      ]?.state ?? "";

  const hvacAction =
      hass.states[
          "climate.spa_thermostat"
      ]?.attributes?.hvac_action ?? "";

  const spaStatus =
      hvacMode === "off"
          ? "Av"
          : hvacAction === "heating"
              ? "Värmer"
              : "Standby";

  const heatpumpPower =
      Number(
          hass.states[
              "sensor.thermia_power_estimator_total_effekt"
          ]?.state ?? 0
      );

  const heatpumpStatus =
      hass.states[
          "sensor.thermia_power_estimator_driftlage"
      ]?.state ?? "Okänd";

  const appliancePower =
      Number(
          hass.states[
              "sensor.vitvaror_effekt"
          ]?.state ?? 0
      );

  const applianceStatus =
      appliancePower > 1
          ? "Aktiv"
          : "Standby";
 
  return {

    solarPower,
    solarStatus,

    batteryToHouse,
    solarExportEnergy,
    gridToHouseEnergy,

    systemEfficiency,
    savingsToday,
    totalSavings,

    gridIndependence,
    co2Saved,
    selfSufficiency,

    batterySoc,
    batteryPower,
    batteryStatus,

    housePower,
    houseStatus,

    gridPower,
    gridStatus,

    carPower,
    carSoc,
    carStatus,

    spaPower,
    spaTemperature,
    spaStatus,

    heatpumpPower,
    heatpumpStatus,

    appliancePower,
    applianceStatus,
  };
}
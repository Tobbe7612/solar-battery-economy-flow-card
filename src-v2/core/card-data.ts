import {
    getNumber,
    getString,
    getAttribute,
} from "../utils/entity";
import { findMainFlowEntities } from "../config/autodiscovery";
import { FlowCardConfig } from "../config/config";

export interface CardData {
    solarPower: number;
    solarStatus: string;
    solarEntity: string;

  batteryToHouse: number;
  solarExportEnergy: number;
  gridToHouseEnergy: number;

    batteryUtilization: number;
    batteryUtilizationEntity: string;
    savingsToday: number;
    savingsTodayEntity: string;
    totalSavings: number;
    totalSavingsEntity: string;
    roi: number;
    roiEntity: string;

    gridIndependence: number;
    gridIndependenceEntity: string;
    co2Saved: number;
    co2SavedEntity: string;
    solarSelfConsumptionRate: number;
    solarSelfConsumptionRateEntity: string;

    batterySoc: number;
    batteryPower: number;
    batteryStatus: string;
    batteryEntity: string;

    housePower: number;
    houseStatus: string;
    houseEntity: string;

    gridPower: number;
    gridStatus: string;
    gridEntity: string;

    carPower: number;
    carSoc: number;
    carStatus: string;
    carEntity: string;

    spaPower: number;
    spaTemperature: number;
    spaStatus: string;
    spaEntity: string;

    heatpumpPower: number;
    heatpumpStatus: string;
    heatpumpEntity: string;

    appliancePower: number;
    applianceStatus: string;
    applianceEntity: string;

    importToday: number;
    importTodayEntity: string;
    exportToday: number;
    exportTodayEntity: string;

    savingsThisMonth: number;
    savingsThisMonthEntity: string;
    savingsThisYear: number;
    savingsThisYearEntity: string;
    estimatedAnnualSavings: number;
    estimatedAnnualSavingsEntity: string;
    paybackTime: number | string;
    paybackTimeEntity: string;
}

export function getCardData(
  hass: any,
  config?: FlowCardConfig
): CardData {

  // ============================================================
  // Main flow — always computed from auto-discovered
  // energy_system_power_* sensors. No manual override: each of
  // these is already a sum of several sensors, so there is no
  // single entity a user could meaningfully swap in instead.
  // ============================================================

  const flowEntities = findMainFlowEntities(hass);

  const solarHouse =
      flowEntities.solarHouse
          ? getNumber(hass, flowEntities.solarHouse)
          : 0;
  const solarBattery =
      flowEntities.solarBattery
          ? getNumber(hass, flowEntities.solarBattery)
          : 0;
  const solarExport =
      flowEntities.solarExport
          ? getNumber(hass, flowEntities.solarExport)
          : 0;
  const batteryHouse =
      flowEntities.batteryHouse
          ? getNumber(hass, flowEntities.batteryHouse)
          : 0;
  const batteryGrid =
      flowEntities.batteryGrid
          ? getNumber(hass, flowEntities.batteryGrid)
          : 0;
  const gridHouse =
      flowEntities.gridHouse
          ? getNumber(hass, flowEntities.gridHouse)
          : 0;
  const gridBattery =
      flowEntities.gridBattery
          ? getNumber(hass, flowEntities.gridBattery)
          : 0;
  const houseGrid =
      flowEntities.houseGrid
          ? getNumber(hass, flowEntities.houseGrid)
          : 0;

  const solarPower =
      solarHouse + solarBattery + solarExport;

  const housePower =
      solarHouse + batteryHouse + gridHouse;

  const gridPower =
      gridHouse + gridBattery
      - houseGrid - batteryGrid - solarExport;

  // Net battery power, derived the same way we verified against
  // the real sensor list: (in) - (out). No SAJ-specific sensor
  // needed anymore.
  const batteryPower =
      (solarBattery + gridBattery)
      - (batteryHouse + batteryGrid);

  // Cumulative energy (kWh) sensors — separate from the power (W)
  // sensors above. Not part of the Etapp 3a discovery scope; kept
  // hardcoded exactly as before.
  const batteryToHouse =
      getNumber(
          hass,
          "sensor.solar_battery_economy_energy_system_energy_battery_house"
      );

  const solarExportEnergy =
      getNumber(
          hass,
          "sensor.solar_battery_economy_energy_system_energy_solar_export"
      );

  const gridToHouseEnergy =
      getNumber(
          hass,
          "sensor.solar_battery_economy_energy_system_energy_grid_house"
      );

  const solarStatus =
    getString(hass, "sun.sun") === "above_horizon"
        ? "Over horizon"
        : "Under horizon";

  const batteryStatus =
      batteryPower > 1
          ? "Charging"
          : batteryPower < -1
              ? "Discharging"
              : "Standby";

  const houseSources: string[] = [];

  if (solarHouse > 1) {
      houseSources.push("Solar");
  }

  if (batteryHouse > 1) {
      houseSources.push("Battery");
  }

  if (gridHouse > 1) {
      houseSources.push("Grid");
  }

  const houseStatus =
      houseSources.length > 0
          ? houseSources.join(" + ")
          : "No load";

  const gridStatus =
      gridPower > 1
          ? "Importing"
          : gridPower < -1
              ? "Exporting"
              : "Balance";

  // Battery SOC has no integration sensor at all (verified against
  // the full sensor list) — always manual config.
  const batterySoc =
      config?.batterySocEntity
          ? getNumber(hass, config.batterySocEntity)
          : 0;

  // "More info" click targets — independent of the computed sums
  // above, since a computed value has no entity_id of its own.
  // Fall back to the previous hardcoded defaults when not
  // configured, so nothing breaks before the editor UI exists.
  const solarEntity =
      config?.solarInfoEntity ?? "sensor.solaredge_ac_power";
  const gridEntity =
      config?.gridInfoEntity ?? "sensor.effekt_alla_faser";
  const houseEntity =
      config?.houseInfoEntity ?? "sensor.forbrukning_nu_ny";
  const batteryEntity =
      config?.batteryInfoEntity ?? "sensor.saj_realtime_battery_power";

  // ============================================================
  // Side panels — discovery/config-driven, with the previous
  // hardcoded sensor names as fallback defaults (so the card keeps
  // working exactly as before if no config/editor exists yet).
  // importToday/exportToday are never auto-filled (not part of the
  // integration) but still respect a manual override.
  // ============================================================

  const batteryUtilizationEntity =
      config?.sidePanels?.energy?.batteryUtilizationEntity
      ?? "sensor.solar_battery_economy_financial_31_battery_utilization";
  const batteryUtilization =
      getNumber(hass, batteryUtilizationEntity);

  const savingsTodayEntity =
      config?.sidePanels?.economy?.savingsTodayEntity
      ?? "sensor.solar_battery_economy_financial_03_savings_today";
  const savingsToday =
      getNumber(hass, savingsTodayEntity);

  const co2SavedEntity =
      config?.sidePanels?.energy?.co2SavedEntity
      ?? "sensor.solar_battery_economy_financial_33_co2_saved";
  const co2Saved =
      getNumber(hass, co2SavedEntity);

  const solarSelfConsumptionRateEntity =
      config?.sidePanels?.energy?.solarSelfConsumptionEntity
      ?? "sensor.solar_battery_economy_financial_32_solar_self_consumption_rate";
  const solarSelfConsumptionRate =
      getNumber(hass, solarSelfConsumptionRateEntity);

  const totalSavingsEntity =
      config?.sidePanels?.economy?.totalSavingsEntity
      ?? "sensor.solar_battery_economy_financial_01_total_savings";
  const totalSavings =
      getNumber(hass, totalSavingsEntity);

  const roiEntity =
      config?.sidePanels?.economy?.roiEntity
      ?? "sensor.solar_battery_economy_financial_12_return_on_investment";
  const roi =
      getNumber(hass, roiEntity);

  const importTodayEntity =
      config?.sidePanels?.energy?.importTodayEntity
      ?? "sensor.import_idag";
  const importToday =
      getNumber(hass, importTodayEntity);

  const exportTodayEntity =
      config?.sidePanels?.energy?.exportTodayEntity
      ?? "sensor.export_idag";
  const exportToday =
      getNumber(hass, exportTodayEntity);

  const savingsThisMonthEntity =
      config?.sidePanels?.economy?.savingsThisMonthEntity
      ?? "sensor.solar_battery_economy_financial_04_savings_this_month";
  const savingsThisMonth =
      getNumber(hass, savingsThisMonthEntity);

  const savingsThisYearEntity =
      config?.sidePanels?.economy?.savingsThisYearEntity
      ?? "sensor.solar_battery_economy_financial_05_savings_this_year";
  const savingsThisYear =
      getNumber(hass, savingsThisYearEntity);

  const estimatedAnnualSavingsEntity =
      config?.sidePanels?.economy?.estimatedAnnualSavingsEntity
      ?? "sensor.solar_battery_economy_financial_02_estimated_annual_savings";
  const estimatedAnnualSavings =
      getNumber(hass, estimatedAnnualSavingsEntity);

  const paybackTimeEntity =
      config?.sidePanels?.economy?.paybackTimeEntity
      ?? "sensor.solar_battery_economy_financial_10_payback_time";
  const paybackTime =
      getNumber(hass, paybackTimeEntity);

  const gridIndependenceEntity =
      config?.sidePanels?.energy?.gridIndependenceEntity
      ?? "sensor.solar_battery_economy_financial_30_grid_independence";
  const gridIndependence =
      getNumber(hass, gridIndependenceEntity);

  // ============================================================
  // Device slots (car/spa/heatpump/appliance) — unchanged for now.
  // Generalizing these to config.devices is a separate, later step
  // ("Etapp 3b").
  // ============================================================

  const carPower =
      getNumber(
          hass,
          "sensor.volvo_ec40_charging_power"
      );

  const carSoc =
      getNumber(
          hass,
          "sensor.volvo_ec40_batteri"
      );

  const carStatus =
      getString(
          hass,
          "sensor.volvo_ec40_charging_status",
          "Unknown"
      );

  const spaPower =
      getNumber(
          hass,
          "sensor.plugg_spabad_power"
      );

  const spaTemperature =
      getAttribute<number>(
          hass,
          "climate.spa_thermostat",
          "current_temperature",
          0
      );

  const hvacMode =
      getString(
          hass,
          "climate.spa_thermostat"
      );

  const hvacAction =
      getAttribute<string>(
          hass,
          "climate.spa_thermostat",
          "hvac_action",
          ""
      );

  const spaStatus =
      hvacMode === "off"
          ? "Heating Off"
          : hvacAction === "Heating"
              ? "Heating"
              : "Standby";

  const heatpumpPower =
      getNumber(
          hass,
          "sensor.thermia_power_estimator_total_effekt"
      );

  const heatpumpStatus =
      getString(
          hass,
          "sensor.thermia_power_estimator_driftlage",
          "Okänd"
      );

  const appliancePower =
      getNumber(
          hass,
          "sensor.vitvaror_effekt"
      );

  const applianceStatus =
      appliancePower > 1
          ? "Active"
          : "Standby";

  return {

    solarPower,
    solarStatus,
    solarEntity,

    batteryToHouse,
    solarExportEnergy,
    gridToHouseEnergy,

    batteryUtilization,
    batteryUtilizationEntity,
    savingsToday,
    savingsTodayEntity,
    totalSavings,
    totalSavingsEntity,
    roi,
    roiEntity,

    importToday,
    importTodayEntity,

    exportToday,
    exportTodayEntity,

    savingsThisMonth,
    savingsThisMonthEntity,

    savingsThisYear,
    savingsThisYearEntity,

    estimatedAnnualSavings,
    estimatedAnnualSavingsEntity,

    paybackTime,
    paybackTimeEntity,

    gridIndependence,
    gridIndependenceEntity,
    co2Saved,
    co2SavedEntity,
    solarSelfConsumptionRate,
    solarSelfConsumptionRateEntity,

    batterySoc,
    batteryPower,
    batteryStatus,
    batteryEntity,

    housePower,
    houseStatus,
    houseEntity,

    gridPower,
    gridStatus,
    gridEntity,

    carPower,
    carSoc,
    carStatus,
    carEntity:
        "sensor.volvo_ec40_charging_power",

    spaPower,
    spaTemperature,
    spaStatus,
    spaEntity:
        "sensor.plugg_spabad_power",

    heatpumpPower,
    heatpumpStatus,
    heatpumpEntity:
        "sensor.thermia_power_estimator_total_effekt",

    appliancePower,
    applianceStatus,
    applianceEntity:
        "sensor.vitvaror_effekt",
  };
}

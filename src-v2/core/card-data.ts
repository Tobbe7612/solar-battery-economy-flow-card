import {
    getNumber,
    getString,
    getAttribute,
} from "../utils/entity";
import {
    findMainFlowEntities,
    autofillFromIntegration,
} from "../config/autodiscovery";
import { FlowCardConfig } from "../config/config";
export interface DeviceCardData {
    enabled: boolean;

    title: string;

    power: number;
    powerEntity?: string;

    optionalType?: "soc" | "temperature";
    optionalValue?: string;
    soc?: number;
    optionalEntity?: string;

    status: string;
    statusEntity?: string;

    icon?: "car" | "spa" | "heatpump" | "appliance";
}

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

    devices: DeviceCardData[];

    importToday: number;
    importTodayEntity?: string;
    exportToday: number;
    exportTodayEntity?: string;

    savingsThisMonth: number;
    savingsThisMonthEntity: string;
    savingsThisYear: number;
    savingsThisYearEntity: string;
    estimatedAnnualSavings: number;
    estimatedAnnualSavingsEntity: string;
    paybackTime: number | string;
    paybackTimeEntity: string;
}
function getDeviceCardData(
    hass: any,
    device: FlowCardConfig["devices"][number],
    index: number,
): DeviceCardData {
    const power =
        device.powerEntity
            ? getNumber(hass, device.powerEntity)
            : 0;

    let optionalValue: string | undefined;
    let soc: number | undefined;

    if (
        device.optionalType === "soc" &&
        device.optionalEntity
    ) {
        soc = getNumber(hass, device.optionalEntity);
        optionalValue = `${Math.round(soc)} %`;
    }

    if (
        device.optionalType === "temperature" &&
        device.optionalEntity
    ) {
        const temperature = getNumber(
            hass,
            device.optionalEntity,
        );

        optionalValue = `${temperature.toFixed(0)} °C`;
    }

    let status = "Standby";

    if (device.statusEntity) {
        status = getString(
            hass,
            device.statusEntity,
            "Unknown",
        );
    } else if (device.statusRules?.length) {
        const sortedRules = [...device.statusRules]
            .sort(
                (a, b) =>
                    a.threshold - b.threshold,
            );

        for (const rule of sortedRules) {
            if (power >= rule.threshold) {
                status = rule.label;
            }
        }
    }

    return {
        enabled: device.enabled,

        title:
            device.title?.trim() ||
            `Device ${index + 1}`,

        power,
        powerEntity: device.powerEntity,

        optionalType: device.optionalType,
        optionalValue,
        soc,
        optionalEntity: device.optionalEntity,

        status,
        statusEntity: device.statusEntity,

        icon: device.icon,
    };
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
  const autoConfig = autofillFromIntegration(hass) as any;

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
    // Side panels
    //
    // Solar Battery Economy sensors are always auto-discovered.
    // Only importToday/exportToday remain manual because they are
    // not provided by the integration.
    // ============================================================

    const batteryUtilizationEntity =
        autoConfig.sidePanels?.energy?.batteryUtilizationEntity ?? "";

    const batteryUtilization =
        getNumber(hass, batteryUtilizationEntity);

    const savingsTodayEntity =
        autoConfig.sidePanels?.economy?.savingsTodayEntity ?? "";

    const savingsToday =
        getNumber(hass, savingsTodayEntity);

    const co2SavedEntity =
        autoConfig.sidePanels?.energy?.co2SavedEntity ?? "";

    const co2Saved =
        getNumber(hass, co2SavedEntity);

    const solarSelfConsumptionRateEntity =
        autoConfig.sidePanels?.energy?.solarSelfConsumptionEntity ?? "";

    const solarSelfConsumptionRate =
        getNumber(hass, solarSelfConsumptionRateEntity);

    const totalSavingsEntity =
        autoConfig.sidePanels?.economy?.totalSavingsEntity ?? "";

    const totalSavings =
        getNumber(hass, totalSavingsEntity);

    const roiEntity =
        autoConfig.sidePanels?.economy?.roiEntity ?? "";

    const roi =
        getNumber(hass, roiEntity);

    const importTodayEntity =
        config?.sidePanels?.energy?.importTodayEntity;

    const importToday =
        importTodayEntity
            ? getNumber(hass, importTodayEntity)
            : 0;

    const exportTodayEntity =
        config?.sidePanels?.energy?.exportTodayEntity;

    const exportToday =
        exportTodayEntity
            ? getNumber(hass, exportTodayEntity)
            : 0;

    const savingsThisMonthEntity =
        autoConfig.sidePanels?.economy?.savingsThisMonthEntity ?? "";

    const savingsThisMonth =
        getNumber(hass, savingsThisMonthEntity);

    const savingsThisYearEntity =
        autoConfig.sidePanels?.economy?.savingsThisYearEntity ?? "";

    const savingsThisYear =
        getNumber(hass, savingsThisYearEntity);

    const estimatedAnnualSavingsEntity =
        autoConfig.sidePanels?.economy?.estimatedAnnualSavingsEntity ?? "";

    const estimatedAnnualSavings =
        getNumber(hass, estimatedAnnualSavingsEntity);

    const paybackTimeEntity =
        autoConfig.sidePanels?.economy?.paybackTimeEntity ?? "";

    const paybackTime =
        getNumber(hass, paybackTimeEntity);

    const gridIndependenceEntity =
        autoConfig.sidePanels?.energy?.gridIndependenceEntity ?? "";

    const gridIndependence =
        getNumber(hass, gridIndependenceEntity);

  return {
    devices: (config?.devices ?? []).map(
        (device, index) =>
            getDeviceCardData(
                hass,
                device,
                index,
            ),
    ),

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
  };
}

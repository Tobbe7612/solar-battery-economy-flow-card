import { getString } from "../utils/entity";
import type { LivePowerSnapshot } from "./live-power";
import {
    getConsumerName,
    type ConsumerRuntimeSnapshot,
} from "./consumer-runtime";
import { resolveDevicePower } from "./device-power";
import { FlowCardConfig } from "../config/config";
export interface DeviceCardData {
    enabled: boolean;

    title: string;

    power: number | null;
    powerQuality: ReturnType<typeof resolveDevicePower>["quality"];
    consumerPowerEntity?: string;

    optionalType?: "soc" | "temperature";
    optionalValue?: string;
    soc?: number;

    status: string;

    icon?: "car" | "spa" | "heatpump" | "appliance";
}

export interface CardData {
    solarPower: number;
    solarStatus: string;
    solarEntity: string;

    batterySoc: number | null;
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

}
function getDeviceCardData(
    device: FlowCardConfig["devices"][number],
    index: number,
    consumerRuntime?: ConsumerRuntimeSnapshot,
): DeviceCardData {
    const resolvedPower = resolveDevicePower(device, consumerRuntime);
    const power = resolvedPower.value;
    const runtimeConsumer = device.consumerId
        ? consumerRuntime?.consumers.get(device.consumerId)
        : undefined;

    let optionalValue: string | undefined;
    let soc: number | undefined;

    if (device.consumerId && device.optionalType === "soc") {
        const reading = runtimeConsumer?.soc;
        soc = reading?.quality === "valid" ? reading.value ?? undefined : undefined;
        optionalValue = soc === undefined ? "—" : `${Math.round(soc)} ${reading?.unit ?? "%"}`;
    }

    if (device.consumerId && device.optionalType === "temperature") {
        const reading = runtimeConsumer?.temperature;
        optionalValue = reading?.quality === "valid" && reading.value !== null
            ? `${Math.round(reading.value)} ${reading.unit ?? ""}`.trim()
            : "—";
    }

    const statusRuntime = runtimeConsumer?.status;
    const statusLevel = statusRuntime?.level;
    const status = !runtimeConsumer
        ? (device.consumerId ? "SBE consumer unavailable" : "Select SBE consumer")
        : statusRuntime?.quality !== "valid"
            ? "Status unavailable"
            : statusLevel !== null && statusLevel !== undefined
                ? statusLevel <= 0
                    ? "Standby"
                    : device.statusLabels?.[statusLevel - 1] ?? `Level ${statusLevel}`
                : statusRuntime.value !== null && statusRuntime.value !== undefined
                    ? String(statusRuntime.value)
                    : "Status unavailable";

    return {
        enabled: device.enabled,

        title:
            device.title?.trim() ||
            getConsumerName(device.consumerId, consumerRuntime) ||
            `Device ${index + 1}`,

        power,
        powerQuality: resolvedPower.quality,
        consumerPowerEntity: resolvedPower.entity,

        optionalType: device.optionalType,
        optionalValue,
        soc,

        status,

        icon: device.icon,
    };
}

export function getCardData(
  hass: any,
  config?: FlowCardConfig,
  livePowerSnapshot?: LivePowerSnapshot,
    consumerRuntime?: ConsumerRuntimeSnapshot,
    batterySocValue: number | null = null,
): CardData {

  // ============================================================
  // Main flow — supplied by the shared Solar Battery Economy
  // Live Power snapshot.
  // ============================================================

  const livePowerFlows = livePowerSnapshot?.flows;
  const livePowerAggregates = livePowerSnapshot?.aggregates;

  const solarHouse = livePowerFlows?.solar_house ?? 0;
  const batteryHouse = livePowerFlows?.battery_house ?? 0;
  const gridHouse = livePowerFlows?.grid_house ?? 0;
  const solarPower = livePowerAggregates?.solar_total ?? 0;
  const housePower = livePowerAggregates?.house_total ?? 0;
  const batteryPower = livePowerAggregates?.battery_net ?? 0;
  const gridPower = livePowerAggregates?.grid_net ?? 0;

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

  // Battery SOC is supplied by the SBE live runtime contract.
  const batterySoc = batterySocValue;

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

  return {
    devices: (config?.devices ?? []).map(
        (device, index) =>
            getDeviceCardData(
                device,
                index,
                consumerRuntime,
            ),
    ),

    solarPower,
    solarStatus,
    solarEntity,

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

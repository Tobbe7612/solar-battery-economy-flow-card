import { CardData } from "../../core/card-data";
import { LabelState } from "./label-types";
import {
    formatPower,
    formatPercent
} from "../../utils/format";
export interface LabelMetric {
    line1: string;
    line2?: string;
    line3?: string;
    line1Indicator?: string;
    line2Indicator?: string;
    line1IndicatorLabel?: string;
    line2IndicatorLabel?: string;
    line1IndicatorColor?: string;
    line2IndicatorColor?: string;
}
export function createBatteryLabel(
    data: CardData,
    metric?: LabelMetric,
): LabelState {
    return {
        line1: metric?.line1 ?? formatPower(data.batteryPower),
        line2: metric?.line2 ?? formatPercent(data.batterySoc),
        line3: metric?.line3 ?? data.batteryStatus,
        line1Indicator: metric?.line1Indicator,
        line2Indicator: metric?.line2Indicator,
        line1IndicatorLabel: metric?.line1IndicatorLabel,
        line2IndicatorLabel: metric?.line2IndicatorLabel,
        line1IndicatorColor: metric?.line1IndicatorColor,
        line2IndicatorColor: metric?.line2IndicatorColor,
        entityId: data.batteryEntity,
        power: data.batteryPower,
        soc: data.batterySoc,
        color:
            data.batteryPower < -1
                ? "#61FF8B"
                : data.batteryPower > 1
                    ? "#FFB347"
                    : "#FFFFFF",
    };
}
export function createHouseLabel(
    data: CardData,
    metric?: LabelMetric,
): LabelState {
    return {
        line1: metric?.line1 ?? formatPower(data.housePower),
        line2: metric?.line2 ?? "",
        line3: metric?.line3 ?? data.houseStatus,
        entityId: data.houseEntity,
        power: data.housePower,
        color:
            data.housePower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}
export function createGridLabel(
    data: CardData,
    metric?: LabelMetric,
): LabelState {
    return {
        line1: metric?.line1 ?? formatPower(data.gridPower),
        line2: metric?.line2 ?? "",
        line3: metric?.line3 ?? data.gridStatus,
        line1Indicator: metric?.line1Indicator,
        line2Indicator: metric?.line2Indicator,
        line1IndicatorLabel: metric?.line1IndicatorLabel,
        line2IndicatorLabel: metric?.line2IndicatorLabel,
        line1IndicatorColor: metric?.line1IndicatorColor,
        line2IndicatorColor: metric?.line2IndicatorColor,
        entityId: data.gridEntity,
        power: data.gridPower,
        color:
            data.gridPower > 1
                ? "#FF6B6B"
                : data.gridPower < -1
                    ? "#61FF8B"
                    : "#4FC3F7",
    };
}
export function createSolarLabel(
    data: CardData,
    metric?: LabelMetric,
): LabelState {
    return {
        line1: metric?.line1 ?? formatPower(data.solarPower),
        line2: metric?.line2 ?? "",
        line3: metric?.line3 ?? data.solarStatus,
        entityId: data.solarEntity,
        power: data.solarPower,
        color:
            data.solarPower > 1
                ? "#FFD54A"
                : "#8A93A3",
    };
}
export function createDeviceLabel(
    device: CardData["devices"][number],
    metric?: LabelMetric,
): LabelState {
    return {
        line1: metric?.line1 ?? (device.powerQuality === "valid" && device.power !== null
            ? formatPower(device.power)
            : "—"),
        line2: metric?.line2 ?? device.optionalValue ?? "",
        line3: metric?.line3 ?? device.status,
        entityId: device.consumerPowerEntity,
        power: device.power ?? 0,
        ...(device.soc !== undefined
            ? { soc: device.soc }
            : {}),
        icon: device.icon,
        color:
            device.powerQuality !== "valid"
                ? "#8A93A3"
                : device.power! > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}

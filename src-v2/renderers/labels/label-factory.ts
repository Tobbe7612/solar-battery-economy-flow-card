import { CardData } from "../../core/card-data";
import { LabelState } from "./label-types";
import {
    formatPower,
    formatPercent
} from "../../utils/format";
export function createBatteryLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.batteryPower),
        line2: formatPercent(data.batterySoc),
        line3: data.batteryStatus,
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
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.housePower),
        line2: "",
        line3: data.houseStatus,
        entityId: data.houseEntity,
        power: data.housePower,
        color:
            data.housePower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}
export function createGridLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.gridPower),
        line2: "",
        line3: data.gridStatus,
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
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.solarPower),
        line2: "",
        line3: data.solarStatus,
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
): LabelState {
    return {
        line1: formatPower(device.power),
        line2: device.optionalValue ?? "",
        line3: device.status,
        entityId: device.powerEntity,
        power: device.power,
        ...(device.soc !== undefined
            ? { soc: device.soc }
            : {}),
        icon: device.icon,
        color:
            device.power > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}

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
export function createCarLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.carPower),
        line2: formatPercent(data.carSoc),
        line3: data.carStatus,
        entityId: data.carEntity,
        power: data.carPower,
        color:
            data.carPower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}
export function createSpaLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.spaPower),
        line2: `${data.spaTemperature.toFixed(0)} °C`,
        line3: data.spaStatus,
        entityId: data.spaEntity,
        power: data.spaPower,
        color:
            data.spaPower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}
export function createHeatpumpLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.heatpumpPower),
        line2: "",
        line3: data.heatpumpStatus,
        entityId: data.heatpumpEntity,
        power: data.heatpumpPower,
        color:
            data.heatpumpPower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}
export function createApplianceLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.appliancePower),
        line2: "",
        line3: data.applianceStatus,
        entityId: data.applianceEntity,
        power: data.appliancePower,
        color:
            data.appliancePower > 1
                ? "#FF6B6B"
                : "#8A93A3",
    };
}

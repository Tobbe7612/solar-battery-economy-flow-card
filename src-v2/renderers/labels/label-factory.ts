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
    };
}
export function createHouseLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.housePower),
        line2: "",
        line3: data.houseStatus,
    };
}
export function createGridLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.gridPower),
        line2: "",
        line3: data.gridStatus,
    };
}
export function createSolarLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.solarPower),
        line2: "",
        line3: data.solarStatus,
    };
}
export function createCarLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.carPower),
        line2: formatPercent(data.carSoc),
        line3: data.carStatus,
    };
}
export function createSpaLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(data.spaPower),
        line2: `${data.spaTemperature.toFixed(0)} °C`,
        line3: data.spaStatus,
    };
}
export function createHeatpumpLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(
            data.heatpumpPower
        ),
        line2: "",
        line3: data.heatpumpStatus,
    };
}
export function createApplianceLabel(
    data: CardData
): LabelState {
    return {
        line1: formatPower(
            data.appliancePower
        ),
        line2: "",
        line3: data.applianceStatus,
    };
}
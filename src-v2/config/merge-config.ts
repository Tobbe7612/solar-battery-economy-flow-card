import {
    FlowCardConfig,
    DeviceSlotConfig,
} from "./config";
import { DEFAULT_CONFIG } from "./defaults";

/** Applies presentation defaults and drops obsolete local runtime fields. */
export function mergeConfig(
    userConfig: Partial<FlowCardConfig> | undefined
): FlowCardConfig {

    const user = userConfig ?? {};
    const userDevices = Array.isArray(user.devices) ? user.devices : [];
    const devices = DEFAULT_CONFIG.devices.map((defaultDevice, index) =>
        normalizeDevice(userDevices[index], defaultDevice),
    ) as FlowCardConfig["devices"];

    return {

        type: user.type,
        grid_options: user.grid_options,
        layout_options: user.layout_options,
        view_layout: user.view_layout,
        visibility: user.visibility,
        card_mod: user.card_mod,

        layout:
            user.layout
            ?? DEFAULT_CONFIG.layout,

        solarInfoEntity:
            user.solarInfoEntity,
        gridInfoEntity:
            user.gridInfoEntity,
        houseInfoEntity:
            user.houseInfoEntity,
        batteryInfoEntity:
            user.batteryInfoEntity,

        devices,

    };

}

function normalizeDevice(
    value: unknown,
    defaultDevice: DeviceSlotConfig,
): DeviceSlotConfig {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
        return { ...defaultDevice };
    }

    const input = value as Partial<DeviceSlotConfig>;
    const output: DeviceSlotConfig = {
        enabled: typeof input.enabled === "boolean"
            ? input.enabled
            : defaultDevice.enabled,
    };

    if (typeof input.title === "string") output.title = input.title;
    if (typeof input.consumerId === "string") output.consumerId = input.consumerId;
    if (input.optionalType === "soc" || input.optionalType === "temperature") {
        output.optionalType = input.optionalType;
    }
    if (Array.isArray(input.statusLabels)) {
        output.statusLabels = [0, 1, 2].map((index) => {
            const label = input.statusLabels?.[index];
            return typeof label === "string" && label.trim()
                ? label.trim()
                : undefined;
        }) as [string?, string?, string?];
    }
    if (
        input.icon === "car" || input.icon === "spa" ||
        input.icon === "heatpump" || input.icon === "appliance"
    ) {
        output.icon = input.icon;
    }

    return output;
}

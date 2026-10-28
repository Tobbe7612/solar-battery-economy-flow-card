import { FlowCardConfig, DeviceSlotConfig } from "./config";

function emptyDeviceSlot(): DeviceSlotConfig {
    return {
        enabled: false,
    };
}

export const DEFAULT_CONFIG: FlowCardConfig = {

    layout: "desktop",

    devices: [
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
    ],

};

import { FlowCardConfig, DeviceSlotConfig } from "./config";

function emptyDeviceSlot(): DeviceSlotConfig {
    return {
        enabled: false,
        iconType: "premium",
    };
}

export const DEFAULT_CONFIG: FlowCardConfig = {

    layout: "desktop",

    sidePanels: {
        energy: {
            show: true,
        },
        economy: {
            show: true,
        },
    },

    devices: [
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
        emptyDeviceSlot(),
    ],

};

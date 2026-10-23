import { FlowCardConfig, DeviceSlotConfig } from "./config";

function emptyDeviceSlot(): DeviceSlotConfig {
    return {
        enabled: false,
    };
}

export const DEFAULT_CONFIG: FlowCardConfig = {

    layout: "desktop",

    phaseLoad: {
        mainFuse: 20,
        invertDirection: false,
        l1PowerInverted: false,
        l2PowerInverted: false,
        l3PowerInverted: false,
    },

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

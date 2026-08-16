import {
    FlowCardConfig,
    EnergyPanelConfig,
    EconomyPanelConfig,
} from "./config";
import { AutoFillConfig } from "./autodiscovery";
import { DEFAULT_CONFIG } from "./defaults";

/**
 * Combines auto-discovered values with the user's manual config.
 * Manual values always win when present; auto-discovery only fills
 * gaps the user hasn't explicitly set. Safe to call every render —
 * both inputs are cheap, pure lookups.
 */
export function mergeConfig(
    autofill: AutoFillConfig,
    userConfig: Partial<FlowCardConfig> | undefined
): FlowCardConfig {

    const user = userConfig ?? {};
    const userEnergy: Partial<EnergyPanelConfig> =
        user.sidePanels?.energy ?? {};

    const userEconomy: Partial<EconomyPanelConfig> =
        user.sidePanels?.economy ?? {};
    return {

        layout:
            user.layout
            ?? DEFAULT_CONFIG.layout,

        batterySocEntity:
            user.batterySocEntity,

        solarInfoEntity:
            user.solarInfoEntity,
        gridInfoEntity:
            user.gridInfoEntity,
        houseInfoEntity:
            user.houseInfoEntity,
        batteryInfoEntity:
            user.batteryInfoEntity,

        sidePanels: {
            energy: {
                show:
                    userEnergy.show
                    ?? DEFAULT_CONFIG.sidePanels.energy.show,

                importTodayEntity:
                    userEnergy.importTodayEntity,

                exportTodayEntity:
                    userEnergy.exportTodayEntity,
            },

            economy: {
                show:
                    userEconomy.show
                    ?? DEFAULT_CONFIG.sidePanels.economy.show,
            },
        },

        devices:
            user.devices
            ?? DEFAULT_CONFIG.devices,

    };

}

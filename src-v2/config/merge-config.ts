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

        phaseLoad: {
            mainFuse:
                user.phaseLoad?.mainFuse
                ?? DEFAULT_CONFIG.phaseLoad!.mainFuse,
            invertDirection:
                user.phaseLoad?.invertDirection
                ?? DEFAULT_CONFIG.phaseLoad!.invertDirection,
            l1CurrentEntity: user.phaseLoad?.l1CurrentEntity,
            l1PowerEntity: user.phaseLoad?.l1PowerEntity,
            l1PowerInverted: user.phaseLoad?.l1PowerInverted ?? DEFAULT_CONFIG.phaseLoad!.l1PowerInverted,
            l2CurrentEntity: user.phaseLoad?.l2CurrentEntity,
            l2PowerEntity: user.phaseLoad?.l2PowerEntity,
            l2PowerInverted: user.phaseLoad?.l2PowerInverted ?? DEFAULT_CONFIG.phaseLoad!.l2PowerInverted,
            l3CurrentEntity: user.phaseLoad?.l3CurrentEntity,
            l3PowerEntity: user.phaseLoad?.l3PowerEntity,
            l3PowerInverted: user.phaseLoad?.l3PowerInverted ?? DEFAULT_CONFIG.phaseLoad!.l3PowerInverted,
        },

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

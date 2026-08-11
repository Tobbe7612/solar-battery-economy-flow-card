import { FlowCardConfig, EnergyPanelConfig, EconomyPanelConfig } from "./config";
import { DEFAULT_CONFIG } from "./defaults";

/**
 * Combines auto-discovered values with the user's manual config.
 * Manual values always win when present; auto-discovery only fills
 * gaps the user hasn't explicitly set. Safe to call every render —
 * both inputs are cheap, pure lookups.
 */
export function mergeConfig(
    autofill: Partial<FlowCardConfig>,
    userConfig: Partial<FlowCardConfig> | undefined
): FlowCardConfig {

    const user = userConfig ?? {};
    const autoEnergy: Partial<EnergyPanelConfig> =
        autofill.sidePanels?.energy ?? {};
    const autoEconomy: Partial<EconomyPanelConfig> =
        autofill.sidePanels?.economy ?? {};
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
                // Never auto-filled (see config.ts) — manual only.
                importTodayEntity:
                    userEnergy.importTodayEntity,
                exportTodayEntity:
                    userEnergy.exportTodayEntity,
                gridIndependenceEntity:
                    userEnergy.gridIndependenceEntity
                    ?? autoEnergy.gridIndependenceEntity,
                solarSelfConsumptionEntity:
                    userEnergy.solarSelfConsumptionEntity
                    ?? autoEnergy.solarSelfConsumptionEntity,
                batteryUtilizationEntity:
                    userEnergy.batteryUtilizationEntity
                    ?? autoEnergy.batteryUtilizationEntity,
                co2SavedEntity:
                    userEnergy.co2SavedEntity
                    ?? autoEnergy.co2SavedEntity,
            },

            economy: {
                show:
                    userEconomy.show
                    ?? DEFAULT_CONFIG.sidePanels.economy.show,
                savingsTodayEntity:
                    userEconomy.savingsTodayEntity
                    ?? autoEconomy.savingsTodayEntity,
                totalSavingsEntity:
                    userEconomy.totalSavingsEntity
                    ?? autoEconomy.totalSavingsEntity,
                savingsThisMonthEntity:
                    userEconomy.savingsThisMonthEntity
                    ?? autoEconomy.savingsThisMonthEntity,
                savingsThisYearEntity:
                    userEconomy.savingsThisYearEntity
                    ?? autoEconomy.savingsThisYearEntity,
                estimatedAnnualSavingsEntity:
                    userEconomy.estimatedAnnualSavingsEntity
                    ?? autoEconomy.estimatedAnnualSavingsEntity,
                paybackTimeEntity:
                    userEconomy.paybackTimeEntity
                    ?? autoEconomy.paybackTimeEntity,
                roiEntity:
                    userEconomy.roiEntity
                    ?? autoEconomy.roiEntity,
            },

        },

        devices:
            user.devices
            ?? DEFAULT_CONFIG.devices,

    };

}

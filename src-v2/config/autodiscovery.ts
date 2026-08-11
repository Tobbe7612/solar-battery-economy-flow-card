import { FlowCardConfig } from "./config";

/**
 * ============================================================
 * Solar Battery Economy Auto-Discovery
 * ============================================================
 * Matches on entity_id SUFFIX, never prefix — Home Assistant can
 * prepend a device name (e.g. "hem_") to avoid naming collisions,
 * so a fixed prefix like "solar_battery_economy_" is not reliable
 * across installations. Suffix matching works regardless of what,
 * if anything, comes before it.
 *
 * Scope, verified against a full sensor export from a real
 * installation:
 *   - Main flow (solar/battery/house/grid power): all computable
 *     from 8 fixed "energy_system_power_*" sensors.
 *   - Economy side panel: all 7 fields map to fixed, numbered
 *     "financial_NN_*" sensors.
 *   - Energy side panel: only 4 of 6 fields are covered by the
 *     integration (gridIndependence, batteryUtilization,
 *     solarSelfConsumption, co2Saved). importToday/exportToday are
 *     NOT part of the integration in this installation and stay
 *     manual.
 *   - Battery SOC: not exposed by the integration at all (verified
 *     against the full sensor list) — always manual.
 *
 * Any custom/manually-added sensors (e.g. ones with a "hem_"
 * prefix from a separate helper package) are deliberately excluded
 * by suffix matching, so discovery behaves the same for every user
 * of the integration, not just this installation.
 */

const MAIN_FLOW_SUFFIXES = {
    solarHouse: "energy_system_power_solar_house",
    solarBattery: "energy_system_power_solar_battery",
    solarExport: "energy_system_power_solar_export",
    batteryHouse: "energy_system_power_battery_house",
    batteryGrid: "energy_system_power_battery_grid",
    gridHouse: "energy_system_power_grid_house",
    gridBattery: "energy_system_power_grid_battery",
    houseGrid: "energy_system_power_house_grid",
} as const;

const ENERGY_PANEL_SUFFIXES = {
    gridIndependenceEntity: "financial_30_grid_independence",
    batteryUtilizationEntity: "financial_31_battery_utilization",
    solarSelfConsumptionEntity: "financial_32_solar_self_consumption_rate",
    co2SavedEntity: "financial_33_co2_saved",
    // importTodayEntity / exportTodayEntity intentionally absent —
    // not part of the integration, always manual.
} as const;

const ECONOMY_PANEL_SUFFIXES = {
    savingsTodayEntity: "financial_03_savings_today",
    totalSavingsEntity: "financial_01_total_savings",
    savingsThisMonthEntity: "financial_04_savings_this_month",
    savingsThisYearEntity: "financial_05_savings_this_year",
    estimatedAnnualSavingsEntity: "financial_02_estimated_annual_savings",
    paybackTimeEntity: "financial_10_payback_time",
    roiEntity: "financial_12_return_on_investment",
} as const;

function findEntityBySuffix(
    hass: any,
    suffix: string
): string | undefined {

    const states = hass?.states;

    if (!states) {
        return undefined;
    }

    return Object.keys(states).find(
        (entityId) => entityId.endsWith(suffix)
    );

}

export function detectSolarBatteryEconomy(hass: any): boolean {

    // A single representative main-flow sensor is enough to confirm
    // the integration is present — if this exists, the other seven
    // main-flow sensors are guaranteed to exist alongside it (same
    // integration, same setup step).
    return (
        findEntityBySuffix(hass, MAIN_FLOW_SUFFIXES.solarHouse)
        !== undefined
    );

}

export interface MainFlowEntities {
    solarHouse?: string;
    solarBattery?: string;
    solarExport?: string;
    batteryHouse?: string;
    batteryGrid?: string;
    gridHouse?: string;
    gridBattery?: string;
    houseGrid?: string;
}

export function findMainFlowEntities(
    hass: any
): MainFlowEntities {

    const result: MainFlowEntities = {};

    for (const key of Object.keys(MAIN_FLOW_SUFFIXES) as
        (keyof typeof MAIN_FLOW_SUFFIXES)[]
    ) {
        result[key] = findEntityBySuffix(
            hass,
            MAIN_FLOW_SUFFIXES[key]
        );
    }

    return result;

}

export function autofillFromIntegration(
    hass: any
): Partial<FlowCardConfig> {

    if (!detectSolarBatteryEconomy(hass)) {
        return {};
    }

    const energy: Record<string, string> = {};

    for (const key of Object.keys(ENERGY_PANEL_SUFFIXES) as
        (keyof typeof ENERGY_PANEL_SUFFIXES)[]
    ) {
        const found = findEntityBySuffix(
            hass,
            ENERGY_PANEL_SUFFIXES[key]
        );
        if (found) {
            energy[key] = found;
        }
    }

    const economy: Record<string, string> = {};

    for (const key of Object.keys(ECONOMY_PANEL_SUFFIXES) as
        (keyof typeof ECONOMY_PANEL_SUFFIXES)[]
    ) {
        const found = findEntityBySuffix(
            hass,
            ECONOMY_PANEL_SUFFIXES[key]
        );
        if (found) {
            economy[key] = found;
        }
    }

    return {
        sidePanels: {
            energy: {
                show: true,
                ...energy,
            },
            economy: {
                show: true,
                ...economy,
            },
        },
    } as Partial<FlowCardConfig>;

}

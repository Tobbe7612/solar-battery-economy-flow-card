/**
 * ============================================================
 * Solar Battery Economy Detection
 * ============================================================
 * Matches on entity_id SUFFIX, never prefix — Home Assistant can
 * prepend a device name (e.g. "hem_") to avoid naming collisions,
 * so a fixed prefix like "solar_battery_economy_" is not reliable
 * across installations. Suffix matching works regardless of what,
 * if anything, comes before it.
 *
 * The editor uses a representative main-flow entity to show whether
 * the integration is present. Matching by suffix tolerates a device
 * name prefix added by Home Assistant.
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

/**
 * ============================================================
 * Card Configuration Model
 * ============================================================
 * Solar/battery/house/grid power are always computed internally
 * from fixed Solar Battery Economy sensor suffixes (see
 * config/autodiscovery.ts) — there is no per-entity override for
 * them, since each is already a sum of several sensors. Battery
 * SOC is the one main-flow value the integration does not expose,
 * so it stays a manual Entity Picker field.
 *
 * The four "InfoEntity" fields are separate from the computed
 * values on purpose: a computed sum has no entity_id of its own
 * in HA, so "more info" clicks need their own explicit target,
 * independent of what's being summed for display.
 */

export interface FlowCardConfig {

    layout: "desktop" | "mobile";

    batterySocEntity?: string;

    // "More info" click targets for the four main-flow labels.
    // Independent of the computed power values — falls back to
    // sensible defaults in card-data.ts when not set.
    solarInfoEntity?: string;
    gridInfoEntity?: string;
    houseInfoEntity?: string;
    batteryInfoEntity?: string;

    sidePanels: {
        energy: EnergyPanelConfig;
        economy: EconomyPanelConfig;
    };

    // Exactly 4 entries. Index = fixed geometric position (today's
    // car/spa/heatpump/appliance slots in the layout + flow
    // routing). Never reordered or resized by config — only the
    // content shown at each fixed position is configurable.
    devices: [
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
    ];

}

export interface EnergyPanelConfig {
    show: boolean;
    // Not provided by Solar Battery Economy — always manual.
    importTodayEntity?: string;
    exportTodayEntity?: string;
}

export interface EconomyPanelConfig {
    show: boolean;
}

export interface DeviceSlotConfig {

    enabled: boolean;

    // Display title
    title?: string;

    // Main power value
    powerEntity?: string;

    // Optional row 3:
    // - SOC
    // - Temperature
    // - none
    optionalType?: "soc" | "temperature";
    optionalEntity?: string;

    // Optional row 4:
    // If present, use this entity for the displayed status.
    // If absent, status is calculated from power rules.
    statusEntity?: string;

    // Power-based status rules used when statusEntity is not configured.
    // Rules are evaluated by threshold, with the highest matching
    // threshold determining the displayed label.
    statusRules?: {
        threshold: number;
        label: string;
    }[];

    // Device icon
    icon?: "car" | "spa" | "heatpump" | "appliance";

}

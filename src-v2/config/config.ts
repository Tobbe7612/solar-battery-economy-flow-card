/**
 * ============================================================
 * Card Configuration Model
 * ============================================================
 * Solar/battery/house/grid power are always computed internally
 * from fixed Solar Battery Economy sensor suffixes (see
 * config/autodiscovery.ts) — there is no per-entity override for
 * them, since each is already a sum of several sensors. Battery
 * SOC and device runtime values are supplied by SBE. The InfoEntity
 * fields are presentation-only More Info targets.
 *
 * The four "InfoEntity" fields are separate from the computed
 * values on purpose: a computed sum has no entity_id of its own
 * in HA, so "more info" clicks need their own explicit target,
 * independent of what's being summed for display.
 */

export interface FlowCardConfig {

    // Home Assistant-managed card and view metadata. These pass through
    // editor normalization unchanged and are not interpreted by the card.
    type?: string;
    grid_options?: unknown;
    layout_options?: unknown;
    view_layout?: unknown;
    visibility?: unknown;
    card_mod?: unknown;

    layout: "desktop" | "mobile";

    // "More info" click targets for the four main-flow labels.
    // Independent of the computed power values — falls back to
    // sensible defaults in card-data.ts when not set.
    solarInfoEntity?: string;
    gridInfoEntity?: string;
    houseInfoEntity?: string;
    batteryInfoEntity?: string;

    // Eight fixed positions. Existing indexes 0..3 keep their historic
    // car/spa/heatpump/appliance meanings; 4..6 add consumers and 7 adds
    // the second vehicle position. Never reordered by config.
    devices: [
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
        DeviceSlotConfig,
    ];

}

export interface DeviceSlotConfig {

    enabled: boolean;

    // Display title
    title?: string;

    // Stable SBE identity is the only source of consumer runtime data.
    consumerId?: string;

    // Optional row 3:
    // - SOC
    // - Temperature
    // - none
    optionalType?: "soc" | "temperature";
    // Presentation labels for runtime status levels 1..3; thresholds live in SBE.
    statusLabels?: [string?, string?, string?];

    // Device icon
    icon?: "car" | "spa" | "heatpump" | "appliance";

}

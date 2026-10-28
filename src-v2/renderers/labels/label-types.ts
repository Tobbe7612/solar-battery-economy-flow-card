export interface LabelDefinition {
    id: string;
    title: string;
    icon: string;
    x: number;
    y: number;
    width: number;
    height: number;
    /** Explicit graph-port bounds. Keep aligned with the visible frame edges. */
    anchorBounds?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    accentColor?: string;
    /** Index into the persisted Flow Card device slots. */
    deviceIndex?: number;
}
export interface LabelState {
    line1?: string;
    line2?: string;
    line3?: string;
    line1Indicator?: string;
    line2Indicator?: string;
    line1IndicatorLabel?: string;
    line2IndicatorLabel?: string;
    line1IndicatorColor?: string;
    line2IndicatorColor?: string;
    entityId?: string;
    power: number;
    color?: string;
    soc?: number | null;
    icon?: string;
}

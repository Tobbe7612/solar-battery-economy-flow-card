export interface LabelDefinition {
    id: string;
    title: string;
    icon: string;
    x: number;
    y: number;
    width: number;
    height: number;
    accentColor?: string;
}
export interface LabelState {
    line1?: string;
    line2?: string;
    line3?: string;
    entityId?: string;
    power: number;
    color?: string;
    soc?: number;
}
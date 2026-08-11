export interface EnergyPoint {
    x: number;
    y: number;
}
export interface EnergyEdge {
    id: string;
    start: EnergyPoint;
    end: EnergyPoint;
    waypoints?: EnergyPoint[];
    power: number;
    active: boolean;
    color: string;
    radius?: number;
}
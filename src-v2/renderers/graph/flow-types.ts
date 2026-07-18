import { FlowPorts } from "./flow-ports";
import { EnergyPoint } from "./edge-types";

export interface FlowDefinition {
    id: string;
    liveFlow: string;

    getStart(
        ports: FlowPorts,
    ): EnergyPoint;

    getEnd(
        ports: FlowPorts,
    ): EnergyPoint;

    getWaypoints?(
        ports: FlowPorts,
    ): EnergyPoint[];

    color: string;
    particleColor: string;
    width: number;
    radius?: number;
}
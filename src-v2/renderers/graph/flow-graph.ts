import { EnergyEdge } from "./edge-types";
import { FlowPorts } from "./flow-ports";
import { LiveFlow } from "../../core/energy-model";
import { FlowDefinition } from "./flow-types";

export function createFlowGraph(
    ports: FlowPorts,
    liveFlows: Record<string, LiveFlow>,
    flowDefinitions: FlowDefinition[],
): EnergyEdge[] {
    return flowDefinitions.map(def => {
        const flow =
            liveFlows[def.liveFlow];
        return {
            id: def.id,
            start: def.getStart(
                ports,
            ),
            end: def.getEnd(
                ports,
            ),
            waypoints:
                def.getWaypoints
                    ? def.getWaypoints(
                        ports,
                    )
                    : [],
            power:
                flow?.power ?? 0,
            active:
                flow?.active ?? false,
            color:
                def.color,
            radius:
                def.radius,
        };
    });
}
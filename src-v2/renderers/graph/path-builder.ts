import { pipeLine, pipeManhattan } from "../flow-primitives";
import { EnergyEdge } from "./edge-types";

export function buildPath(
    edge: EnergyEdge
): string {

    // Any flow with waypoints
    if (
        edge.waypoints &&
        edge.waypoints.length > 0
    ) {
        return pipeManhattan(
            [
                edge.start,
                ...edge.waypoints,
                edge.end
            ],
            edge.radius ?? 38
        );
    }

    // Default: direct line between anchors.
    // (No more hardcoded per-id corner cases here — whether a
    // flow is routed or direct is decided entirely by whether its
    // FlowDefinition provides getWaypoints, so the line always
    // matches what the particles/sparks do in edge-geometry.ts.)
    return pipeLine(
        edge.start.x,
        edge.start.y,
        edge.end.x,
        edge.end.y
    );
}

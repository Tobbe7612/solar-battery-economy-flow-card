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

    // Solar till Batteri
    if (
        edge.id === "solar-battery"
    ) {
        return pipeManhattan(
            [
                edge.start,
                {
                    x: edge.end.x,
                    y: edge.start.y
                },
                edge.end
            ],
            edge.radius ?? 38
        );
    }

    // Solar till Grid
    if (
        edge.id === "solar-export"
    ) {
        return pipeManhattan(
            [
                edge.start,
                {
                    x: edge.end.x,
                    y: edge.start.y
                },
                edge.end
            ],
            edge.radius ?? 38
        );
    }

    // Default
    return pipeLine(
        edge.start.x,
        edge.start.y,
        edge.end.x,
        edge.end.y
    );
}
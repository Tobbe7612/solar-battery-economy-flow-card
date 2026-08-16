import { EnergyEdge, EnergyPoint } from "./edge-types";

/**
 * Returns the sequence of points a given edge's flow travels
 * through: [start, end] for a direct line, or
 * [start, ...waypoints, end] for a routed flow.
 *
 * This reads the exact same edge.waypoints field path-builder.ts
 * already uses (populated per-flow by each FlowDefinition's
 * getWaypoints() in flow-graph.ts) — not a guess based on edge id.
 * An earlier version of this file special-cased only
 * "solar-battery"/"solar-export" by id, which was wrong: 9 of the
 * 11 flows actually carry explicit waypoints (e.g. battery-house
 * routes left then down), and that version ignored all of them.
 */
export function getEdgeWaypoints(
    edge: EnergyEdge
): EnergyPoint[] {

    if (edge.waypoints && edge.waypoints.length > 0) {
        return [edge.start, ...edge.waypoints, edge.end];
    }

    return [edge.start, edge.end];
}

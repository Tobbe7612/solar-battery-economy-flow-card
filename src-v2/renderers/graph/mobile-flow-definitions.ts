/**
 * ============================================================
 * Graph Routing
 * ============================================================
 * Straight flows:
 *     No waypoints.
 * Routed flows:
 *     One or more waypoints.
 * Any flow containing waypoints is automatically rendered
 * using Manhattan routing with rounded corners.
 */
import { FlowDefinition } from "./flow-types";

export const MOBILE_FLOW_DEFINITIONS: FlowDefinition[] = [
    // SOLAR
    {
        id: "solar-house",
        liveFlow: "solar-house",
        getStart: (p) => p.solarBottomCenter,
        getEnd: (p) => p.houseTopCenter,
//        getWaypoints: (p) => [
//            {
//                x: p.houseBottomCenter.x,
//                y: p.houseBottomCenter.y,
//            },
//        ],
        color: "#FFD54A",
    },
    {
        id: "solar-battery",
        liveFlow: "solar-battery",
        getStart: (p) => p.solarRight,
        getEnd: (p) => p.batteryTop,
//        getWaypoints: (p) => [
//            {
//                x: p.solarBottomRight.x,
//                y: p.batteryUpperLeft.y,
//            },
//        ],
        color: "#FFD54A",
        radius: 30,
    },
    {
        id: "solar-export",
        liveFlow: "solar-export",
        getStart: (p) => p.solarLeft,
        getEnd: (p) => p.gridTop,
//        getWaypoints: (p) => [
//            {
//                x: p.solarBottomLeft.x,
//                y: p.gridUpperRight.y,
//            },
//        ],
        color: "#FFD54A",
        radius: 30,
    },

    // BATTERI
    {
        id: "battery-house",
        liveFlow: "battery-house",
        getStart: (p) => p.batteryLowerLeft,
        getEnd: (p) => p.houseTopRight,
//        getWaypoints: (p) => [
//            {
//                x: p.houseTopRight.x,
//                y: p.batteryLowerLeft.y,
//            },
//        ],
        color: "#59D990",
        radius: 30,
    },
    {
        id: "battery-grid",
        liveFlow: "battery-grid",
        getStart: (p) => p.batteryLeft,
        getEnd: (p) => p.gridRight,
        color: "#67F59B",
    },

    // GRID
    {
        id: "grid-house",
        liveFlow: "grid-house",
        getStart: (p) => p.gridLowerRight,
        getEnd: (p) => p.houseTopLeft,
//        getWaypoints: (p) => [
//            {
//                x: p.houseTopLeft.x,
//                y: p.gridLowerRight.y,
//            },
//        ],
        color: "#FF6B6B",
        radius: 30,
    },
    {
        id: "grid-battery",
        liveFlow: "grid-battery",
        getStart: (p) => p.gridRight,
        getEnd: (p) => p.batteryLeft,
        color: "#FF6B6B",
    },

    // HOUSE TO OTHER CONSUMERS
    {
        id: "house-spa",
        liveFlow: "house-spa",
        getStart: (p) => p.houseBottomCenter,
        getEnd: (p) => p.spaRight,
//        getWaypoints: (p) => [
//            {
//                x: p.houseBottomCenter.x,
//                y: p.spaRight.y,
//            },
//        ],
        color: "#FF6B6B",
        radius: 30,
    },
    {
        id: "house-heatpump",
        liveFlow: "house-heatpump",
        getStart: (p) => p.houseBottomLeft,
        getEnd: (p) => p.heatpumpRight,
//        getWaypoints: (p) => [
//            {
//                x: p.houseBottomLeft.x,
//                y: p.heatpumpRight.y,
//            },
//        ],
        color: "#FF6B6B",
        radius: 30,
    },
    {
        id: "house-appliance",
        liveFlow: "house-appliance",
        getStart: (p) => p.houseBottomCenter,
        getEnd: (p) => p.applianceLeft,
//        getWaypoints: (p) => [
//            {
//                x: p.houseBottomCenter.x,
//                y: p.applianceLeft.y,
//            },
//        ],
        color: "#FF6B6B",
        radius: 30,
    },
    {
        id: "house-car",
        liveFlow: "house-car",
        getStart: (p) => p.houseBottomRight,
        getEnd: (p) => p.carLeft,
//        getWaypoints: (p) => [
//            {
//                x: p.houseBottomRight.x,
//                y: p.carLeft.y,
//            },
//        ],
        color: "#FF6B6B",
        radius: 30,
    },
];

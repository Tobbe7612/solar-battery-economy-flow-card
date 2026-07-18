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
import { FlowPorts } from "./flow-ports";
import { EnergyPoint } from "./edge-types";

import { FlowDefinition } from "./flow-types";

export const DESKTOP_FLOW_DEFINITIONS: FlowDefinition[] = [
    // SOLAR
    {
        id: "solar-house",
        liveFlow: "solar-house",
        getStart: (p) => p.solar,
        getEnd: (p) => p.houseTop,
        getWaypoints: (p) => [
            p.solarJunction,
            {
                x: p.houseTop.x,
                y: p.solarJunction.y,
            },
        ],
        color: "#FFD54A",
        particleColor: "#FFF4B0",
        width: 10,
    },
    {
        id: "solar-battery",
        liveFlow: "solar-battery",
        getStart: (p) => p.solar,
        getEnd: (p) => p.batteryTop,
        getWaypoints: (p) => [
            p.solarJunction,
            {
                x: p.batteryTop.x,
                y: p.solarJunction.y,
            },
        ],
        color: "#7ED7FF",
        particleColor: "#DFF6FF",
        width: 10,
    },
    {
        id: "solar-export",
        liveFlow: "solar-export",
        getStart: (p) => p.solar,
        getEnd: (p) => p.gridTop,
        getWaypoints: (p) => [
            p.solarJunction,
            {
                x: p.gridTop.x,
                y: p.solarJunction.y,
            },
        ],
        color: "#FFB84A",
        particleColor: "#FFF0B5",
        width: 10,
    },

    // BATTERI
    {
        id: "battery-house",
        liveFlow: "battery-house",
        getStart: (p) => p.batteryLeft,
        getEnd: (p) => p.houseTopRight,
        getWaypoints: (p) => [
            {
                x: p.houseTopRight.x,
                y: p.batteryLeft.y,
            },
        ],
        color: "#59D990",
        particleColor: "#D9FFE8",
        width: 9,
    },
    {
        id: "battery-grid",
        liveFlow: "battery-grid",
        getStart: (p) => p.batteryUpperLeft,
        getEnd: (p) => p.gridUpperRight,
        color: "#67F59B",
        particleColor: "#E2FFE8",
        width: 9,
    },

    // GRID
    {
        id: "grid-house",
        liveFlow: "grid-house",
        getStart: (p) => p.gridRight,
        getEnd: (p) => p.houseTopLeft,
        getWaypoints: (p) => [
            {
                x: p.houseTopLeft.x,
                y: p.gridRight.y,
            },
        ],
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 9,
    },
    {
        id: "grid-battery",
        liveFlow: "grid-battery",
        getStart: (p) => p.gridUpperRight,
        getEnd: (p) => p.batteryUpperLeft,
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 9,
    },

    // HOUSE TO OTHER CONSUMERS
    {
        id: "house-spa",
        liveFlow: "house-spa",
        getStart: (p) => p.houseBottomCenter,
        getEnd: (p) => p.spa,
        getWaypoints: (p) => [
            {
                x: p.houseBottomCenter.x,
                y: p.houseBottomCenter.y + 55,
            },
            {
                x: p.spa.x,
                y: p.houseBottomCenter.y + 55,
            },
        ],
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 8,
    },
    {
        id: "house-heatpump",
        liveFlow: "house-heatpump",
        getStart: (p) => p.houseBottomCenter,
        getEnd: (p) => p.heatpump,
        getWaypoints: (p) => [
            {
                x: p.houseBottomCenter.x,
                y: p.houseBottomCenter.y + 55,
            },
            {
                x: p.heatpump.x,
                y: p.houseBottomCenter.y + 55,
            },
        ],
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 8,
    },
    {
        id: "house-appliance",
        liveFlow: "house-appliance",
        getStart: (p) => p.houseBottomCenter,
        getEnd: (p) => p.appliance,
        getWaypoints: (p) => [
            {
                x: p.houseBottomCenter.x,
                y: p.houseBottomCenter.y + 55,
            },
            {
                x: p.appliance.x,
                y: p.houseBottomCenter.y + 55,
            },
        ],
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 8,
    },
    {
        id: "house-car",
        liveFlow: "house-car",
        getStart: (p) => p.houseBottomRight,
        getEnd: (p) => p.car,
        getWaypoints: (p) => [
            {
                x: p.houseBottomRight.x,
                y: p.houseBottomRight.y + 55,
            },
            {
                x: p.car.x,
                y: p.houseBottomRight.y + 55,
            },
        ],
        color: "#8CC8FF",
        particleColor: "#EDF7FF",
        width: 8,
    },
];
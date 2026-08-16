import { GraphAnchors } from "./graph-anchors";
export interface FlowPort {

    x: number;
    y: number;
}

export interface FlowPorts {
    // Solar
    solar: FlowPort;
    solarLeft: FlowPort;
    solarRight: FlowPort;
    solarBottom: FlowPort;
    solarBottomLeft: FlowPort;
    solarBottomCenter: FlowPort;
    solarBottomRight: FlowPort;

    // Grid
    gridLeft: FlowPort;
    gridRight: FlowPort;
    gridUpperRight: FlowPort;
    gridLowerRight: FlowPort;
    gridTop: FlowPort;
    gridBottom: FlowPort;

    // Battery
    batteryLeft: FlowPort;
    batteryUpperLeft: FlowPort;
    batteryLowerLeft: FlowPort;
    batteryRight: FlowPort;
    batteryTop: FlowPort;
    batteryBottom: FlowPort;

    // House
    houseLeft: FlowPort;
    houseRight: FlowPort;
    houseTop: FlowPort;
    houseBottom: FlowPort;
    houseBottomLeft: FlowPort;
    houseBottomCenter: FlowPort;
    houseBottomRight: FlowPort;
    houseTopLeft: FlowPort;
    houseTopCenter: FlowPort;
    houseTopRight: FlowPort;

    // Consumers
    spaLeft: FlowPort;
    spaRight: FlowPort;
    spa: FlowPort;
    heatpumpLeft: FlowPort;
    heatpumpRight: FlowPort;
    heatpump: FlowPort;
    applianceLeft: FlowPort;
    applianceRight: FlowPort;
    appliance: FlowPort;
    carLeft: FlowPort;
    carRight: FlowPort;
    car: FlowPort;

    // Routing
    solarJunction: FlowPort;
}

export function createFlowPorts(
    anchors: GraphAnchors
): FlowPorts {

    return {
        // Solar
        solar: anchors.solarAnchorBottom,
        solarLeft: anchors.solarAnchorLeft,
        solarRight: anchors.solarAnchorRight,
        solarBottom: anchors.solarAnchorBottom,
        solarBottomLeft: anchors.solarAnchorBottomLeft,
        solarBottomCenter: anchors.solarAnchorBottomCenter,
        solarBottomRight: anchors.solarAnchorBottomRight,

        // Grid
        gridLeft: anchors.gridAnchorLeft,
        gridRight: anchors.gridAnchorRight,
        gridUpperRight: anchors.gridAnchorUpperRight,
        gridLowerRight: anchors.gridAnchorLowerRight,
        gridTop: anchors.gridAnchorTop,
        gridBottom: anchors.gridAnchorBottom,


        // Battery
        batteryLeft: anchors.batteryAnchorLeft,
        batteryUpperLeft: anchors.batteryAnchorUpperLeft,
        batteryLowerLeft: anchors.batteryAnchorLowerLeft,
        batteryRight: anchors.batteryAnchorRight,
        batteryTop: anchors.batteryAnchorTop,
        batteryBottom: anchors.batteryAnchorBottom,

        // House
        houseLeft: anchors.houseAnchorLeft,
        houseRight: anchors.houseAnchorRight,
        houseTop: anchors.houseAnchorTop,
        houseBottom: anchors.houseAnchorBottom,
        houseBottomLeft: anchors.houseAnchorBottomLeft,
        houseBottomCenter: anchors.houseAnchorBottomCenter,
        houseBottomRight: anchors.houseAnchorBottomRight,
        houseTopLeft: anchors.houseAnchorTopLeft,
        houseTopCenter: anchors.houseAnchorTopCenter,
        houseTopRight: anchors.houseAnchorTopRight,

        // Consumers
        spaLeft: anchors.spaAnchorLeft,
        spaRight: anchors.spaAnchorRight,
        spa: anchors.spaAnchorTop,

        heatpumpLeft: anchors.heatpumpAnchorLeft,
        heatpumpRight: anchors.heatpumpAnchorRight,
        heatpump: anchors.heatpumpAnchorTop,

        applianceLeft: anchors.applianceAnchorLeft,
        applianceRight: anchors.applianceAnchorRight,
        appliance: anchors.applianceAnchorTop,
        
        carLeft: anchors.carAnchorLeft,
        carRight: anchors.carAnchorRight,
        car: anchors.carAnchorTop,

        // Routing
        solarJunction: anchors.solarJunction,
    };
}
import { GraphAnchors } from "./anchors";
export interface FlowPort {

    x: number;
    y: number;
}

export interface FlowPorts {
    // Solar
    solar: FlowPort;

    // Grid
    gridLeft: FlowPort;
    gridRight: FlowPort;
    gridTop: FlowPort;
    gridBottom: FlowPort;
    gridUpperRight: FlowPort;

    // Battery
    batteryLeft: FlowPort;
    batteryRight: FlowPort;
    batteryTop: FlowPort;
    batteryBottom: FlowPort;
    batteryUpperLeft: FlowPort;

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

    // Legacy aliases (tas bort senare)
    grid: FlowPort;
    battery: FlowPort;
    house: FlowPort;
}

export function createFlowPorts(
    anchors: GraphAnchors
): FlowPorts {

    return {
        // Solar
        solar: anchors.solarAnchorBottom,

        // Grid
        gridLeft: anchors.gridAnchorLeft,
        gridRight: anchors.gridAnchorRight,
        gridTop: anchors.gridAnchorTop,
        gridBottom: anchors.gridAnchorBottom,
        gridUpperRight: anchors.gridAnchorUpperRight,

        // Battery
        batteryLeft: anchors.batteryAnchorLeft,
        batteryRight: anchors.batteryAnchorRight,
        batteryTop: anchors.batteryAnchorTop,
        batteryBottom: anchors.batteryAnchorBottom,
        batteryUpperLeft: anchors.batteryAnchorUpperLeft,

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

        // Legacy aliases
        grid: anchors.gridAnchorRight,
        battery: anchors.batteryAnchorLeft,
        house: anchors.houseAnchorRight,
    };
}
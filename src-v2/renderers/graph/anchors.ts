import { EnergyPoint } from "./edge-types";
export interface GraphAnchors {

    // Solar
    solarAnchorLeft: EnergyPoint;
    solarAnchorRight: EnergyPoint;
    solarAnchorBottom: EnergyPoint;
    solarJunction: EnergyPoint;

    // Battery
    batteryAnchorLeft: EnergyPoint;
    batteryAnchorRight: EnergyPoint;
    batteryAnchorTop: EnergyPoint;
    batteryAnchorUpperLeft: EnergyPoint;
    batteryAnchorBottom: EnergyPoint;

    // Grid
    gridAnchorLeft: EnergyPoint;
    gridAnchorRight: EnergyPoint;
    gridAnchorTop: EnergyPoint;
    gridAnchorUpperRight: EnergyPoint;
    gridAnchorBottom: EnergyPoint;

    // House
    houseAnchorLeft: EnergyPoint;
    houseAnchorRight: EnergyPoint;
    houseAnchorTop: EnergyPoint;
    houseAnchorTopLeft: EnergyPoint;
    houseAnchorTopCenter: EnergyPoint;
    houseAnchorTopRight: EnergyPoint;
    houseAnchorBottom: EnergyPoint;
    houseAnchorBottomLeft: EnergyPoint;
    houseAnchorBottomCenter: EnergyPoint;
    houseAnchorBottomRight: EnergyPoint;

    // Consumers
    spaAnchorLeft: EnergyPoint;
    spaAnchorRight: EnergyPoint;
    spaAnchorTop: EnergyPoint;

    heatpumpAnchorLeft: EnergyPoint;
    heatpumpAnchorRight: EnergyPoint;
    heatpumpAnchorTop: EnergyPoint;

    applianceAnchorLeft: EnergyPoint;
    applianceAnchorRight: EnergyPoint;
    applianceAnchorTop: EnergyPoint;

    carAnchorLeft: EnergyPoint;
    carAnchorRight: EnergyPoint;
    carAnchorTop: EnergyPoint;

    // Centers
    batteryCenter: EnergyPoint;
    gridCenter: EnergyPoint;
    houseCenter: EnergyPoint;
}
/**
 * ============================================================
 * Graph Engine Anchors
 * ============================================================
 * This file defines every connection point used by the Graph
 * Engine.
 *
 * IMPORTANT
 * All energy routing starts from labels.
 * Renderers must never calculate their own coordinates.
 * Moving a label automatically moves every connected flow.
 */

import { DESKTOP_LABELS } from "./labels/desktop-labels";
import { LabelDefinition } from "./labels/label-types";

export function createAnchors(
    layout: any,
    labels: LabelDefinition[]
) {
    const house =
        layout.nodes.house;
    const battery =
        layout.nodes.battery;
    const grid =
        layout.nodes.grid;
    const heatpump =
        layout.nodes.heatpump;
    const appliance =
        layout.nodes.appliance;
    const solarLabel =
        labels.find(
            l => l.id === "solar"
        )!;
    const houseLabel =
        labels.find(
            l => l.id === "house"
        )!;
    const batteryLabel =
        labels.find(
            l => l.id === "battery"
        )!;
    const gridLabel =
        labels.find(
            l => l.id === "grid"
        )!;
    const spaLabel =
        labels.find(
            l => l.id === "spa"
        )!;
    const heatpumpLabel =
        labels.find(
            l => l.id === "heatpump"
        )!;
    const applianceLabel =
        labels.find(
            l => l.id === "appliance"
        )!;
    const carLabel =
        labels.find(
            l => l.id === "car"
        )!;
  return {

    // House
    houseAnchorLeft: {
        x: houseLabel.x,
        y: houseLabel.y + houseLabel.height / 2,
    },
    houseAnchorRight: {
        x: houseLabel.x + houseLabel.width,
        y: houseLabel.y + houseLabel.height / 2,
    },
    houseAnchorTop: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y,
    },
    houseAnchorTopLeft: {
        x: houseLabel.x + houseLabel.width /2 - 10,
        y: houseLabel.y,
    },
    houseAnchorTopCenter: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y,
    },
    houseAnchorTopRight: {
        x: houseLabel.x + houseLabel.width / 2 + 10,
        y: houseLabel.y,
    },
    houseAnchorBottom: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomLeft: {
        x: houseLabel.x + houseLabel.width * 0.25,
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomCenter: {
        x: houseLabel.x + houseLabel.width * 0.50,
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomRight: {
        x: houseLabel.x + houseLabel.width * 0.75,
        y: houseLabel.y + houseLabel.height,
    },

    // Battery
    batteryAnchorLeft: {
        x: batteryLabel.x,
        y: batteryLabel.y + batteryLabel.height / 2,
    },
    batteryAnchorRight: {
        x: batteryLabel.x + batteryLabel.width,
        y: batteryLabel.y + batteryLabel.height / 2,
    },
    batteryAnchorTop: {
        x: batteryLabel.x + batteryLabel.width / 2,
        y: batteryLabel.y,
    },
    batteryAnchorUpperLeft: {
        x: batteryLabel.x,
        y: batteryLabel.y + (batteryLabel.height * 0.25),
    },
    batteryAnchorBottom: {
        x: batteryLabel.x + batteryLabel.width / 2,
        y: batteryLabel.y + batteryLabel.height,
    },

    // Grid
    gridAnchorLeft: {
        x: gridLabel.x,
        y: gridLabel.y + gridLabel.height / 2,
    },
    gridAnchorRight: {
        x: gridLabel.x + gridLabel.width,
        y: gridLabel.y + gridLabel.height / 2,
    },
    gridAnchorTop: {
        x: gridLabel.x + gridLabel.width / 2,
        y: gridLabel.y,
    },
    gridAnchorUpperRight: {
        x: gridLabel.x + gridLabel.width,
        y: gridLabel.y + (gridLabel.height * 0.25),
    },
    gridAnchorBottom: {
        x: gridLabel.x + gridLabel.width / 2,
        y: gridLabel.y + gridLabel.height,
    },

    // Solar
    solarAnchorLeft: {
      x: solarLabel.x,
      y: solarLabel.y + solarLabel.height / 2
    },
    solarAnchorRight: {
      x: solarLabel.x + solarLabel.width,
      y: solarLabel.y + solarLabel.height / 2
    },
    solarAnchorBottom: {
        x: solarLabel.x + solarLabel.width / 2,
        y: solarLabel.y + solarLabel.height,
    },
    solarJunction: {
        x: solarLabel.x + solarLabel.width / 2,
        y: solarLabel.y + solarLabel.height + 55,
    },

    // Centers OLD
    houseCenter: {
      x: house.x + house.width / 2,
      y: house.y + house.height / 2
    },
    batteryCenter: {
      x: battery.x + battery.width / 2,
      y: battery.y + battery.height / 2
    },
    gridCenter: {
      x: grid.x + grid.width / 2,
      y: grid.y + grid.height / 2
    },

    // Spa
    spaAnchorLeft: {
        x: spaLabel.x,
        y: spaLabel.y + spaLabel.height / 2,
    },
    spaAnchorRight: {
        x: spaLabel.x + spaLabel.width,
        y: spaLabel.y + spaLabel.height / 2,
    },
    spaAnchorTop: {
        x: spaLabel.x + spaLabel.width / 2,
        y: spaLabel.y,
    },

    // Heatpump
    heatpumpAnchorLeft: {
        x: heatpumpLabel.x,
        y: heatpumpLabel.y + heatpumpLabel.height / 2,
    },
    heatpumpAnchorRight: {
        x: heatpumpLabel.x + heatpumpLabel.width,
        y: heatpumpLabel.y + heatpumpLabel.height / 2,
    },
    heatpumpAnchorTop: {
      x: heatpumpLabel.x + heatpumpLabel.width / 2,
      y: heatpumpLabel.y
    },

    // Appliance
    applianceAnchorLeft: {
        x: applianceLabel.x,
        y: applianceLabel.y + applianceLabel.height / 2,
    },
    applianceAnchorRight: {
        x: applianceLabel.x + applianceLabel.width,
        y: applianceLabel.y + applianceLabel.height / 2,
    },
    applianceAnchorTop: {
      x: applianceLabel.x + applianceLabel.width / 2,
      y: applianceLabel.y
    },

    // Car
    carAnchorLeft: {
        x: carLabel.x,
        y: carLabel.y + carLabel.height / 2,
    },
    carAnchorRight: {
        x: carLabel.x + carLabel.width,
        y: carLabel.y + carLabel.height / 2,
    },
    carAnchorTop: {
        x: carLabel.x + carLabel.width / 2,
        y: carLabel.y,
    },
  };
}
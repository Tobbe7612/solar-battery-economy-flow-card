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

import { LabelDefinition } from "./labels/label-types";

export function createAnchors(
    labels: LabelDefinition[]
) {
    const anchorLabel = (id: string) => {
        const label = labels.find(item => item.id === id)!;
        return { ...label, ...(label.anchorBounds ?? {}) };
    };
    const solarLabel =
        anchorLabel("solar");
    const houseLabel =
        anchorLabel("house");
    const batteryLabel =
        anchorLabel("battery");
    const gridLabel =
        anchorLabel("grid");
    const spaLabel =
        anchorLabel("spa");
    const heatpumpLabel =
        anchorLabel("heatpump");
    const applianceLabel =
        anchorLabel("appliance");
    const carLabel =
        anchorLabel("car");
    const secondCarLabel = labels.find((label) => label.deviceIndex === 7);
    const mobileConsumers = houseLabel.width < 155;
    const houseCenterX = houseLabel.x + houseLabel.width / 2;
    const secondCarIsLeft = secondCarLabel !== undefined
        && secondCarLabel.x + secondCarLabel.width / 2 < houseCenterX;
  return {
    consumerHouseBranches: {
        1: { x: houseLabel.x + houseLabel.width * 0.2, y: houseLabel.y },
        2: { x: houseLabel.x + houseLabel.width * 0.5, y: houseLabel.y },
        3: { x: houseLabel.x + houseLabel.width * 0.8, y: houseLabel.y },
        4: { x: houseLabel.x + houseLabel.width * 0.2, y: houseLabel.y + houseLabel.height },
        5: { x: houseLabel.x + houseLabel.width * 0.5, y: houseLabel.y + houseLabel.height },
        6: { x: houseLabel.x + houseLabel.width * 0.8, y: houseLabel.y + houseLabel.height },
        0: {
            x: houseLabel.x + houseLabel.width,
            y: houseLabel.y + houseLabel.height * (mobileConsumers ? 0.5 : 0.35),
        },
        7: {
            x: secondCarIsLeft ? houseLabel.x : houseLabel.x + houseLabel.width,
            y: houseLabel.y + houseLabel.height * (mobileConsumers ? 0.5 : 0.8),
        },
    },
    deviceSlotAnchors: Object.fromEntries(labels
        .filter((label) => label.deviceIndex !== undefined)
        .map((label) => {
            const bounds = { ...label, ...(label.anchorBounds ?? {}) };
            return [label.deviceIndex!, {
                left: { x: bounds.x, y: bounds.y + bounds.height / 2 },
                right: { x: bounds.x + bounds.width, y: bounds.y + bounds.height / 2 },
                top: { x: bounds.x + bounds.width / 2, y: bounds.y },
                bottom: { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height },
            }];
        })),

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
        x: houseLabel.x + (houseLabel.width /2 - 10),
        y: houseLabel.y,
    },
    houseAnchorTopCenter: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y,
    },
    houseAnchorTopRight: {
        x: houseLabel.x + (houseLabel.width / 2 + 10),
        y: houseLabel.y,
    },
    houseAnchorBottom: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomLeft: {
        x: houseLabel.x + (houseLabel.width / 2 - 10),
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomCenter: {
        x: houseLabel.x + houseLabel.width / 2,
        y: houseLabel.y + houseLabel.height,
    },
    houseAnchorBottomRight: {
        x: houseLabel.x + (houseLabel.width / 2 + 10),
        y: houseLabel.y + houseLabel.height,
    },

    // Battery
    batteryAnchorLeft: {
        x: batteryLabel.x,
        y: batteryLabel.y + batteryLabel.height / 2,
    },
    batteryAnchorUpperLeft: {
        x: batteryLabel.x,
        y: batteryLabel.y + batteryLabel.height / 2 - 10,
    },
    batteryAnchorLowerLeft: {
        x: batteryLabel.x,
        y: batteryLabel.y + batteryLabel.height / 2 + 10,
    },
    batteryAnchorRight: {
        x: batteryLabel.x + batteryLabel.width,
        y: batteryLabel.y + batteryLabel.height / 2,
    },
    batteryAnchorTop: {
        x: batteryLabel.x + batteryLabel.width / 2,
        y: batteryLabel.y,
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
    gridAnchorUpperRight: {
        x: gridLabel.x + gridLabel.width,
        y: gridLabel.y + (gridLabel.height / 2 - 10),
    },
    gridAnchorLowerRight: {
        x: gridLabel.x + gridLabel.width,
        y: gridLabel.y + (gridLabel.height / 2 + 10),
    },
    gridAnchorTop: {
        x: gridLabel.x + gridLabel.width / 2,
        y: gridLabel.y,
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
    solarAnchorBottomLeft: {
    x: solarLabel.x + (solarLabel.width / 2 - 10),
    y: solarLabel.y + solarLabel.height,
    },
    solarAnchorBottomCenter: {
        x: solarLabel.x + solarLabel.width / 2,
        y: solarLabel.y + solarLabel.height,
    },
    solarAnchorBottomRight: {
        x: solarLabel.x + (solarLabel.width / 2 + 10),
        y: solarLabel.y + solarLabel.height,
    },

    solarJunction: {
        x: solarLabel.x + solarLabel.width / 2,
        y: solarLabel.y + solarLabel.height + 55,
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

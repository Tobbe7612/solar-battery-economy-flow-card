import { getDeviceFlowId } from "../../core/device-slots";
import type { FlowDefinition } from "./flow-types";
import type { FlowPorts } from "./flow-ports";

/** Graph Engine routes for the four positions added after the legacy slots. */
export function createAdditionalDeviceFlowDefinitions(): FlowDefinition[] {
  return [4, 5, 6, 7].map((index) => {
    const vehicle = index === 7;
    const id = getDeviceFlowId(index);
    const target = (ports: any) => ports.deviceSlots[index][vehicle ? "left" : "top"];
    return {
      id,
      liveFlow: id,
      getStart: (ports) => index === 4
        ? ports.houseBottomLeft
        : index === 5
          ? ports.houseBottomCenter
          : ports.houseBottomRight,
      getEnd: target,
      getWaypoints: (ports) => {
        const end = target(ports);
        return vehicle
          ? [{ x: 1110, y: end.y }, end]
          : [{ x: 1110, y: 710 }, { x: end.x, y: 710 }, end];
      },
      color: "#FF6B6B",
      radius: 30,
    };
  });
}

/** Desktop-only routes for all consumer-view slots, anchored to actual label bounds. */
export function createDesktopConsumerFlowDefinitions(): FlowDefinition[] {
  return Array.from({ length: 8 }, (_, index) => {
    const vehicle = index === 0 || index === 7;
    const id = getDeviceFlowId(index);
    const target = (ports: FlowPorts) => ports.deviceSlots[index][vehicle ? "left" : index <= 3 ? "bottom" : "top"];
    return {
      id,
      liveFlow: id,
      getStart: (ports) => ports.consumerHouseBranches[index],
      getEnd: target,
      getWaypoints: (ports) => {
        const start = ports.consumerHouseBranches[index];
        const end = target(ports);
        if (vehicle) {
          const laneX = index === 0 ? end.x - 60 : end.x - 120;
          return [{ x: start.x + 40, y: start.y }, { x: laneX, y: start.y }, { x: laneX, y: end.y }];
        }
        const corridorY = (start.y + end.y) / 2;
        return [{ x: start.x, y: corridorY }, { x: end.x, y: corridorY }];
      },
      color: "#FF6B6B",
      radius: 32,
    };
  });
}

/** Mobile routes use the same slot IDs but attach to the compact label bounds. */
export function createMobileConsumerFlowDefinitions(): FlowDefinition[] {
  return Array.from({ length: 8 }, (_, index) => {
    const vehicle = index === 0 || index === 7;
    const id = getDeviceFlowId(index);
    const start = (ports: FlowPorts) => ports.consumerHouseBranches[index];
    const target = (ports: FlowPorts) => {
      const slot = ports.deviceSlots[index];
      if (!vehicle) return slot[index <= 3 ? "bottom" : "top"];
      const boxCenter = (slot.left.x + slot.right.x) / 2;
      return start(ports).x < boxCenter ? slot.left : slot.right;
    };
    return {
      id,
      liveFlow: id,
      getStart: start,
      getEnd: target,
      getWaypoints: (ports) => {
        const from = start(ports);
        const to = target(ports);
        if (vehicle) {
          if (Math.abs(from.y - to.y) < 1) return [];
          const boxCenter = (ports.deviceSlots[index].left.x + ports.deviceSlots[index].right.x) / 2;
          const laneX = from.x < boxCenter ? from.x + 12 : from.x - 12;
          return [{ x: laneX, y: from.y }, { x: laneX, y: to.y }];
        }
        const corridorY = (from.y + to.y) / 2;
        return [{ x: from.x, y: corridorY }, { x: to.x, y: corridorY }];
      },
      color: "#FF6B6B",
      radius: 20,
    };
  });
}

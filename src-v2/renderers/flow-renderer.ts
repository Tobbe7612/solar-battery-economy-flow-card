import { svg } from 'lit';
import {
  createAnchors
} from './anchors';
import { CardData } from "../core/card-data";
import { renderGraph }
    from "./graph/graph-renderer";
import { createFlowPorts }
  from "./graph/flow-ports";
import { renderLabels }
  from "./labels/render-labels";
import { LiveFlow } from "../core/energy-model";
import { DESKTOP_LABELS } from "./labels/desktop-labels";
import { MOBILE_LABELS } from "./labels/mobile-labels";
import {
    DESKTOP_FLOW_DEFINITIONS,
    MOBILE_FLOW_DEFINITIONS,
} from "./graph/flow-definitions";
import type { CardViewMode } from "./labels/render-labels";
import type { LabelMetric } from "./labels/label-factory";
import { positionLabels } from "./labels/render-labels";
import { createDesktopConsumerFlowDefinitions, createMobileConsumerFlowDefinitions } from "./graph/additional-device-flow-definitions";
import { DEVICE_SLOT_COUNT, getDeviceFlowId } from "../core/device-slots";

/** Geometry (scene units) of the summary box; keep in sync with card-styles.ts. */
export const CONSUMER_SUMMARY_BOX = {
  desktop: { left: 800, top: 815, width: 360 },
  mobile: { left: 14, top: 470, width: 430 - 2 * 14 },
} as const;

export function getConsumerSummaryPort(sceneWidth: number): { x: number; y: number } {
  const box = sceneWidth < 1000 ? CONSUMER_SUMMARY_BOX.mobile : CONSUMER_SUMMARY_BOX.desktop;
  return { x: box.left + box.width / 2, y: box.top };
}

export function renderFlows(
  layout: any,
  liveFlows: Record<string, LiveFlow>,
  cardData: CardData,
  host: HTMLElement,
  viewMode: CardViewMode = "overview",
  metrics: Record<string, LabelMetric> = {},
  valueMode: "live" | "energy_today" = "live",
) {
  const baseLabels =
  layout.sceneWidth < 1000
      ? MOBILE_LABELS
      : DESKTOP_LABELS;
  const labels = positionLabels(baseLabels, viewMode);
  const flowDefinitions =
  layout.sceneWidth < 1000
      ? MOBILE_FLOW_DEFINITIONS
      : DESKTOP_FLOW_DEFINITIONS;
  const anchors = createAnchors(labels);
  const ports =
      createFlowPorts(anchors);
  ports.consumerSummary = getConsumerSummaryPort(layout.sceneWidth);
  const desktopConsumers = layout.sceneWidth >= 1000 && viewMode === "consumers";
  const mobileConsumers = layout.sceneWidth < 1000 && viewMode === "consumers";
  const legacyConsumerIds = new Set(["house-car", "house-spa", "house-heatpump", "house-appliance"]);
  const consumerDefinitions = desktopConsumers
      ? createDesktopConsumerFlowDefinitions()
      : createMobileConsumerFlowDefinitions();
  const baseDefinitions = desktopConsumers || mobileConsumers
      ? flowDefinitions.filter((definition) => !legacyConsumerIds.has(definition.id)
          && !definition.id.startsWith("solar-"))
      : flowDefinitions;
  const overviewTestDefinition = layout.sceneWidth < 1000
      ? createMobileConsumerFlowDefinitions().filter((definition) => definition.id === getDeviceFlowId(7))
      : createDesktopConsumerFlowDefinitions().filter((definition) => definition.id === getDeviceFlowId(7));
  const allFlowDefinitions = desktopConsumers || mobileConsumers
      ? [...baseDefinitions, ...consumerDefinitions]
      : [...baseDefinitions, ...overviewTestDefinition];
  const consumerFlowSlots = new Map(Array.from({ length: DEVICE_SLOT_COUNT }, (_, index) => [getDeviceFlowId(index), index]));
  const visibleFlowDefinitions = allFlowDefinitions.filter((definition) => {
    if (viewMode === "overview") {
      const slot = consumerFlowSlots.get(definition.id);
      if (slot === undefined) return true;
      return slot === 7 && cardData.devices[slot]?.enabled === true;
    }
    const slot = consumerFlowSlots.get(definition.id);
    return slot !== undefined && cardData.devices[slot]?.enabled === true;
  });

return svg`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${valueMode === "live" ? renderGraph(
        ports,
        liveFlows,
        visibleFlowDefinitions,
        true,
    ) : ""}

    ${renderLabels(
        baseLabels,
        cardData,
        host,
        viewMode,
        metrics,
        valueMode === "live",
    )}
  </svg>
`;
}

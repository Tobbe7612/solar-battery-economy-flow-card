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

export function renderFlows(
  layout: any,
  liveFlows: Record<string, LiveFlow>,
  cardData: CardData,
  host: HTMLElement,
) {
  const labels =
  layout.sceneWidth < 1000
      ? MOBILE_LABELS
      : DESKTOP_LABELS;
  const flowDefinitions =
  layout.sceneWidth < 1000
      ? MOBILE_FLOW_DEFINITIONS
      : DESKTOP_FLOW_DEFINITIONS;
  const anchors =
    createAnchors(
        labels
    );
  const ports =
      createFlowPorts(anchors);

return svg`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${renderGraph(
        ports,
        liveFlows,
        flowDefinitions,
    )}

    ${renderLabels(
        labels,
        cardData,
        host,
    )}
  </svg>
`;
}
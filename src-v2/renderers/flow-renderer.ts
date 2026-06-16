import { svg } from 'lit';
import { renderSolarFlows } from './flows/solar-flows';
import { renderGridFlows } from './flows/grid-flows';
import { renderBatteryFlows } from './flows/battery-flows';
import {
  createAnchors
} from './anchors';

import { renderMobileFlows }
  from './flows/mobile-flows';

import { renderApplianceFlows }
  from './flows/appliance-flows';

import {
  renderFlow,
  pipeLine
} from './flow-primitives';

import {
  createDesktopHub
} from './flows/desktop-hub';

import {
  getHouseFlowState
} from './flows/house-flow';

export function renderFlows(
  layout: any,
  liveFlows: any
) {

  const anchors =
    createAnchors(layout);

  const desktopHub =
    createDesktopHub(anchors);

  const flowContext = {
    ...anchors,
    desktopHub
  };

  const houseFlow =
    getHouseFlowState(liveFlows);

  const isMobile =
  layout.sceneWidth <= 500;

return svg`

  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >

    ${isMobile

      ? renderMobileFlows(
          liveFlows,
          anchors
        )

      : svg`

          ${renderSolarFlows(
            liveFlows,
            flowContext
          )}

          ${renderGridFlows(
            liveFlows,
            flowContext
          )}

          ${renderBatteryFlows(
            liveFlows,
            flowContext
          )}

          ${renderFlow(
            houseFlow.active,

            pipeLine(
              desktopHub.x,
              desktopHub.y,

              anchors.houseAnchorTop.x,
              anchors.houseAnchorTop.y
            ),

            houseFlow.colors[0],
            houseFlow.colors[1],
            8,

            houseFlow.power
          )}

          ${renderApplianceFlows(
            liveFlows,
            anchors
          )}
        `
    }

  </svg>
`;
}
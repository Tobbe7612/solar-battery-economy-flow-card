import { svg } from 'lit';

import {
  renderFlow,
  pipeManhattan,
  pipeLine
} from '../flow-primitives';

export function renderSolarFlows(
  liveFlows: any,
  anchors: any
) {
  const {
    solarAnchorLeft,
    solarAnchorRight,
    solarAnchorBottom,

    gridAnchorTop,
    batteryAnchorTop,
    houseAnchorTop,
    desktopHub
  } = anchors;

  return svg`

    <!-- SOLAR -> EXPORT -->

    ${renderFlow(
      liveFlows['solar-export']?.active,

      pipeManhattan([
        solarAnchorLeft,

        {
          x: gridAnchorTop.x,
          y: solarAnchorLeft.y
        },

        gridAnchorTop
      ], 40),

      '#FFB84A',
      '#FFF0B5',
      10,

      liveFlows['solar-export']?.power ?? 0,

      (solarAnchorLeft.x + gridAnchorTop.x) / 2,
      solarAnchorLeft.y - 20
    )}

    <!-- SOLAR -> BATTERY -->

    ${renderFlow(
      liveFlows['solar-battery']?.active,

      pipeManhattan([
        solarAnchorRight,

        {
          x: batteryAnchorTop.x,
          y: solarAnchorRight.y
        },

        batteryAnchorTop
      ], 40),

      '#7ED7FF',
      '#DFF6FF',
      10,

      liveFlows['solar-battery']?.power ?? 0,

      (solarAnchorRight.x + batteryAnchorTop.x) / 2,
      solarAnchorRight.y - 20
    )}

    <!-- SOLAR -> HOUSE -->

    ${renderFlow(
      liveFlows['solar-house']?.active,

      pipeLine(
        solarAnchorBottom.x,
        solarAnchorBottom.y,

        desktopHub.x,
        desktopHub.y
      ),

      '#FFD54A',
      '#FFF4B0',
      11,

      liveFlows['solar-house']?.power ?? 0,

      desktopHub.x + 30,
      desktopHub.y - 20
    )}

  `;
}
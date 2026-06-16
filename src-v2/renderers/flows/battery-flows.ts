import { svg } from 'lit';

import {
  renderFlow,
  pipeManhattan,
  pipeLine
} from '../flow-primitives';

export function renderBatteryFlows(
  liveFlows: any,
  anchors: any
) {

  const {

    batteryAnchorLeft,
    batteryAnchorBottom,

    houseAnchorTop,

    gridAnchorTop,
    gridAnchorRight,

    desktopHub

  } = anchors;

  return svg`

    <!-- BATTERY -> HOUSE -->

    ${renderFlow(
      liveFlows['battery-house']?.active,

      pipeLine(
        batteryAnchorLeft.x,
        batteryAnchorLeft.y,

        desktopHub.x,
        desktopHub.y
      ),

      '#63FFA2',
      '#D8FFEC',
      8,

      liveFlows['battery-house']?.power ?? 0,

      (batteryAnchorLeft.x) - 80,
      (batteryAnchorLeft.y) + 40
    )}

    <!-- BATTERY -> GRID -->

    ${renderFlow(
      liveFlows['battery-grid']?.active,

      pipeLine(
        batteryAnchorLeft.x,
        batteryAnchorLeft.y,

        gridAnchorRight.x,
        gridAnchorRight.y
      ),

      '#63FFA2',
      '#D8FFEC',
      8,

      liveFlows['battery-grid']?.power ?? 0,

      (batteryAnchorLeft.x) - 80,
      (batteryAnchorLeft.y) - 20
    )}

  `;
}
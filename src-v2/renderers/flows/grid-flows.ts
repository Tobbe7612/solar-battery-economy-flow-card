import { svg } from 'lit';

import {
  renderFlow,
  pipeManhattan,
  pipeLine
} from '../flow-primitives';

export function renderGridFlows(
  liveFlows: any,
  anchors: any
) {

  const {

    gridAnchorRight,
    gridAnchorBottom,

    houseAnchorTop,

    batteryAnchorTop,
    batteryAnchorLeft,

    desktopHub

  } = anchors;

  return svg`

    <!-- GRID -> HOUSE -->

    ${renderFlow(
      liveFlows['grid-house']?.active,

      pipeLine(
        gridAnchorRight.x,
        gridAnchorRight.y,

        desktopHub.x,
        desktopHub.y
      ),

      '#FF7B7B',
      '#FFD6D6',
      8,

      liveFlows['grid-house']?.power ?? 0,

      (gridAnchorRight.x) + 80,
      (gridAnchorRight.y) + 40
    )}

    <!-- GRID -> BATTERY -->

    ${renderFlow(
      liveFlows['grid-battery']?.active,

      pipeLine(
        gridAnchorRight.x,
        gridAnchorRight.y,

        batteryAnchorLeft.x,
        batteryAnchorLeft.y
      ),

      '#63FFA2',
      '#D8FFEC',
      8,

      liveFlows['grid-battery']?.power ?? 0,

      (gridAnchorRight.x) + 80,
      (gridAnchorRight.y) - 20
    )}

  `;
}
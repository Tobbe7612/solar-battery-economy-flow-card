import { svg } from 'lit';

import {
  renderFlow,
  pipeLine
} from '../flow-primitives';

export function renderApplianceFlows(
  liveFlows: any,
  anchors: any
) {

  const {

    houseAnchorBottom,
    houseCenter,

    spaAnchorTop,
    heatpumpAnchorTop,
    applianceAnchorTop,
    carAnchorTop

  } = anchors;

  return svg`

    <!-- HOUSE -> SPA -->

    ${renderFlow(
      liveFlows['house-spa']?.active,

      pipeLine(
        houseAnchorBottom.x,
        houseAnchorBottom.y,

        spaAnchorTop.x,
        spaAnchorTop.y
      ),

      '#59D8FF',
      '#DFF8FF',
      6,

      liveFlows['house-spa']?.power ?? 0,

      (houseCenter.x + spaAnchorTop.x) / 2,
      (houseCenter.y + spaAnchorTop.y) / 2,
      16
    )}

    <!-- HOUSE -> HEATPUMP -->

    ${renderFlow(
      liveFlows['house-heatpump']?.active,

      pipeLine(
        houseAnchorBottom.x,
        houseAnchorBottom.y,

        heatpumpAnchorTop.x,
        heatpumpAnchorTop.y
      ),

      '#7ACBFF',
      '#EAF7FF',
      6,

      liveFlows['house-heatpump']?.power ?? 0,

      (houseCenter.x + heatpumpAnchorTop.x) / 2,
      (houseCenter.y + heatpumpAnchorTop.y) / 2,
      16
    )}

    <!-- HOUSE -> APPLIANCE -->

    ${renderFlow(
      liveFlows['house-appliance']?.active,

      pipeLine(
        houseAnchorBottom.x,
        houseAnchorBottom.y,

        applianceAnchorTop.x,
        applianceAnchorTop.y
      ),

      '#FFD580',
      '#FFF2CC',
      6,

      liveFlows['house-appliance']?.power ?? 0,

      (houseCenter.x + applianceAnchorTop.x) / 2,
      (houseCenter.y + applianceAnchorTop.y) / 2,
      16
    )}

    <!-- HOUSE -> CAR -->

    ${renderFlow(
      liveFlows['house-car']?.active,

      pipeLine(
        houseAnchorBottom.x,
        houseAnchorBottom.y,

        carAnchorTop.x,
        carAnchorTop.y
      ),

      '#C084FF',
      '#F3E5FF',
      6,

      liveFlows['house-car']?.power ?? 0,

      (houseCenter.x + carAnchorTop.x) / 2,
      (houseCenter.y + carAnchorTop.y) / 2,
      16
    )}

  `;
}
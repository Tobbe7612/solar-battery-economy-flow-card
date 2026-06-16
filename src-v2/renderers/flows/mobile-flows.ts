import { svg } from 'lit';

import {
  renderFlow,
  pipeLine
} from '../flow-primitives';

export function renderMobileFlows(
  liveFlows: any,
  anchors: any
) {

  const {

    solarAnchorBottom,

    solarAnchorLeft,
    solarAnchorRight,

    gridAnchorLeft,
    gridAnchorRight,

    batteryAnchorLeft,
    batteryAnchorRight,

    houseAnchorTop,
    houseAnchorLeft,
    houseAnchorRight,
    houseAnchorBottom,

    gridCenter,
    batteryCenter,
    houseCenter,

    spaAnchorTop,
    heatpumpAnchorTop,
    applianceAnchorTop,
    carAnchorTop

} = anchors;

  const mobileHub = {

    x: houseCenter.x,

    y:
      batteryCenter.y +
      (houseCenter.y - batteryCenter.y) * 0.40
  };

  return svg`

    <!-- SOLAR -> HOUSE -->

    ${renderFlow(
      liveFlows['solar-house']?.active,

      pipeLine(
        solarAnchorBottom.x,
        solarAnchorBottom.y,

        mobileHub.x,
        mobileHub.y
      ),

      '#FFD54A',
      '#FFF4B0',
      6,

      liveFlows['solar-house']?.power ?? 0,

      (solarAnchorBottom.x + mobileHub.x) / 2,
      (solarAnchorBottom.y + mobileHub.y) / 2 - 15,
      14
    )}

    ${renderFlow(
      liveFlows['solar-house']?.active,

      pipeLine(
        mobileHub.x,
        mobileHub.y,

        houseAnchorTop.x,
        houseAnchorTop.y
      ),

      '#FFD54A',
      '#FFF4B0',
      6
    )}

    <!-- GRID -> HOUSE -->

    ${renderFlow(
      liveFlows['grid-house']?.active,

      pipeLine(
        gridAnchorRight.x,
        gridAnchorRight.y,

        mobileHub.x,
        mobileHub.y
      ),

      '#FF7A7A',
      '#FFDCDC',
      6,

      liveFlows['grid-house']?.power ?? 0,

      (gridCenter.x + mobileHub.x) / 2 - 25,
      (gridCenter.y + mobileHub.y) / 2 + 20,
      14
    )}

    ${renderFlow(
      liveFlows['grid-house']?.active,

      pipeLine(
        mobileHub.x,
        mobileHub.y,

        houseAnchorTop.x,
        houseAnchorTop.y
      ),

      '#FF7A7A',
      '#FFDCDC',
      6
    )}

    <!-- BATTERY -> HOUSE -->

    ${renderFlow(
      liveFlows['battery-house']?.active,

      pipeLine(
        batteryAnchorLeft.x,
        batteryAnchorLeft.y,

        mobileHub.x,
        mobileHub.y
      ),

      '#63FFA2',
      '#D8FFEC',
      6,

      liveFlows['battery-house']?.power ?? 0,

      (batteryAnchorLeft.x + mobileHub.x) / 2 + 25,
      (batteryAnchorLeft.y + mobileHub.y) / 2 + 20,
      14
    )}

    ${renderFlow(
      liveFlows['battery-house']?.active,

      pipeLine(
        mobileHub.x,
        mobileHub.y,

        houseAnchorTop.x,
        houseAnchorTop.y
      ),

      '#63FFA2',
      '#D8FFEC',
      6
    )}

    <!-- SOLAR -> BATTERY -->

    ${renderFlow(
      liveFlows['solar-battery']?.active,

      pipeLine(
        solarAnchorBottom.x,
        solarAnchorBottom.y,

        batteryAnchorLeft.x,
        batteryAnchorLeft.y
      ),

      '#7ED7FF',
      '#DFF6FF',
      6,

      liveFlows['solar-battery']?.power ?? 0,

      (solarAnchorRight.x + batteryAnchorLeft.x) / 2 - 20,
      (solarAnchorRight.y + batteryAnchorLeft.y) / 2,
      14
    )}

    <!-- SOLAR -> EXPORT -->

    ${renderFlow(
      liveFlows['solar-export']?.active,

      pipeLine(
        solarAnchorBottom.x,
        solarAnchorBottom.y,

        gridAnchorRight.x,
        gridAnchorRight.y
      ),

      '#FFB84A',
      '#FFF0B5',
      6,

      liveFlows['solar-export']?.power ?? 0,

      (solarAnchorLeft.x + gridAnchorRight.x) / 2 + 20,
      (solarAnchorLeft.y + gridAnchorRight.y) / 2,
      14
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
      6,

      liveFlows['battery-grid']?.power ?? 0,

      (batteryAnchorLeft.x + gridAnchorRight.x) / 2 + 40,
      (batteryAnchorLeft.y + gridAnchorRight.y) / 2 - 10,
      14
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

      '#7ED7FF',
      '#DFF6FF',
      6,

      liveFlows['grid-battery']?.power ?? 0,

      (gridAnchorRight.x + batteryAnchorLeft.x) / 2 - 40,
      (gridAnchorRight.y + batteryAnchorLeft.y) / 2 - 10,
      14
    )}

      <!-- HOUSE -> SPA -->

    ${renderFlow(
      liveFlows['house-spa']?.active,

      pipeLine(
        houseAnchorLeft.x,
        houseAnchorLeft.y,

        spaAnchorTop.x,
        spaAnchorTop.y
      ),

      '#59D8FF',
      '#DFF8FF',
      4,

      liveFlows['house-spa']?.power ?? 0,

      (houseAnchorRight.x + carAnchorTop.x) / 2 - 50,
      (houseAnchorRight.y + spaAnchorTop.y) / 2,
      12
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
      4,

      liveFlows['house-heatpump']?.power ?? 0,

      (houseAnchorBottom.x + heatpumpAnchorTop.x) / 2,
      (houseAnchorBottom.y + heatpumpAnchorTop.y) / 2,
      12
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
      4,

      liveFlows['house-appliance']?.power ?? 0,

      (houseAnchorBottom.x + applianceAnchorTop.x) / 2,
      (houseAnchorBottom.y + applianceAnchorTop.y) / 2,
      12
    )}

    <!-- HOUSE -> CAR -->

    ${renderFlow(
      liveFlows['house-car']?.active,

      pipeLine(
        houseAnchorRight.x,
        houseAnchorRight.y,

        carAnchorTop.x,
        carAnchorTop.y
      ),

      '#C084FF',
      '#F3E5FF',
      4,

      liveFlows['house-car']?.power ?? 0,

      (houseAnchorLeft.x + carAnchorTop.x) / 2 + 50,
      (houseAnchorLeft.y + carAnchorTop.y) / 2,
      12
    )}

  `;
}
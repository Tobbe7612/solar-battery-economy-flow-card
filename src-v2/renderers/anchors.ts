export function createAnchors(
  layout: any
) {

  const house =
    layout.nodes.house;

  const battery =
    layout.nodes.battery;

  const grid =
    layout.nodes.grid;

  const solar =
    layout.nodes.solar;

  const spa =
    layout.nodes.spa;

  const heatpump =
    layout.nodes.heatpump;

  const appliance =
    layout.nodes.appliance;

  const car =
    layout.nodes.car;

  const houseLeft = house.x;
  const houseRight = house.x + house.width;
  const houseCenterY =
    house.y + house.height / 2;

  const batteryLeft = battery.x;
  const batteryRight =
    battery.x + battery.width;
  const batteryCenterY =
    battery.y + battery.height / 2;

  const gridLeft = grid.x;
  const gridRight =
    grid.x + grid.width;
  const gridCenterY =
    grid.y + grid.height / 2;

  return {

    houseAnchorLeft: {
      x: houseLeft + 12,
      y: houseCenterY
    },

    houseAnchorRight: {
      x: houseRight - 12,
      y: houseCenterY
    },

    houseAnchorTop: {
      x: house.x + house.width / 2,
      y: house.y
    },

    houseAnchorBottom: {
      x: house.x + house.width / 2,
      y: house.y + house.height
    },

    batteryAnchorLeft: {
      x: batteryLeft + 12,
      y: batteryCenterY
    },

    batteryAnchorRight: {
      x: batteryRight - 12,
      y: batteryCenterY
    },

    batteryAnchorTop: {
      x: battery.x + battery.width / 2,
      y: battery.y
    },

    batteryAnchorBottom: {
      x: battery.x + battery.width / 2,
      y: battery.y + battery.height
    },

    gridAnchorLeft: {
      x: gridLeft + 12,
      y: gridCenterY
    },

    gridAnchorRight: {
      x: gridRight - 12,
      y: gridCenterY
    },

    gridAnchorTop: {
      x: grid.x + grid.width / 2,
      y: grid.y
    },

    gridAnchorBottom: {
      x: grid.x + grid.width / 2,
      y: grid.y + grid.height
    },

    solarAnchorLeft: {
      x: solar.x,
      y: solar.y + solar.height / 2
    },

    solarAnchorRight: {
      x: solar.x + solar.width,
      y: solar.y + solar.height / 2
    },

    solarAnchorBottom: {
      x: solar.x + solar.width / 2,
      y: solar.y + solar.height
    },

    houseCenter: {
      x: house.x + house.width / 2,
      y: house.y + house.height / 2
    },

    batteryCenter: {
      x: battery.x + battery.width / 2,
      y: battery.y + battery.height / 2
    },

    gridCenter: {
      x: grid.x + grid.width / 2,
      y: grid.y + grid.height / 2
    },

    solarCenter: {
      x: solar.x + solar.width / 2,
      y: solar.y + solar.height / 2
    },

    spaAnchorTop: {
      x: spa.x + spa.width / 2,
      y: spa.y
    },

    heatpumpAnchorTop: {
      x: heatpump.x + heatpump.width / 2,
      y: heatpump.y
    },

    applianceAnchorTop: {
      x: appliance.x + appliance.width / 2,
      y: appliance.y
    },

    carAnchorTop: {
      x: car.x + car.width / 2,
      y: car.y
    },
  };
}
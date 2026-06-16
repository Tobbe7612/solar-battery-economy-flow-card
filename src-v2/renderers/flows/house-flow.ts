export function getHouseFlowState(
  liveFlows: any
) {

  const active =
    liveFlows['solar-house']?.active ||
    liveFlows['grid-house']?.active ||
    liveFlows['battery-house']?.active;

  const power =
    (liveFlows['solar-house']?.power ?? 0) +
    (liveFlows['grid-house']?.power ?? 0) +
    (liveFlows['battery-house']?.power ?? 0);

  const colors =
    liveFlows['solar-house']?.active
      ? ['#FFD54A', '#FFF4B0']
      : liveFlows['grid-house']?.active
      ? ['#FF7A7A', '#FFDCDC']
      : ['#63FFA2', '#D8FFEC'];

  return {
    active,
    power,
    colors
  };
}
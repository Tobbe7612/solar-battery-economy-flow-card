export type TimeOfDay =
  | 'morning'
  | 'day'
  | 'sunset'
  | 'night';

export function getTimeOfDay(
  hass: any
): TimeOfDay {

  const sun =
    hass?.states?.['sun.sun'];

  if (!sun) {
    return 'day';
  }

  const elevation =
    Number(
      sun.attributes?.elevation ?? 0
    );

  const aboveHorizon =
    sun.state === 'above_horizon';

  if (!aboveHorizon) {
    return 'night';
  }

  if (elevation < 8) {
    return 'morning';
  }

  if (elevation < 20) {
    return 'sunset';
  }

  return 'day';
}
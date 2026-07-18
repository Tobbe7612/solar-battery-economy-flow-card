import { TimeOfDay } from './time-of-day';

const BASE =
  '/local/dev/solar-battery-economy-flow-card/assets/backgrounds';

export function getBackgroundImage(
  hass: any,
  timeOfDay: TimeOfDay
): string {

  const weather =
    hass?.states?.['weather.smhi_weather'];

  const cloudCoverage =
    Number(
      weather?.attributes?.cloud_coverage ?? 0
    );

  const cloudy =
    cloudCoverage > 40;

  switch (timeOfDay) {

    case 'night':

      return cloudy
        ? `${BASE}/night/villa_night_cloudy.webp`
        : `${BASE}/night/villa_night_clear.webp`;

    case 'sunset':

      return `${BASE}/evening/villa_evening.webp`;

    case 'morning':
    case 'day':
    default:

      return cloudy
        ? `${BASE}/day/villa_day_cloudy.webp`
        : `${BASE}/day/villa_day_clear.webp`;
  }
}
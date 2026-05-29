import { TimeOfDay } from './time-of-day';

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
        ? '/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_cloudy.webp'
        : '/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_clear.webp';

    case 'sunset':
      return '/local/dev/solar-battery-economy-flow-card/backgrounds/evening/villa_evening.webp';

    case 'morning':
    case 'day':
    default:
      return cloudy
        ? '/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_cloudy.webp'
        : '/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_clear.webp';
  }
}
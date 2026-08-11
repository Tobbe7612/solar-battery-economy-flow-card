import { TimeOfDay } from './time-of-day';
import type { LayoutType } from './layout-type';

const BASE =
  '/local/dev/solar-battery-economy-flow-card/assets/backgrounds';
type WeatherCondition =
  | 'clear'
  | 'cloudy'
  | 'rain';

interface BackgroundDefinition {
  folder: string;
  filename: string;
}

function findWeatherEntity(hass: any): any {

  const states = hass?.states;

  if (!states) {
    return undefined;
  }

  // Bakåtkompatibilitet
  if (states['weather.smhi_weather']) {
    return states['weather.smhi_weather'];
  }

  // Första weather-entity
  for (const entityId of Object.keys(states)) {

    if (entityId.startsWith('weather.')) {
      return states[entityId];
    }

  }

  return undefined;
}

function getCloudCoverage(weather: any): number {
  return Number(
    weather?.attributes?.cloud_coverage ?? 0
  );
}

function isCloudy(cloudCoverage: number): boolean {
  return cloudCoverage > 40;
}
function getWeatherCondition(
  weather: any
): WeatherCondition {

  const state =
    weather?.state ?? '';

  switch (state) {

    case 'rainy':
    case 'pouring':
    case 'lightning-rainy':
      return 'rain';

    case 'cloudy':
    case 'exceptional':
      return 'cloudy';

    case 'partlycloudy':
      return isCloudy(
        getCloudCoverage(weather)
      )
        ? 'cloudy'
        : 'clear';

    default:
      return isCloudy(
        getCloudCoverage(weather)
      )
        ? 'cloudy'
        : 'clear';
  }
}
function getLayoutPrefix(
  layoutType: LayoutType
): string {
  return layoutType === 'mobile'
    ? 'landscape'
    : 'villa';
}

function buildImagePath(
  folder: string,
  filename: string
): string {
  return `${BASE}/${folder}/${filename}`;
}
function selectBackground(
  timeOfDay: TimeOfDay,
  weatherCondition: WeatherCondition,
  prefix: string
): BackgroundDefinition {

  if (weatherCondition === 'rain') {
    return {
      folder: 'weather',
      filename: `${prefix}_rain.webp`,
    };
  }

  switch (timeOfDay) {

    case 'night':
      return {
        folder: 'night',
        filename:
          weatherCondition === 'cloudy'
            ? `${prefix}_night_cloudy.webp`
            : `${prefix}_night_clear.webp`,
      };
    case 'bluehour':
      return {
        folder: 'evening',
        filename: `${prefix}_bluehour.webp`,
      };

    case 'sunset':
      return {
        folder: 'evening',
        filename: `${prefix}_evening.webp`,
      };

    case 'morning':
    case 'day':
    default:
      return {
        folder: 'day',
        filename:
          weatherCondition === 'cloudy'
            ? `${prefix}_day_cloudy.webp`
            : `${prefix}_day_clear.webp`,
      };
  }
}

export function getBackgroundImage(
  hass: any,
  timeOfDay: TimeOfDay,
  layoutType: LayoutType
): string {

  const weather =
    findWeatherEntity(hass);

  const weatherCondition =
    getWeatherCondition(weather);

  const prefix =
    getLayoutPrefix(layoutType);
  const background =
    selectBackground(
      timeOfDay,
      weatherCondition,
      prefix
    );

  return buildImagePath(
    background.folder,
    background.filename
  );

}
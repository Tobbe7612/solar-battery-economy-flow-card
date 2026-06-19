import { TemplateResult } from 'lit';

import { icons } from './icons';

import { renderBatteryObject } from './objects/battery-object';
import { renderGridObject } from './objects/grid-object';
import { renderHouseObject } from './objects/house-object';

type VisualType =
  | 'icon'
  | 'object';

const VISUAL_TYPES: Record<string, VisualType> = {

  house: 'icon',
  battery: 'object',
  grid: 'icon',

  solar: 'icon',
  car: 'icon',
  spa: 'icon',

  heatpump: 'icon',
  appliance: 'icon'
};

export function renderNodeVisual(
  nodeId: string
): TemplateResult {

  const visualType =
    VISUAL_TYPES[nodeId] ?? 'icon';

  if (visualType === 'object') {

    switch (nodeId) {

      case 'house':
        return renderHouseObject();

      case 'battery':
        return renderBatteryObject();

      case 'grid':
        return renderGridObject();
    }
  }

  switch (nodeId) {

    case 'house':
      return icons.house;

    case 'battery':
      return icons.battery;

    case 'grid':
      return icons.grid;

    case 'solar':
      return icons.solar;

    case 'car':
      return icons.car;

    case 'spa':
      return icons.spa;

    default:
      return icons.house;
  }
}
import { SceneLayout } from '../types/layout';

export const desktopLayout: SceneLayout = {

  sceneWidth: 1920,
  sceneHeight: 1080,

  nodes: {

    solar: {
      id: 'solar',
      label: 'SOL',
      x: 865,
      y: 120,
      width: 140,
      height: 120
    },

    house: {
      id: 'house',
      label: 'HOUSE',
      x: 700,
      y: 470,
      width: 380,
      height: 210
    },

    battery: {
      id: 'battery',
      label: 'BATTERY',
      x: 1410,
      y: 320,
      width: 250,
      height: 260
    },

    car: {
      id: 'car',
      label: 'EV',
      x: 1360,
      y: 760,
      width: 240,
      height: 170
    },

    spa: {
      id: 'spa',
      label: 'SPA',
      x: 260,
      y: 790,
      width: 190,
      height: 150
    },

    grid: {
      id: 'grid',
      label: 'GRID',
      x: 80,
      y: 340,
      width: 190,
      height: 190
    }
  }
};
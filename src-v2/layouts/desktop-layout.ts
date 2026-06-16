import { SceneLayout } from '../types/layout';

export const desktopLayout: SceneLayout = {

  sceneWidth: 1920,
  sceneHeight: 1080,

  panels: {

    left: {
      x: 40,
      y: 40
    },

    right: {
      x: 1620,
      y: 40
    }
  },

  nodes: {

    solar: {
      id: 'solar',
      label: 'SOL',

      x: 820,
      y: 140,

      width: 300,
      height: 140
    },

    house: {
      id: 'house',
      label: 'HUSET',

      x: 930,
      y: 590,

      width: 220,
      height: 125
    },

    battery: {
      id: 'battery',
      label: 'BATTERI',

      x: 1240,
      y: 420,

      width: 180,
      height: 130
    },

    grid: {
      id: 'grid',
      label: 'ELNÄT',

      x: 450,
      y: 420,

      width: 180,
      height: 130
    },

    spa: {
      id: 'spa',
      label: 'SPA',

      x: 540,
      y: 810,

      width: 170,
      height: 100
    },

    heatpump: {
      id: 'heatpump',
      label: 'VP',

      x: 760,
      y: 810,

      width: 140,
      height: 70
    },

    appliance: {
      id: 'appliance',
      label: 'APP',

      x: 980,
      y: 810,

      width: 140,
      height: 70
    },

    car: {
      id: 'car',
      label: 'BIL',

      x: 1200,
      y: 810,

      width: 170,
      height: 100
    }
  }
};
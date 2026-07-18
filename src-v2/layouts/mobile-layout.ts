import { SceneLayout } from '../types/layout';

export const mobileLayout: SceneLayout = {

  sceneWidth: 430,
  sceneHeight: 1180,

  solarArc: {

    centerX: 215,
    centerY: 40,

    width: 340,
    height: 50,

    sunRadius: 10,

  },

  panels: {

    left: {
      x: 0,
      y: 0
    },

    right: {
      x: 0,
      y: 0
    }
  },

  nodes: {

    solar: {
      id: 'solar',
      label: 'SOL',

      x: 150,
      y: 40,

      width: 160,
      height: 135
    },

    grid: {
      id: 'grid',
      label: 'ELNÄT',

      x: 25,
      y: 240,

      width: 110,
      height: 110
    },

    battery: {
      id: 'battery',
      label: 'BATTERI',

      x: 285,
      y: 240,

      width: 110,
      height: 110
    },

    house: {
      id: 'house',
      label: 'HUSET',

      x: 125,
      y: 440,

      width: 130,
      height: 130
    },

    spa: {
      id: 'spa',
      label: 'SPA',

      x: 125,
      y: 650,

      width: 80,
      height: 80
    },

    heatpump: {
      id: 'heatpump',
      label: 'VÄRMEPUMP',

      x: 125,
      y: 790,

      width: 80,
      height: 80
    },

    appliance: {
      id: 'appliance',
      label: 'VITVAROR',

      x: 125,
      y: 930,

      width: 80,
      height: 80
    },

    car: {
      id: 'car',
      label: 'BIL',

      x: 125,
      y: 1070,

      width: 80,
      height: 80
    }
  }
};
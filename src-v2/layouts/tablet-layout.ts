import { SceneLayout } from '../types/layout';

export const tabletLayout: SceneLayout = {

  sceneWidth: 1400,
  sceneHeight: 1050,

  solarArc: {

    centerX: 960,
    centerY: -20,

    width: 1300,
    height: 220,

    sunRadius: 16,

  },

  panels: {

    left: {
      x: 40,
      y: 20
    },

    right: {
      x: 1100,
      y: 20
    }
  },

  nodes: {

    solar: {
      id: 'solar',
      label: 'SOL',
      x: 640,
      y: 60,
      width: 220,
      height: 100
    },

    house: {
      id: 'house',
      label: 'HUSET',
      x: 560,
      y: 360,
      width: 280,
      height: 170
    },

    grid: {
      id: 'grid',
      label: 'ELNÄT',
      x: 80,
      y: 330,
      width: 220,
      height: 170
    },

    battery: {
      id: 'battery',
      label: 'BATTERI',
      x: 1100,
      y: 320,
      width: 240,
      height: 170
    },

    spa: {
      id: 'spa',
      label: 'SPA',
      x: 180,
      y: 760,
      width: 180,
      height: 120
    },

    heatpump: {
      id: 'heatpump',
      label: 'VP',
      x: 460,
      y: 760,
      width: 180,
      height: 120
    },

    appliance: {
      id: 'appliance',
      label: 'APP',
      x: 740,
      y: 760,
      width: 180,
      height: 120
    },

    car: {
      id: 'car',
      label: 'BIL',
      x: 1020,
      y: 760,
      width: 220,
      height: 140
    }
  }
};
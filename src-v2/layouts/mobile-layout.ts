import { SceneLayout } from '../types/layout';

export const mobileLayout: SceneLayout = {

  sceneWidth: 430,
  sceneHeight: 1200,

  nodes: {

    solar: {
      id: 'solar',
      x: 140,
      y: 40,
      width: 140,
      height: 140,
      label: 'Solar'
    },

    house: {
      id: 'house',
      x: 80,
      y: 300,
      width: 260,
      height: 180,
      label: 'House'
    },

    battery: {
      id: 'battery',
      x: 260,
      y: 540,
      width: 120,
      height: 220,
      label: 'Battery'
    },

    car: {
      id: 'car',
      x: 80,
      y: 760,
      width: 220,
      height: 120,
      label: 'Car'
    },

    spa: {
      id: 'spa',
      x: 40,
      y: 560,
      width: 160,
      height: 100,
      label: 'Spa'
    },

    grid: {
      id: 'grid',
      x: 20,
      y: 180,
      width: 120,
      height: 120,
      label: 'Grid'
    }
  }
};
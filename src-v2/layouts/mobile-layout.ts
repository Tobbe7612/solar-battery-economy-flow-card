import { SceneLayout } from '../types/layout';

export const mobileLayout: SceneLayout = {

  sceneWidth: 430,
  sceneHeight: 1000,

  solarArc: {

    centerX: 215,
    centerY: 40,

    width: 340,
    height: 50,

    sunRadius: 10,

  },

  panels: {

      left: {
      x: 18,
      y: 540,
      width: 185,
      compact: true,
  },

  right: {
      x: 227,
      y: 540,
      width: 185,
      compact: true,
  }
  }
};
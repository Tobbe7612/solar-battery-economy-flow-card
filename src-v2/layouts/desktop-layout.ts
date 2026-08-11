import { SceneLayout } from '../types/layout';

export const desktopLayout: SceneLayout = {

  sceneWidth: 1920,
  sceneHeight: 1080,

  solarArc: {

    centerX: 960,
    centerY: -20,

    width: 1300,
    height: 220,

    sunRadius: 16,

  },

  panels: {

    left: {
      x: 10,
      y: 300,
      width: 220,
      compact: false,
    },

    right: {
      x: 1920 - 220 - 10,
      y: 300,
      width: 220,
      compact: false,
    }
  }
};
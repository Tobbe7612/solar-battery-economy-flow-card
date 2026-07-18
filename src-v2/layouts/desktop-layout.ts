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

      x: 760,
      y: 170,

      width: 390,
      height: 120
    },


    hub: {

        id: "hub",

        label: "Energy Hub",

        x: 960,

        y: 485,

        width: 1,

        height: 1

    },

    house: {
        id: 'house',
        label: 'HUSET',

        x: 845,
        y: 500,

        width: 210,
        height: 170,

        ports: {

            left: {
                x: 0,
                y: 85
            },

            right: {
                x: 182,
                y: 72
            },

            top: {
                x: 150,
                y: 18
            },

            bottom: {
                x: 105,
                y: 170
            }

        }

    },

    battery: {
        id: 'battery',
        label: 'BATTERI',

        x: 1085,
        y: 505,

        width: 120,
        height: 170,

        ports: {

            left: {
                x: 18,
                y: 74
            },

            right: {
                x: 120,
                y: 85
            },

            top: {
                x: 60,
                y: 0
            },

            bottom: {
                x: 60,
                y: 170
            }

        }

    },

    grid: {
      id: 'grid',
      label: 'ELNÄT',

      x: 95,
      y: 435,

      width: 140,
      height: 140
    },

    spa: {
      id: 'spa',
      label: 'SPA',

      x: 500,
      y: 700,

      width: 170,
      height: 120
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

      x: 1375,
      y: 645,

      width: 170,
      height: 140
    }
  }
};
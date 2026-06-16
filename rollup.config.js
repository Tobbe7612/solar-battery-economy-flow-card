import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {

  input: 'src-v2/card.ts',

  output: {
    file: 'dist/solar-battery-economy-flow-card.js',
    format: 'es',
    sourcemap: true
  },

  plugins: [

    resolve(),

    commonjs(),

    typescript({
      tsconfig: './tsconfig.json'
    }),

    terser(),

    copy({

      targets: [

        // Kopiera assets till dist

        {
          src: 'src-v2/assets/**/*',
          dest: 'dist'
        },

        // Deploy JS till Home Assistant

        {
          src: 'dist/solar-battery-economy-flow-card.js',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card'
        },

        {
          src: 'dist/solar-battery-economy-flow-card.js.map',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card'
        },

        // Deploy bakgrunder

        {
          src: 'dist/backgrounds/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/backgrounds'
        },

        // Deploy ikoner

        {
          src: 'dist/icons/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/icons'
        },

        // Deploy overlays

        {
          src: 'dist/overlays/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/overlays'
        },

        // Deploy fordon

        {
          src: 'dist/vehicles/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/vehicles'
        }

      ],

      hook: 'writeBundle',

      verbose: true

    })

  ]

};
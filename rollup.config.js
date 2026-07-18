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

        {
          src: 'dist/solar-battery-economy-flow-card.js',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card'
        },
        {
          src: 'dist/solar-battery-economy-flow-card.js.map',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card'
        },

        {
          src: 'src-v2/assets/backgrounds/**/*',
          dest: 'dist/assets/backgrounds'
        },
        {
          src: 'src-v2/assets/batteries/**/*',
          dest: 'dist/assets/batteries'
        },
        {
          src: 'src-v2/assets/icons/**/*',
          dest: 'dist/assets/icons'
        },
        {
          src: 'src-v2/assets/overlays/**/*',
          dest: 'dist/assets/overlays'
        },
        {
          src: 'src-v2/assets/vehicles/**/*',
          dest: 'dist/assets/vehicles'
        },

        {
          src: 'dist/assets/backgrounds/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/assets/backgrounds'
        },
        {
          src: 'dist/assets/batteries/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/assets/batteries'
        },
        {
          src: 'dist/assets/icons/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/assets/icons'
        },
        {
          src: 'dist/assets/overlays/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/assets/overlays'
        },
        {
          src: 'dist/assets/vehicles/**/*',
          dest: 'Z:/www/dev/solar-battery-economy-flow-card/assets/vehicles'
        }

      ],

      hook: 'writeBundle',

      verbose: true

    })

  ]

};
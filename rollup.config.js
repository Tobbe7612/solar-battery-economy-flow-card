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
          src: 'src-v2/assets/backgrounds',
          dest: 'dist/assets'
        },
        {
          src: 'src-v2/assets/batteries',
          dest: 'dist/assets'
        },
        {
          src: 'src-v2/assets/icons',
          dest: 'dist/assets'
        },
        {
          src: 'src-v2/assets/overlays',
          dest: 'dist/assets'
        },
        {
          src: 'src-v2/assets/vehicles',
          dest: 'dist/assets'
        }
 
      ],
 
      hook: 'writeBundle',
 
      verbose: true
 
    })
 
  ]
 
};

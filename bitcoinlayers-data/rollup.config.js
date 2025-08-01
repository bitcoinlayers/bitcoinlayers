import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const external = [];

const config = [
  // ES Module build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    external,
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'dist/types'
      })
    ]
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    external,
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      })
    ]
  },
  // Type definitions
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  },
  // Layers submodule
  {
    input: 'src/layers/index.ts',
    output: [
      { file: 'dist/layers/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/layers/index.esm.js', format: 'es', sourcemap: true }
    ],
    external,
    plugins: [typescript()]
  },
  {
    input: 'src/layers/index.ts',
    output: { file: 'dist/layers/index.d.ts', format: 'es' },
    plugins: [dts()]
  },
  // Infrastructure submodule
  {
    input: 'src/infrastructure/index.ts',
    output: [
      { file: 'dist/infrastructure/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/infrastructure/index.esm.js', format: 'es', sourcemap: true }
    ],
    external,
    plugins: [typescript()]
  },
  {
    input: 'src/infrastructure/index.ts',
    output: { file: 'dist/infrastructure/index.d.ts', format: 'es' },
    plugins: [dts()]
  },
  // Types submodule
  {
    input: 'src/types/index.ts',
    output: [
      { file: 'dist/types/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/types/index.esm.js', format: 'es', sourcemap: true }
    ],
    external,
    plugins: [typescript()]
  },
  {
    input: 'src/types/index.ts',
    output: { file: 'dist/types/index.d.ts', format: 'es' },
    plugins: [dts()]
  },
  // Props submodule
  {
    input: 'src/props/index.ts',
    output: [
      { file: 'dist/props/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/props/index.esm.js', format: 'es', sourcemap: true }
    ],
    external,
    plugins: [typescript()]
  },
  {
    input: 'src/props/index.ts',
    output: { file: 'dist/props/index.d.ts', format: 'es' },
    plugins: [dts()]
  }
];

export default config;
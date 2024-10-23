import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/cjs/index.js',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'es2018',
  external: ['dotenv', 'ethers', 'siwe'],
}).catch(() => process.exit(1));
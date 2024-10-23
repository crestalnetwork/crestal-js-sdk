const esbuild = require('esbuild');
const fs = require('fs');

// Clean the `dist/esm` directory if it exists
if (fs.existsSync('./dist/esm')) {
  fs.rmSync('./dist/esm', { recursive: true, force: true });
}

// Build the project using esbuild for ESM output
esbuild.build({
  entryPoints: ['./index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  sourcemap: true,
  outdir: './dist/esm',
  outExtension: { '.js': '.mjs' },
}).catch(() => process.exit(1));

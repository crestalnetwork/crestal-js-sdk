import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join, relative } from 'path';
import { readdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to get all TypeScript files recursively
function getTypeScriptFiles(dir) {
  const files = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getTypeScriptFiles(fullPath));
    } else if (entry.isFile() && /\.tsx?$/.test(entry.name) && !entry.name.includes('.d.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Get all TypeScript files from both typescript-sdk and utils directories at root level
const srcFiles = [
  ...getTypeScriptFiles('typescript-sdk'),
  ...getTypeScriptFiles('utils')
];

// Create entry points object for esbuild
const entryPoints = {};
srcFiles.forEach(file => {
  // Get the path relative to the root of the project
  const relativePath = file.startsWith('typescript-sdk/') ? file : file;
  const outPath = relativePath.replace(/\.tsx?$/, '');
  entryPoints[outPath] = file;
});

console.log('Building files:', Object.keys(entryPoints));

const commonConfig = {
  entryPoints,
  bundle: true,
  platform: 'node',
  target: 'esnext',
  external: ['dotenv', 'ethers', 'siwe'],
  sourcemap: true,
  minify: false,
  outbase: '.', // Changed to root directory
  logLevel: 'info',
  preserveSymlinks: true,
  packages: 'external'
};

// Build ESM version
console.log('\nBuilding ESM version...');
await esbuild.build({
  ...commonConfig,
  outdir: 'dist/esm',
  format: 'esm',
});

// Build CJS version
console.log('\nBuilding CJS version...');
await esbuild.build({
  ...commonConfig,
  outdir: 'dist/cjs',
  format: 'cjs',
});

console.log('\nBuild complete');
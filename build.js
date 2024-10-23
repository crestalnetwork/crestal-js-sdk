const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Function to get all TypeScript files recursively
function getTypeScriptFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getTypeScriptFiles(fullPath));
    } else if (entry.isFile() && /\.tsx?$/.test(entry.name)) {
      // Get path relative to src directory
      const relativePath = path.relative('src', fullPath);
      files.push(relativePath);
    }
  }
  
  return files;
}

// Get all TypeScript files
const entryPoints = getTypeScriptFiles('src').map(file => `src/${file}`);

const commonConfig = {
  entryPoints,
  bundle: false, // Changed to false to maintain directory structure
  platform: 'node',
  target: 'esnext',
  external: ['dotenv', 'ethers', 'siwe'],
  sourcemap: true,
  minify: false,
  outbase: 'src', // Preserve directory structure
};

// Build ESM version
esbuild.buildSync({
  ...commonConfig,
  outdir: 'dist/esm',
  format: 'esm',
});

// Build CJS version
esbuild.buildSync({
  ...commonConfig,
  outdir: 'dist/cjs',
  format: 'cjs',
});

console.log('Build complete');
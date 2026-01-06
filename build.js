import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir);

fs.cpSync(path.join(__dirname, 'src/client'), path.join(distDir, 'client'), { recursive: true });

await esbuild.build({
  entryPoints: ['src/server/index.js'],
  bundle: true,
  minify: true,
  outfile: path.join(distDir, 'server/index.js'),
  format: 'esm',
  target: 'node18',
  platform: 'node',
  external: ['express', 'path', 'url', 'fs'],
});

console.log('Build complete! Optimized files are in ./dist');
console.log('To run: npm install --production && node dist/server/index.js');

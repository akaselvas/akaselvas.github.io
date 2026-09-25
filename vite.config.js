// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ command }) => ({
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'qa.html'),
      },
    },
  },
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}));
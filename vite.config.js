// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: '/',
  build: {
    outDir: 'docs',
  },
  // Drop console.log and debugger statements in production builds only.
  // In dev mode they remain so you can debug normally.
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}));
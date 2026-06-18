import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@portfolio/types': resolve(__dirname, '../../packages/types/src/index.ts'),
      '@portfolio/i18n': resolve(__dirname, '../../packages/i18n/src/index.ts'),
      '@portfolio/config': resolve(__dirname, '../../packages/config/src/index.ts'),
    },
  },
});

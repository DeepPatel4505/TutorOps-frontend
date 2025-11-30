import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@context': path.resolve(__dirname, './src/context'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});

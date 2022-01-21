import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [
    eslintPlugin(),
    vuePlugin(),
  ],
  resolve: {
    alias: {
      '~styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  }
});

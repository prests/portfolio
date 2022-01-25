import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  plugins: [
    eslintPlugin(),
    vuePlugin(),
  ],
  resolve: {
    alias: {
      '~styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  }
});

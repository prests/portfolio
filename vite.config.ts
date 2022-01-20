import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
    vuePlugin()
  ],
  resolve: {
    alias: {
      '~styles': path.resolve(__dirname, './src/styles'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  }
});

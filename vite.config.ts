import vuePlugin from '@vitejs/plugin-vue';
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
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  plugins: [eslintPlugin(), vuePlugin()],
  resolve: {
    alias: {
      '~styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@language': path.resolve(__dirname, './src/language'),
      '@models': path.resolve(__dirname, './src/models'),
      '@store': path.resolve(__dirname, './src/store'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
});

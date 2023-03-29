/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { configDefaults } from 'vitest/config';
import vuePlugin from '@vitejs/plugin-vue';
import istanbul from 'vite-plugin-istanbul';

const testPathsToExclude = [
  ...configDefaults.exclude,
  '**/coverage/**',
  '**/e2e/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
];

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
  plugins: [
    eslintPlugin(),
    vuePlugin(),
    process.env.VITE_COVERAGE &&
      istanbul({
        include: 'src/*',
        exclude: ['node_modules', 'coverage'],
        extension: ['.ts', '.vue'],
        requireEnv: true,
      }),
  ],
  resolve: {
    alias: {
      '~styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@language': path.resolve(__dirname, './src/language'),
      '@models': path.resolve(__dirname, './src/models'),
      '@store': path.resolve(__dirname, './src/store'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  build: {
    sourcemap:
      !!process.env.VITE_COVERAGE || process.env.NODE_ENV === 'development',
  },
  test: {
    exclude: testPathsToExclude,
    coverage: {
      provider: 'c8',
      exclude: [
        ...testPathsToExclude,
        '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
      reporter: ['json'],
    },
    environment: 'jsdom',
  },
});

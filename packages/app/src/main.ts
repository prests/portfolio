import { createApp } from 'vue';

import App from './App.vue';

import { setI18nLanguage } from '@language/i18n';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from '@language/language-constants';
import en_US from '@language/messages/en_US';
import { setupRouter } from './router';
import { createI18n } from 'vue-i18n';

const i18n = createI18n<false>({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  availableLocales: Array.from(SUPPORTED_LOCALES),
  messages: {
    en_US,
  },
});
setI18nLanguage(i18n, DEFAULT_LOCALE);

const router = setupRouter(i18n);

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');

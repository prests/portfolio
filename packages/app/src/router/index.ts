import { createWebHistory, createRouter, Router } from 'vue-router';
import { I18n } from 'vue-i18n';

import { SUPPORTED_LOCALES } from '@language/language-constants';
import { routes } from './routes';
import { getLocale, loadLocaleMessages, setI18nLanguage } from '@language/i18n';
import { SupportedLocales } from '@language/language-models';

export function setupRouter(i18n: I18n): Router {
  const fallbackLocale = getLocale(i18n);
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach(async (to) => {
    const paramsLocale = (to.params.locale as string) ?? 'en_US';

    if (!SUPPORTED_LOCALES.includes(paramsLocale as SupportedLocales)) {
      return `/${fallbackLocale}`;
    }

    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale);
    }

    setI18nLanguage(i18n, paramsLocale);
  });

  return router;
}

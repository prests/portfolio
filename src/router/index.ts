import { createWebHistory, createRouter, Router } from "vue-router";
import { Pinia } from "pinia";

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from "@language/index";
import { useAppStore } from '@store/app-store/app-store';
import { routes } from "./routes";

export function setupRouter(pinia: Pinia): Router {
  const appStore = useAppStore(pinia);
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach(async to => {
    const paramsLocale = to.params.locale as string;

    const locale = SUPPORTED_LOCALES.includes(paramsLocale)
      ? paramsLocale
      : DEFAULT_LOCALE;
    appStore.setLanguage(locale);
  });
  
  return router;
}

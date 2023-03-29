import { nextTick, WritableComputedRef } from 'vue';
import { I18n } from 'vue-i18n';

export const getLocale = (i18n: I18n): string =>
  (i18n.global.locale as WritableComputedRef<string>).value;

export function setI18nLanguage(i18n: I18n, locale: string) {
  // Composition API mode only
  (i18n.global.locale as WritableComputedRef<string>).value = locale;

  document.querySelector('html')?.setAttribute('lang', locale);
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  const messages = await import(`./messages/${locale}.ts`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

import { watch, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from "pinia";

import { useAppStore } from "@store/app-store/app-store";

interface CustomI18N {
  locale: Ref<string>;
  t: (message: string) => void;
}

export function useLanguage(messages: any) {
  const appStore = useAppStore();
  const { language } = storeToRefs(appStore);


  watch(language, async () => {
    if (language.value !== locale.value) {
      locale.value = language.value;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('html')!.setAttribute('lang', language.value)
    }
  });

  const { locale, t } = useI18n({
    legacy: false,
    locale: language.value,
    fallbackLocale: 'en',
    messages,
    useScope: 'local',
  }) as unknown as CustomI18N;
  locale.value = language.value; // Hack: locale not respected on initialization

  return {
    t,
  };
}
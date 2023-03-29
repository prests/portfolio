import { useI18n } from 'vue-i18n';

import { MessageSchema } from '@language/language-models';

export function useLanguage() {
  const { t } = useI18n<{ message: MessageSchema }>({
    useScope: 'global',
    inheritLocale: true,
  });

  return { t };
}

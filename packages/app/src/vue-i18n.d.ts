import { MessageSchema } from '@language/language-models';

declare module 'vue-i18n' {
  export type DefineLocaleMessage = MessageSchema;
}

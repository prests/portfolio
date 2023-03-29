import en_US from '@language/messages/en_US';
import { SUPPORTED_LOCALES } from '@language/language-constants';

// We only need to do this once since all languages should have the same schema
export type MessageSchema = typeof en_US;
export type SupportedLocales = typeof SUPPORTED_LOCALES[number];

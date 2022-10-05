import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    language: 'en',
  }),
  actions: {
    setLanguage(newLanguage: string): void {
      this.language = newLanguage;
    },
  },
});

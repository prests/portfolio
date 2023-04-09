<template>
  <ThemedButton
    :content="t(`locales.${locale}`)"
    :class="$style['language-button']"
    @on-click="openLanguageModal = true"
  >
    <template #icon-left>
      <LanguageIcon />
    </template>
  </ThemedButton>

  <ModalView v-model:is-open="openLanguageModal">
    <template #header>
      <h2><ThemedText :content="t('nav.languageModal.header')" /></h2>
    </template>

    <template #body>
      <LanguagePicker @locale-selected="openLanguageModal = false" />
    </template>
  </ModalView>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import LanguageIcon from '@assets/LanguageIcon.vue';
import ThemedButton from '@components/button/ThemedButton.vue';
import ModalView from '@components/modal/ModalView.vue';
import ThemedText from '@components/text/ThemedText.vue';
import { useLanguage } from '@language/language-service';
import LanguagePicker from './LanguagePicker.vue';

const openLanguageModal = ref(false);

const { t, locale } = useLanguage();
</script>

<style lang="scss" module>
.language-button {
  height: 2em;
  margin: 1rem 1rem 0 auto;
  width: fit-content;
}
</style>

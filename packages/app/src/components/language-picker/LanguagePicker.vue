<template>
  <div :class="$style['language-picker']">
    <div
      v-for="(locale, localeKey) in getLocales"
      :key="localeKey"
      :class="$style['language-option']"
    >
      <ThemedLink :content="locale" @on-click="changeLocale(localeKey)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguage } from '@language/language-service';
import ThemedLink from '@components/link/ThemedLink.vue';
import { useRoute, useRouter } from 'vue-router';

const $emit = defineEmits<{ (e: 'localeSelected', value: string): void }>();

const router = useRouter();
const route = useRoute();
const { messages, locale: currentLocale } = useLanguage();

const getLocales = computed(() => messages.value[currentLocale.value].locales);

function changeLocale(locale: string) {
  $emit('localeSelected', locale);
  router.push({
    path: route.path,
    query: { locale },
  });
}
</script>

<style lang="scss" module>
@use '~styles/responsive.scss';

.language-picker {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    flex-direction: column;
  }
}

.language-option {
  display: inline-flex;
  flex: 1;
  margin: 0.5em;
  white-space: nowrap;
}
</style>

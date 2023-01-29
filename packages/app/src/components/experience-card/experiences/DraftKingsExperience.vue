<template>
  <ExperienceCard>
    <template #title>
      {{ t('position') }}
      <a
        :class="$style.link"
        href="https://www.draftkings.com/about/"
        target="_blank"
      >
        @ DraftKings
      </a>
    </template>

    <template #duration>
      {{ t('duration') }}
    </template>

    <template #content>
      <ul>
        <li v-for="index in 4" :key="index">
          {{ t(`events[${index - 1}]`) }}
        </li>
      </ul>
    </template>
  </ExperienceCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useLanguage } from '@language/component-language';
import draftkingsMessages from '@language/messages/experiences/draftkings';
import ExperienceCard from '../ExperienceCard.vue';

export default defineComponent({
  name: 'DraftKingsExperience',
  components: {
    ExperienceCard,
  },
  setup: () => {
    const { t } = useLanguage(draftkingsMessages);

    return {
      t,
    };
  },
});
</script>

<style lang="scss" module>
@use '~styles/links.scss';
@include links.link;
</style>

<template>
  <ExperienceCard>
    <template #title>
      {{ t('experience.draftkings.position') }}
      <a
        :class="$style.link"
        href="https://www.draftkings.com/about/"
        target="_blank"
      >
        @ DraftKings
      </a>
    </template>

    <template #duration>
      {{ t('experience.draftkings.duration') }}
    </template>

    <template #content>
      <ul>
        <li v-for="index in 4" :key="index">
          {{ t(`experience.draftkings.events[${index - 1}]`) }}
        </li>
      </ul>
    </template>
  </ExperienceCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExperienceCard from '../ExperienceCard.vue';
import { useLanguage } from '@language/language-service';

export default defineComponent({
  name: 'DraftKingsExperience',
  components: {
    ExperienceCard,
  },
  setup: () => {
    const { t } = useLanguage();

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

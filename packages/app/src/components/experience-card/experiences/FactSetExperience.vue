<template>
  <ExperienceCard>
    <template #title>
      {{ t('experience.factset.position') }}
      <a :class="$style.link" href="https://www.factset.com/" target="_blank">
        @ FactSet Research Systems
      </a>
    </template>

    <template #duration>
      {{ t('experience.factset.duration') }}
    </template>

    <template #content>
      <ul>
        <li v-for="index in 4" :key="index">
          {{ t(`experience.factset.events[${index - 1}]`) }}
        </li>
      </ul>
    </template>
  </ExperienceCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useLanguage } from '@language/language-service';
import ExperienceCard from '../ExperienceCard.vue';

export default defineComponent({
  name: 'FactSetExperience',
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

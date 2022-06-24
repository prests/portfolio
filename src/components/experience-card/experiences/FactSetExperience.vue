<template>
  <ExperienceCard>
    <template #title>
      {{ t('position') }} 
      <a :class="$style.link" href="https://www.factset.com/" target="_blank">
        @ FactSet Research Systems
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
import { defineComponent } from "vue";

import { useLanguage } from "@language/component-language";
import factSetMessage from "@language/messages/experiences/factset"
import ExperienceCard from "../ExperienceCard.vue";

export default defineComponent({
  name: 'FactSetExperience',
  components: {
    ExperienceCard,
  },
  setup: () => {
    const { t } = useLanguage(factSetMessage);

    return {
      t,
    };
  },
})
</script>

<style lang="scss" module>
@use "../styles/experiences.scss";
@include experiences.link;

</style>
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
        <li v-for="index in 5" :key="index">
          {{ t(`experience.draftkings.events[${index - 1}]`) }}
        </li>
      </ul>
    </template>
  </ExperienceCard>
</template>

<script setup lang="ts">
import ExperienceCard from '../ExperienceCard.vue';
import { useLanguage } from '@language/language-service';

const { t } = useLanguage();
</script>

<style lang="scss" module>
@use '~styles/colors.scss';
@use '~styles/links.scss';
@include links.link(colors.$orange-red-crystal);
</style>

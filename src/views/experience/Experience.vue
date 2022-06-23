<template>
  <div :class="$style.experienceView">
    <h2 :class="$style.job">
      {{ t('e1.position') }} 
      <a :class="$style.link" href="https://www.factset.com/" target="_blank">
        @ FactSet Research Systems
      </a>
    </h2>

    <p>{{ t('e1.duration') }}</p>

    <div :class="$style.jobDescription">
      <ul>
        <li v-for="index in 4" :key="index">
          {{ t(`e1.events[${index - 1}]`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useLanguage } from '@language/component-language';
import experienceMessages from '@language/messages/experience';

export default defineComponent({
  name: 'ExperienceView',
  setup: () => {
    const { t } = useLanguage(experienceMessages);

    return {
      t,
    };
  },
})
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.experienceView {
  display: flex;
  flex-direction: column;
  color: colors.$grey;
  height: auto;
  width: 55%;
  margin: 2em auto;
  font-size: 2rem;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    font-size: 1.6rem;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    width: 90%;
    margin: 2em auto;
    flex-direction: column;
  }
}

.job {
  color: colors.$white;
  margin-bottom: 0em;
}

.link {
  text-decoration: none;
  color: colors.$orange-red-crystal;

  background: 
    none,
    linear-gradient(to right, colors.$orange-red-crystal, colors.$orange-red-crystal);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

.link:hover, .link:focus {
  background-size: 0 0.1em, 100% 0.1em;
}

.jobDescription {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin-right: auto;
  }

  ul {
    margin: 0;
  }

  li {
    text-align: left;
    padding: 0.1em 0 0.1em 0.5em;
    margin-right: 0.5em;
    flex-basis: 45%;

    @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      margin: 0 auto;
    }
  }

  li::marker {
    content: '\21A0';
    color: colors.$orange-red-crystal;
    font-size: 2.5rem;
  }
}
</style>

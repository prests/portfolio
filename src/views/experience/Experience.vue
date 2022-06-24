<template>
  <div :class="$style.experienceView">
    <ExperienceWrapper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  default as ExperienceWrapper
} from '@components/experience-card/ExperienceWrapper.vue';

export default defineComponent({
  name: 'ExperienceView',
  components: {
    ExperienceWrapper,
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
</style>

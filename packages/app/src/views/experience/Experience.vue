<template>
  <div :class="$style['experience-view']">
    <ExperienceWrapper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExperienceWrapper from '@components/experience-card/ExperienceWrapper.vue';

export default defineComponent({
  name: 'ExperienceView',
  components: {
    ExperienceWrapper,
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.experience-view {
  display: flex;
  flex-direction: column;
  width: 55%;
  height: auto;
  margin: 2em auto;
  font-size: 2rem;
  color: colors.$grey;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    font-size: 1.6rem;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    flex-direction: column;
    width: 90%;
    margin: 2em auto;
  }
}
</style>

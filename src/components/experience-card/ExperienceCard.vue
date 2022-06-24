<template>
  <div :class="$style.experienceContainer">
    <h2 :class="$style.title">
      <slot name="title" />
    </h2>

    <p>
      <slot name="duration" />
    </p>

    <div :class="$style.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ExperienceCard',
})
</script>

<style lang="scss" module>
@use '~styles/colors';

.title {
  color: colors.$white;
  margin-bottom: 0em;
}

.experienceContainer {
  display: flex;
  flex-direction: column;
  color: co
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /*@include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin-right: auto;
  }*/

  ul {
    margin: 0;
  }

  li {
    text-align: left;
    padding: 0.1em 0 0.1em 0.5em;
    margin-right: 0.5em;
    flex-basis: 45%;

    /*@include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      margin: 0 auto;
    }*/
  }

  li::marker {
    content: '\21A0';
    color: colors.$orange-red-crystal;
    font-size: 2.5rem;
  }
}
</style>
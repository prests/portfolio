<template>
  <div :class="$style['experience-container']">
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

<style lang="scss" module>
@use '~styles/colors';

.title {
  margin-bottom: 0;
  color: colors.$white;
}

.experience-container {
  display: flex;
  flex-direction: column;
  color: co;
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /* @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin-right: auto;
  } */

  ul {
    margin: 0;
  }

  li {
    flex-basis: 45%;
    padding: 0.1em 0 0.1em 0.5em;
    margin-right: 0.5em;
    text-align: left;

    /* @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      margin: 0 auto;
    } */
  }

  li::marker {
    font-size: 2.5rem;
    color: colors.$orange-red-crystal;
    content: '\21A0';
  }
}
</style>

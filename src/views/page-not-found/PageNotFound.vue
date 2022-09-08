<template>
  <div :class="$style.notFoundContainer">
    <h1>404 <span>Page Not Found</span></h1>

    <h2>This is not a valid page</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.notFoundContainer {
  display: flex;
  flex-direction: column;
  color: colors.$grey;
  height: auto;
  width: 55%;
  margin: 2em auto;
  font-size: 2rem;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    text-align: center;
  }

  h1 {
    color: colors.$orange-red-crystal;

    span {
      color: colors.$white;
    }
  }
}
</style>

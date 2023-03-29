<template>
  <div :class="$style['not-found-container']">
    <h1>404 <span>Page Not Found</span></h1>

    <h2>This is not a valid page</h2>
  </div>
</template>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.not-found-container {
  display: flex;
  flex-direction: column;
  width: 55%;
  height: auto;
  margin: 2em auto;
  font-size: 2rem;
  color: colors.$grey;

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

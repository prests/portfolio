<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@use '~styles/colors';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  background-color: colors.$black-corol;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  height: 100%;
  width: 100%;
}
</style>

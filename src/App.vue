<template>
  <NavBar />
  <router-view :class="$style.view" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '@components/nav-bar/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
})
</script>

<style lang="scss">
@use '~styles/colors';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

html {
  height: 100%;
  width: 100%;
  font-size: 62.5%;
}

body {
  background-color: colors.$black-corol;
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
}

#hamburger-target {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" module>

.view {
  width: 100%;
}
</style>

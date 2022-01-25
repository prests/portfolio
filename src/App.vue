<template>
  <NavBar />

  <router-view v-slot="{ Component }">
    <transition mode="out-in" @enter="routeEnter" @leave="routeLeave">
      <component :is="Component" :class="$style.view"></component>
    </transition>
  </router-view>

  <FooterList />
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent } from 'vue'

import FooterList from '@components/footer/Footer.vue';
import NavBar from '@components/nav-bar/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    FooterList,
    NavBar,
  },
  setup: () => {
    let initialLoad = true;

    function routeEnter(_: unknown, done: any): void {
      if (initialLoad) {
        gsap.to('#body', {duration: 1, opacity: 1, onComplete: done});
        initialLoad = false;
      } else {
        gsap.to('#body', {duration: 0.25, opacity: 1, onComplete: done});
      }
    }

    function routeLeave(_: unknown, done: any): void {
      gsap.to('#body', {duration: 0.25, opacity: 0, onComplete: done});
    }

    return {
      routeEnter,
      routeLeave,
    };
  },
});
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
  opacity: 0;
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

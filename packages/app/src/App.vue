<template>
  <div :class="$style.appContainer">
    <NavBar />

    <router-view v-slot="{ Component }">
      <transition mode="out-in" @enter="routeEnter" @leave="routeLeave">
        <component :is="Component" :class="$style.view" />
      </transition>
    </router-view>

    <FooterList />
  </div>
</template>

<script lang="ts">
import { animate } from 'motion';
import { defineComponent } from 'vue';

import FooterList from '@components/footer/Footer.vue';
import NavBar from '@components/nav-bar/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    FooterList,
    NavBar,
  },
  setup: () => {
    let firstload = true;

    function routeEnter(el: any, done: any): void {
      if (firstload) {
        firstload = false;
        animate(el, { opacity: 1 }, { duration: 1 }).finished.then(done);
      } else {
        animate(el, { opacity: 1 }, { duration: 0.25 }).finished.then(done);
      }
    }

    function routeLeave(el: any, done: any): void {
      animate(el, { opacity: 0 }, { duration: 0.25 }).finished.then(done);
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
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: colors.$black-corol;
  height: 100%;
  width: 100%;
  margin: 0;
}

body::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}

body::-webkit-scrollbar-thumb:horizontal:hover {
  display: none;
}

body::-webkit-scrollbar-thumb {
  background-color: #f7f7ff80;
  border: 3px solid colors.$black-corol;
  border-radius: 10px;
}

body::-webkit-scrollbar-track {
  border: 3px solid colors.$black-corol;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
}
</style>

<style lang="scss" module>
.appContainer {
  height: inherit;
  width: inherit;
  display: inherit;
  flex-direction: inherit;
}

.view {
  width: 100%;
  opacity: 0;
}
</style>

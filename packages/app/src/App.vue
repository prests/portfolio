<template>
  <div :class="$style['app-container']">
    <LanguagePicker />
    <NavBar />

    <router-view v-slot="{ Component }">
      <transition mode="out-in" @enter="routeEnter" @leave="routeLeave">
        <component :is="Component" :class="$style.view" />
      </transition>
    </router-view>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { animate } from 'motion';

import AppFooter from '@components/footer/AppFooter.vue';
import NavBar from '@components/nav-bar/NavBar.vue';
import LanguagePicker from '@components/language-picker/LanguagePickerWrapper.vue';
let isFirstLoad = true;

function routeEnter(el: any, done: any): void {
  if (isFirstLoad) {
    isFirstLoad = false;
    animate(el, { opacity: 1 }, { duration: 1 }).finished.then(done);
  } else {
    animate(el, { opacity: 1 }, { duration: 0.25 }).finished.then(done);
  }
}

function routeLeave(el: any, done: any): void {
  animate(el, { opacity: 0 }, { duration: 0.25 }).finished.then(done);
}
</script>

<style lang="scss">
@use '~styles/colors';
@import 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap';

html {
  width: 100%;
  height: 100%;
  font-size: 62.5%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: Lato, sans-serif;
  background-color: colors.$black-corol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

body::-webkit-scrollbar-thumb {
  background-color: #f7f7ff80;
  border: 3px solid colors.$black-corol;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:horizontal:hover {
  display: none;
}

body::-webkit-scrollbar-track {
  border: 3px solid colors.$black-corol;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
}
</style>

<style lang="scss" module>
.app-container {
  display: inherit;
  flex-direction: inherit;
  width: inherit;
  height: inherit;
}

.view {
  width: 100%;
  opacity: 0;
}
</style>

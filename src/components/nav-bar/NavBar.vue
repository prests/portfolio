<template>
  <div :class="$style.navbarContainer">
    <img
      :class="$style.homeButton"
      :src="logoSrc"
      alt="my-logo"
      @click="changeRoute('/')"
    />

    <div :class="$style.routesContainer">
      <div
        v-for="path in paths"
        :key="path.name"
        :class="$style.route"
        @click="changeRoute(path.path)"
      >
        {{ path.name }}
      </div>

      <div :class="$style.resumeButton" @click="openResume()">Resume</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import logoSrc from '@assets/logo-small.svg';

const PATHS = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default defineComponent({
  name: 'NavBar',
  setup: () => {
    const router = useRouter();
    const paths = ref(PATHS);

    function changeRoute(path: string): void {
      if (path !== router.currentRoute.value.path) {
        router.push(path);
      }
    }

    const openResume = (): void => {
      window.open('Shayne Preston Resume.pdf', '_blank')
    };

    return {
      changeRoute,
      logoSrc,
      openResume,
      paths,
    }
  },
})
</script>

<style lang="scss" module>
@use '~styles/colors';

.navbarContainer {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 10rem);
  color: colors.$ghost-white;
  margin: 5rem;
}

.routesContainer {
  display: flex;
}

.homeButton {
  cursor: pointer;
  height: 6rem;
  margin: 0 auto 0 0;
}

.route {
  cursor: pointer;
  display: flex;
  margin: 2rem;
}

.resumeButton {
  display: flex;
  cursor: pointer;
  color: colors.$orange-red-crystal;
  margin: auto 0 auto 2rem;
  padding: 1rem 1.6rem;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
}
</style>
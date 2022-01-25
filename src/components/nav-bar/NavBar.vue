<template>
  <div :class="$style.navbarContainer">
    <img
      :class="$style.homeButton"
      :src="logoSrc"
      alt="my-logo"
      @click="changeRoute('/', (hamburgerMenu as any).closeMenu)"
    />

    <HamburgerMenu ref="hamburgerMenu" />

    <div :class="$style.routesContainer">
      <div
        v-for="path in paths"
        :id="`path_${path.name}`"
        :key="path.name"
        :class="$style.route"
        @mouseover="focusRoute(path.name)"
        @mouseleave="blurRoute(path.name)"
        @click="changeRoute(path.path)"
      >
        {{ path.name }}
      </div>

      <div
        id="navButton"
        :class="$style.resumeButton"
        @mouseover="focusButton('#navButton')"
        @mouseleave="blurButton('#navButton')"
        @click="openResume"
      >
        Resume
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import logoSrc from '@assets/logo-small.svg';
import { useNavAnimations } from "@composables/nav-bar/path-animations";
import { usePaths } from '@composables/nav-bar/paths-service';

import HamburgerMenu from './HamburgerMenu.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    HamburgerMenu,
  },
  setup: () => {
    const hamburgerMenu = ref<HTMLDivElement>();
    const {changeRoute, openResume, paths} = usePaths();
    const {blurButton, blurRoute, focusButton, focusRoute} = useNavAnimations();

    return {
      blurButton,
      blurRoute,
      changeRoute,
      focusButton,
      focusRoute,
      hamburgerMenu,
      logoSrc,
      openResume,
      paths,
    }
  },
})
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.navbarContainer {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 10rem);
  margin: 5rem;
}

.routesContainer {
  display: flex;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    display: none;
  }
}

.homeButton {
  cursor: pointer;
  height: 6rem;
  margin: 0 auto 0 0;
  z-index: 10;
}

.route {
  font-size: 2rem;
  font-weight: 700;
  background-color: colors.$white;
  background-image: linear-gradient(45deg, colors.$white 100%, colors.$orange-red-crystal 0%);

  background-clip: text;
  background-size: 100%;
  

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
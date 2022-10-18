<template>
  <div :class="$style.navbarContainer">
    <LogoSVG
      :class="$style.homeButton"
      @mouseover="focusLogo"
      @mouseleave="blurLogo"
      @click="changeRoute('/', (hamburgerMenu as any).closeMenu)"
    />

    <HamburgerMenu ref="hamburgerMenu" :class="$style.hamburgerButton" />

    <div :class="$style.routesContainer">
      <div
        v-for="(path, index) in paths"
        :id="`path_${path.id}`"
        :key="index"
        :class="$style.route"
        @mouseover="focusRoute(path.id)"
        @mouseleave="blurRoute(path.id)"
        @click="changeRoute(path.path)"
      >
        {{ t(`links[${index}]`) }}
      </div>

      <div
        id="navButton"
        :class="$style.resumeButton"
        @mouseover="focusButton('#navButton')"
        @mouseleave="blurButton('#navButton')"
        @click="openResume"
      >
        {{ t('resume') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import LogoSVG from '@assets/LogoSVG.vue';
import { useNavAnimations } from '@composables/animations/nav-bar/path-animations';
import { useLogoAnimations } from '@composables/animations/nav-bar/logo';
import { usePaths } from '@composables/routing/paths-service';
import { useLanguage } from '@language/component-language';
import navMessages from '@language/messages/nav';
import HamburgerMenu from './HamburgerMenu.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    HamburgerMenu,
    LogoSVG,
  },
  setup: () => {
    const hamburgerMenu = ref<HTMLDivElement>();

    const { t } = useLanguage(navMessages);

    const { changeRoute, openResume, paths } = usePaths();
    const { blurButton, blurRoute, focusButton, focusRoute } =
      useNavAnimations();
    const { focusLogo, blurLogo } = useLogoAnimations();

    return {
      blurButton,
      blurLogo,
      blurRoute,
      changeRoute,
      focusButton,
      focusLogo,
      focusRoute,
      hamburgerMenu,
      openResume,
      paths,
      t,
    };
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.navbarContainer {
  display: flex;
  flex-wrap: wrap;
  height: 10%;
  width: 90%;
  margin: 5rem auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    width: 90%;
    margin: 5rem auto;
  }
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
  margin: auto auto auto 0;
  z-index: 10;
}

.hamburgerButton {
  height: 9rem;
  margin: auto 0;
}

.route {
  font-size: 2rem;
  font-weight: 700;
  background-color: colors.$white;
  background-image: linear-gradient(
    45deg,
    colors.$white 100%,
    colors.$orange-red-crystal 0%
  );

  background-clip: text;
  background-size: 100%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  display: flex;
  margin: auto 2rem auto auto;
}

.resumeButton {
  display: flex;
  cursor: pointer;
  color: colors.$orange-red-crystal;
  margin: auto;
  padding: 1rem 1.6rem;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
}
</style>

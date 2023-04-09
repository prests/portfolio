<template>
  <div :class="$style['navbar-container']">
    <LogoSVG
      :class="$style['home-button']"
      @mouseover="focusLogo"
      @mouseleave="blurLogo"
      @click="changeRoute('/', (hamburgerMenu as any).closeMenu)"
    />

    <HamburgerMenu ref="hamburgerMenu" :class="$style['hamburger-button']" />

    <div :class="$style['routes-container']">
      <div
        v-for="(path, index) in paths"
        :id="`path_${path.id}`"
        :key="index"
        :class="$style.route"
        @mouseover="focusRoute(path.id)"
        @mouseleave="blurRoute(path.id)"
        @click="changeRoute(path.path)"
      >
        {{ t(`nav.links[${index}]`) }}
      </div>

      <div
        id="navButton"
        :class="$style['resume-button']"
        @mouseover="focusButton('#navButton')"
        @mouseleave="blurButton('#navButton')"
        @click="openResume"
      >
        {{ t('nav.resume') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import LogoSVG from '@assets/LogoSVG.vue';
import { useNavAnimations } from '@composables/animations/nav-bar/path-animations';
import { useLogoAnimations } from '@composables/animations/nav-bar/logo';
import { usePaths } from '@composables/routing/paths-service';
import { useLanguage } from '@language/language-service';
import HamburgerMenu from './HamburgerMenu.vue';

const hamburgerMenu = ref<HTMLDivElement>();

const { t } = useLanguage();

const { changeRoute, openResume, paths } = usePaths();
const { blurButton, blurRoute, focusButton, focusRoute } = useNavAnimations();
const { focusLogo, blurLogo } = useLogoAnimations();
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.navbar-container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 10%;
  margin: 1rem 5rem auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    margin: 1rem auto;
  }
}

.routes-container {
  display: flex;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    display: none;
  }
}

.home-button {
  z-index: 10;
  height: 6rem;
  margin: auto auto auto 0;
  cursor: pointer;
}

.hamburger-button {
  height: 9rem;
  margin: auto 0;
}

.route {
  display: flex;
  margin: auto 2rem auto auto;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  background-color: colors.$white;
  background-image: linear-gradient(
    45deg,
    colors.$white 100%,
    colors.$orange-red-crystal 0%
  );
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
}

.resume-button {
  display: flex;
  padding: 1rem 1.6rem;
  margin: auto;
  color: colors.$orange-red-crystal;
  cursor: pointer;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
}
</style>

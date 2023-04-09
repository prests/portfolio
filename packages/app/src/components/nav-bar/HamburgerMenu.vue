<template>
  <div :class="$style['menu-container']">
    <HamburgerSVG
      v-model="menuOpen"
      :class="$style['hamburger-icon']"
      @click="menuOpen ? closeMenu() : openMenu()"
    />

    <Teleport to="body">
      <div v-if="menuOpen" :class="$style['pop-up']" @click="closeMenu">
        <Transition appear @enter="openPopUp" @leave="closePopUp">
          <div
            v-if="navPanelOpen"
            :class="$style['routes-container']"
            @click.stop
          >
            <div
              v-for="(path, index) in paths"
              :id="`path_${path.id}`"
              :key="index"
              :class="$style.route"
              @mouseover="focusRoute(path.id)"
              @mouseleave="blurRoute(path.id)"
              @click.stop="hamburgerRouteSelected(path.path)"
            >
              {{ t(`nav.links[${index}]`) }}
            </div>

            <div
              id="resume"
              :class="$style['resume-button']"
              @mouseover="focusButton('#resume')"
              @mouseleave="blurButton('#resume')"
              @click.stop="openResume"
            >
              {{ t('nav.resume') }}
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { animate, timeline } from 'motion';
import { ref } from 'vue';

import HamburgerSVG from '@assets/HamburgerSVG.vue';
import { useNavAnimations } from '@composables/animations/nav-bar/path-animations';
import { usePaths } from '@composables/routing/paths-service';
import { useLanguage } from '@language/language-service';
import { useWindowResize } from '@composables/window-helpers/resize.js';

const menuOpen = ref(false);
const navPanelOpen = ref(false);

const { t } = useLanguage();

const { changeRoute, openResume, paths } = usePaths();
const { blurButton, blurRoute, focusButton, focusRoute } = useNavAnimations();

useWindowResize(() => {
  if (window.innerWidth > 768) {
    menuOpen.value = false;
  }
});

function hamburgerRouteSelected(path: string): void {
  closeMenu();
  changeRoute(path);
}

function closeMenu(): void {
  navPanelOpen.value = false;
  setTimeout(() => {
    menuOpen.value = false;
  }, 250);
}

function openMenu(): void {
  menuOpen.value = true;
  navPanelOpen.value = true;
}

function openPopUp(el: any, done: any) {
  timeline([
    [el, { x: '100%' }, { duration: 0 }],
    [el, { x: '0%' }, { duration: 0.5 }],
  ]).finished.then(done);
}

function closePopUp(el: any, done: any) {
  animate(el, { x: '100%' }, { duration: 0.25 }).finished.then(done);
}
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.menu-container {
  display: none;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    display: flex;
    flex-direction: column;
  }
}

.routes-container {
  right: -100%;
  display: flex;
  flex-direction: column;
  padding: 18em 8em;
  margin-left: auto;
  text-align: center;
  background-color: colors.$light-corol;

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    padding: 18em 2em;
  }
}

.route {
  right: 0;
  margin-bottom: 2em;
  font-size: 2.5rem;
  font-weight: 900;
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

.hamburger-icon {
  z-index: 10;
  margin: auto 0;
  cursor: pointer;
}

.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    backdrop-filter: blur(2px) brightness(0.5);
  }
}

.resume-button {
  display: flex;
  align-items: center;
  padding: 1rem 1.6rem;
  margin: 0 auto;
  font-size: 2rem;
  color: colors.$orange-red-crystal;
  cursor: pointer;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
}
</style>

<template>
  <div :class="$style.menuContainer">
    <HamburgerSVG
      :class="$style.hamburgerIcon"
      @click="menuOpen ? closeMenu() : openMenu()"
    />

    <Teleport to="#hamburger-target">
      <div v-if="menuOpen" :class="$style.popUp" @click="closeMenu">
        <Transition appear @enter="openPopUp" @leave="closePopUp">
          <div v-if="navPanelOpen" :class="$style.routesContainer" @click.stop>
            <div
              v-for="(path, index) in paths"
              :id="`path_${path.id}`"
              :key="index"
              :class="$style.route"
              @mouseover="focusRoute(path.id)"
              @mouseleave="blurRoute(path.id)"
              @click.stop="hamburgerRouteSelected(path.path)"
            >
              {{ t(`links[${index}]`) }}
            </div>

            <div
              id="resume"
              :class="$style.resumeButton"
              @mouseover="focusButton('#resume')"
              @mouseleave="blurButton('#resume')"
              @click.stop="openResume"
            >
              {{ t('resume') }}
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { animate, timeline } from 'motion';
import { defineComponent, ref } from 'vue';

import HamburgerSVG from '@assets/HamburgerSVG.vue';
import { useNavAnimations } from '@composables/animations/nav-bar/path-animations';
import { usePaths } from '@composables/routing/paths-service';
import { useLanguage } from '@language/component-language';
import navMessages from '@language/messages/nav';

export default defineComponent({
  name: 'HamburgerMenu',
  components: {
    HamburgerSVG,
  },
  setup: () => {
    const menuOpen = ref(false);
    const navPanelOpen = ref(false);

    const { t } = useLanguage(navMessages);

    const { changeRoute, openResume, paths } = usePaths();
    const { blurButton, blurRoute, focusButton, focusRoute } =
      useNavAnimations();

    window.addEventListener('resize', () => {
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
      }, 100);
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
      animate(el, { x: '100%' }, { duration: 0.1 }).finished.then(done);
    }

    return {
      blurButton,
      blurRoute,
      closeMenu,
      closePopUp,
      focusButton,
      focusRoute,
      hamburgerRouteSelected,
      menuOpen,
      navPanelOpen,
      openMenu,
      openPopUp,
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

.menuContainer {
  display: none;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    display: flex;
    flex-direction: column;
  }
}

.routesContainer {
  background-color: colors.$light-corol;
  right: -100%;
  padding: 15em 8em;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    padding: 15em 2em;
  }
}

.route {
  cursor: pointer;
  margin-bottom: 2em;
  right: 0;

  font-size: 2.5rem;
  font-weight: 900;
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
}

.hamburgerIcon {
  margin: auto 0;
  cursor: pointer;
  height: 4rem;
  z-index: 10;
  width: 5em;

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    margin: auto 1em auto 0;
  }
}

.popUp {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    -webkit-backdrop-filter: blur(2px) brightness(0.5);
    backdrop-filter: blur(2px) brightness(0.5);
  }
}

.resumeButton {
  font-size: 2rem;
  display: flex;
  cursor: pointer;
  color: colors.$orange-red-crystal;
  padding: 1rem 1.6rem;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
  align-items: center;
  margin: 0 auto;
}
</style>

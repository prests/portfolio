<template>
  <div :class="$style.menuContainer">
    <img
      :class="$style.hamburgerIcon"
      :src="hamburgerIconSrc"
      alt="my-logo"
      @click="menuOpen ? closeMenu() : openMenu();"
    />

    <Teleport to="#hamburger-target">
        <div
          v-if="menuOpen"
          :class="$style.popUp"
        >
          <Transition appear @enter="openPopUp" @leave="closePopUp">
            <div v-if="navPanelOpen" :class="$style.routesContainer">
              <div
                v-for="path in paths"
                :id="`path_${path.name}`"
                :key="path.name"
                :class="$style.route"
                @mouseover="focusRoute(path.name)"
                @mouseleave="blurRoute(path.name)"
                @click="hamburgerRouteSelected(path.path)"
              >
                {{ path.name }}
              </div>

              <div
                id="resume"
                :class="$style.resumeButton"
                @mouseover="focusResume"
                @mouseleave="blurResume"
                @click="openResume"
              >
                Resume
              </div>
            </div>
          </Transition>
        </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent, ref } from "vue";

import hamburgerIconSrc from '@assets/hamburger-icon.svg';
import { useNavAnimations } from "@composables/nav-bar/path-animations";
import { usePaths } from '@composables/nav-bar/paths-service';

export default defineComponent({
  name: 'HamburgerMenu',
  setup: () => {
    const menuOpen = ref(false);
    const navPanelOpen = ref(false);

    const {changeRoute, openResume, paths} = usePaths();
    const {blurResume, blurRoute, focusResume, focusRoute} = useNavAnimations();

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
      gsap.set(el, { xPercent: 100 });
      gsap.to(el, {duration: 0.5, xPercent: 0, onComplete: done});
    }

    function closePopUp(el: any, done: any) {
      gsap.to(el, {duration: 0.1, xPercent: 100, onComplete: done});
    }

    return {
      blurResume,
      blurRoute,
      closeMenu,
      closePopUp,
      focusResume,
      focusRoute,
      hamburgerIconSrc,
      hamburgerRouteSelected,
      menuOpen,
      navPanelOpen,
      openMenu,
      openPopUp,
      openResume,
      paths,
    };
  },
})
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
  background-color: colors.$blue-yonder;
  right: -100%;
  padding: 15em 8em;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.route {
  cursor: pointer;
  margin-bottom: 2em;
  right: 0;

  font-size: 2rem;
  font-weight: 700;
  background-color: colors.$ghost-white;
  background-image: linear-gradient(45deg, colors.$ghost-white 100%, colors.$orange-red-crystal 0%);

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
}

.popUp {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    -webkit-backdrop-filter: blur(2px) brightness(0.6);
    backdrop-filter: blur(2px) brightness(0.6);
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
}
</style>
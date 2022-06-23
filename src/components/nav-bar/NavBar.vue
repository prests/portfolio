<template>
  <div :class="$style.navbarContainer">
    <LogoSVG
      :class="$style.homeButton"
      @mouseover="focusHomeButton"
      @mouseleave="blurHomeButton"
      @click="changeRoute('/', (hamburgerMenu as any).closeMenu)"
    />

    <HamburgerMenu ref="hamburgerMenu" />

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
import gsap from "gsap";
import { defineComponent, ref } from "vue";

import LogoSVG from "@assets/LogoSVG.vue";
import { useNavAnimations } from "@composables/nav-bar/path-animations";
import { usePaths } from '@composables/nav-bar/paths-service';
import { useLanguage } from '@language/component-language';
import navMessages from '@language/messages/nav';
import HamburgerMenu from './HamburgerMenu.vue';

const LOGO_LINES = [
  '#Logo_Line_1',
  '#Logo_Line_2',
  '#Logo_Line_3',
  '#Logo_Line_4',
  '#Logo_Line_5',
  '#Logo_Line_6',
  '#Logo_Line_7',
  '#Logo_Line_8',
  '#Logo_Line_9',
  '#Logo_Line_10',
  '#Logo_Line_11',
  '#Logo_Line_12',
  '#Logo_Line_13',
  '#Logo_Line_14',
  '#Logo_Line_15',
  '#Logo_Line_16',
];

export default defineComponent({
  name: 'NavBar',
  components: {
    HamburgerMenu,
    LogoSVG,
  },
  setup: () => {
    const hamburgerMenu = ref<HTMLDivElement>();

    const { t } = useLanguage(navMessages);

    const {changeRoute, openResume, paths} = usePaths();
    const {blurButton, blurRoute, focusButton, focusRoute} = useNavAnimations();

    function blurHomeButton(): void {
      gsap.to(LOGO_LINES, {duration: 0.5, stroke: '#FE5F55'});
    }

    function focusHomeButton(): void {
      gsap.to(LOGO_LINES, {duration: 0.5, stroke: '#F7F7FF'});
    }

    return {
      blurButton,
      blurHomeButton,
      blurRoute,
      changeRoute,
      focusButton,
      focusHomeButton,
      focusRoute,
      hamburgerMenu,
      openResume,
      paths,
      t,
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
  width: 90%;
  margin: 5rem auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    width: 100%;
    margin: 5rem 0;
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
  margin: 0 auto 0 0;
  width: 5em;
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
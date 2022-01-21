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
        id="resume"
        :class="$style.resumeButton"
        @mouseover="focusResume"
        @mouseleave="blurResume"
        @click="openResume"
      >
        Resume
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap';
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

    function focusRoute(name: string): void {
      gsap.to(
        `#path_${name}`,
        {
          duration: 0.5,
          backgroundImage:
            'linear-gradient(to left, #F7F7FF 0%, #FE5F55 100%)',
        }
      );
    }

    function blurRoute(name: string): void {
      gsap.to(
        `#path_${name}`,
        {
          duration: 0.5,
          backgroundImage: 'linear-gradient(to left, #F7F7FF 100%, #FE5F55 0%)',
        }
      );
    }

    function focusResume(): void {
      gsap.to('#resume', {duration: 0.5, backgroundColor: '#FE5F5515'});
    }

    function blurResume(): void {
      gsap.to('#resume', {duration: 0.5, backgroundColor: '#FE5F5500'});
    }

    return {
      blurResume,
      blurRoute,
      changeRoute,
      focusResume,
      focusRoute,
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
  font-size: 2rem;
  font-weight: 700;
  background-color: colors.$ghost-white;
  background-image: linear-gradient(45deg, colors.$ghost-white 100%, colors.$orange-red-crystal 0%);

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
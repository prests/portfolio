<template>
  <LogoSVG ref="logo" :class="$style.homeButton" :is-splash-screen="true" />
</template>

<script lang="ts">
import { timeline } from 'motion';
import { defineComponent, onMounted, ref } from 'vue';

import LogoSVG from '@assets/LogoSVG.vue';
import { getSplashScreen } from '@composables/animations/splash-screen/splash-screen';

export default defineComponent({
  name: 'SplashScreen',
  components: {
    LogoSVG,
  },
  emits: {
    'animation-finished': null,
  },
  setup: (_, { emit }) => {
    const logo = ref<InstanceType<typeof LogoSVG>>();

    onMounted(() => {
      runSplashScreen().then(() => emit('animation-finished'));
    });

    function runSplashScreen() {
      if (logo.value) {
        const { opacityOnSegments, opacityOffSegments } = getSplashScreen(
          logo.value
        );

        return timeline([...opacityOnSegments, ...opacityOffSegments]).finished;
      }

      // Failed to load splashscreen
      return Promise.resolve();
    }

    return {
      logo,
      runSplashScreen,
    };
  },
});
</script>

<style lang="scss" module>
.homeButton {
  height: 60rem;
  margin: auto;
  width: 10em;
  z-index: 10;
}
</style>

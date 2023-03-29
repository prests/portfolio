<template>
  <div :class="$style['wrapper-container']">
    <HorizontalMenu v-model:selected="selected" :items="experiences" />
    <div :class="$style.separator">
      <transition
        mode="out-in"
        @enter="experienceEnter"
        @leave="experienceLeave"
      >
        <component :is="experienceComponentMap[selected]" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate, timeline } from 'motion';
import { ref, type Component } from 'vue';

import DraftKingsExperience from './experiences/DraftKingsExperience.vue';
import FactSetExperience from './experiences/FactSetExperience.vue';
import HorizontalMenu from '@components/horizontal-menu/HorizontalMenu.vue';

const experienceComponentMap: {
  [key: string]: Component;
} = {
  DraftKings: DraftKingsExperience,
  FactSet: FactSetExperience,
};
const experiences = Object.keys(experienceComponentMap);
const selected = ref(experiences[0]);

function experienceEnter(el: any, done: any) {
  timeline([
    [el, { opacity: 0 }, { duration: 0 }],
    [el, { opacity: 1 }, { duration: 0.25 }],
  ]).finished.then(done);
}

function experienceLeave(el: any, done: any) {
  animate(el, { opacity: 0 }, { duration: 0.25 }).finished.then(done);
}
</script>

<style lang="scss" module>
@use '~styles/colors';

.wrapper-container {
  display: flex;
  flex-direction: column;
}

.separator {
  margin-top: 0.5em;
  border-top: solid 1px colors.$grey;
}
</style>

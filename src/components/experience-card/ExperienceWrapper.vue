<template>
  <div :class="$style.wrapperContainer">
    <HorizontalMenu v-model:selected="selected" :items="companiesList" />
    <div :class="$style.separator">
      <transition
        mode="out-in"
        @enter="experienceEnter"
        @leave="experienceLeave"
      >
        <component :is="experiencesMap[selected]" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent, ref } from 'vue';

import {
  DraftKingsExperience,
  FactSetExperience,
} from '@components/experience-card/experiences';
import HorizontalMenu from '@components/horizontal-menu/HorizontalMenu.vue';
import { ExperiencesMap } from '@models/experiences';

export default defineComponent({
  name: 'ExperienceWrapper',
  components: {
    DraftKingsExperience,
    FactSetExperience,
    HorizontalMenu,
  },
  setup: () => {
    const selected = ref('DraftKings');
    const experiencesMap: ExperiencesMap = {
      DraftKings: DraftKingsExperience.name,
      FactSet: FactSetExperience.name,
    };

    function experienceEnter(el: any, done: any) {
      gsap.set(el, { opacity: 0 });
      gsap.to(el, { duration: 0.25, opacity: 1, onComplete: done });
    }

    function experienceLeave(el: any, done: any) {
      gsap.to(el, { duration: 0.25, opacity: 0, onComplete: done });
    }

    return {
      experienceEnter,
      experienceLeave,
      experiencesMap,
      companiesList: Object.keys(experiencesMap),
      selected,
    };
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';

.wrapperContainer {
  display: flex;
  flex-direction: column;
}

.separator {
  margin-top: 0.5em;
  border-top: solid 1px colors.$grey;
}
</style>

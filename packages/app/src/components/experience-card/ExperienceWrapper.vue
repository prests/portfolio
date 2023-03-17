<template>
  <div :class="$style['wrapper-container']">
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
import { animate, timeline } from 'motion';
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
      timeline([
        [el, { opacity: 0 }, { duration: 0 }],
        [el, { opacity: 1 }, { duration: 0.25 }],
      ]).finished.then(done);
    }

    function experienceLeave(el: any, done: any) {
      animate(el, { opacity: 0 }, { duration: 0.25 }).finished.then(done);
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

.wrapper-container {
  display: flex;
  flex-direction: column;
}

.separator {
  margin-top: 0.5em;
  border-top: solid 1px colors.$grey;
}
</style>

<template>
  <div :class="$style.menuContainer">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        $style.item,
        item === selected ? $style.selected : $style.notSelected,
      ]"
      @click="$emit('update:selected', item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'HorizontalMenu',
  props: {
    items: {
      type: Object as PropType<string[]>,
      default: () => [] as string[],
    },
    selected: { type: String, required: true },
  },
  emits: {
    'update:selected': (payload: string) => typeof payload === 'string',
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';

.menuContainer {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 2.5em;
  max-width: 100%;
  overflow-x: auto;
}

.item {
  font-weight: 600;
  font-size: 2rem;
  margin: auto 1em;
  cursor: pointer;
}

.selected {
  color: colors.$orange-red-crystal;
}

.notSelected {
  position: relative;
}

.notSelected::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.175rem;
  background: colors.$orange-red-crystal;
  transform: scale(0, 1.25);
  transition: transform 0.3s ease;
}

.notSelected:hover::after {
  transform: scale(1, 1.25);
}
</style>

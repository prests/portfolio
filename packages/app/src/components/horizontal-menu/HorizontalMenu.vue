<template>
  <div :class="$style['menu-container']">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      :class="[
        $style.item,
        item === props.selected ? $style.selected : $style['not-selected'],
      ]"
      @click="$emit('update:selected', item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ items?: string[]; selected: string }>(),
  {
    items: () => [],
  }
);
defineEmits<{ (e: 'update:selected', value: string): void }>();
</script>

<style lang="scss" module>
@use '~styles/colors';

.menu-container {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 2.5em;
  margin: 0 auto;
  overflow-x: auto;
}

.item {
  margin: auto 1em;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
}

.selected {
  color: colors.$orange-red-crystal;
}

.not-selected {
  position: relative;
}

.not-selected::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.175rem;
  content: '';
  background: colors.$orange-red-crystal;
  transition: transform 0.3s ease;
  transform: scale(0, 1.25);
}

.not-selected:hover::after {
  transform: scale(1, 1.25);
}
</style>

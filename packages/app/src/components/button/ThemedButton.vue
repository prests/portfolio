<template>
  <button
    ref="button"
    @mouseover="focusButton"
    @mouseleave="blurButton"
    @click="$emit('onClick')"
  >
    <span :class="$style.icon">
      <slot name="icon-left" />
    </span>

    <ThemedText
      v-if="props.content"
      :content="props.content"
      :class="$style.content"
    />

    <slot :class="$style.icon">
      <slot name="icon-right" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { animate } from 'motion';

import ThemedText from '@components/text/ThemedText.vue';

import { ref } from 'vue';

const props = withDefaults(defineProps<{ content: string }>(), { content: '' });
defineEmits<{ (e: 'onClick', value: void): void }>();

const button = ref<HTMLButtonElement>();

function focusButton() {
  animate(
    button.value as HTMLButtonElement,
    {
      backgroundColor: '#FE5F55',
      color: '#2f3f4e',
      fill: '#2f3f4e',
    },
    { duration: 0.25 }
  );
}

function blurButton() {
  animate(
    button.value as HTMLButtonElement,
    {
      backgroundColor: '#FE5F5500',
      color: '#FE5F55',
      fill: '#FE5F55',
    },
    { duration: 0.25 }
  );
}
</script>

<style lang="scss" module>
@use '~styles/colors';

$padding: 5px;

button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: $padding;
  background: none;
  color: colors.$orange-red-crystal;
  fill: colors.$orange-red-crystal;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 5px;
}

.content,
.icon {
  height: 100%;
  width: auto;
}

.content {
  padding: 0 $padding;
}

.icon {
  position: relative;
  display: flex;
}
</style>

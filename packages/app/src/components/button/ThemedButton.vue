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

    <ThemedText v-if="content" :content="content" :class="$style.content" />

    <slot :class="$style.icon">
      <slot name="icon-right" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { animate } from 'motion';

import ThemedText from '@components/text/ThemedText.vue';
import { ref } from 'vue';

// TODO: Update props destructure once no longer experimental
// eslint-disable-next-line vue/no-setup-props-destructure
const { content = '' } = defineProps<{ content: string }>();

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
  align-items: center;
  justify-content: center;
  padding: $padding;
  font: inherit;
  color: colors.$orange-red-crystal;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 5px;
  outline: inherit;
  fill: colors.$orange-red-crystal;
}

.content,
.icon {
  width: auto;
  height: 100%;
}

.content {
  padding: 0 $padding;
}

.icon {
  position: relative;
  display: flex;
}
</style>

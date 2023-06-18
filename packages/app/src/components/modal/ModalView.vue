<template>
  <div
    v-if="isContainerOpen"
    :class="$style['modal-backdrop']"
    @click="isOpen = false"
  >
    <Presence>
      <Motion
        v-if="isOpen"
        :initial="{
          opacity: 0,
          scale: 0,
        }"
        :animate="{
          opacity: 1,
          scale: 1,
        }"
        :exit="{
          opacity: 0,
          scale: 0.6,
        }"
        :class="$style.modal"
        @motioncomplete="animationCompleted"
      >
        <header :class="$style['modal-header']">
          <slot name="header" />
          <button
            type="button"
            :class="$style['btn-close']"
            @click="isOpen = false"
          >
            <CloseIcon />
          </button>
        </header>
        <article :class="$style.content">
          <slot name="body" />
        </article>
      </Motion>
    </Presence>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CloseIcon from '@assets/CloseIcon.vue';
import { Motion, Presence } from 'motion/vue';

// TODO: update eslint when defineModels is added
// eslint-disable-next-line no-undef
const isOpen = defineModel<boolean>('isOpen', { default: false });

// This is purely for transitions so we can close the modal content before the backdrop
const isContainerOpen = ref(isOpen.value);

watch(
  () => isOpen.value,
  () => {
    if (isOpen.value) {
      isContainerOpen.value = isOpen.value;
      return;
    }
  }
);

function animationCompleted() {
  if (!isOpen.value) {
    isContainerOpen.value = false;
  }
}
</script>

<style lang="scss" module>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  background-color: #00000030;
}

.modal {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  overflow-x: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 9px 26px 6px rgb(27 27 27 / 69%);
}

.modal-header {
  display: inline-flex;
  justify-content: space-between;
}

.btn-close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
}

.content {
  display: flex;
  flex-direction: column;
  width: auto;
}
</style>

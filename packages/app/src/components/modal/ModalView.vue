<template>
  <div
    v-if="isContainerOpen"
    :class="$style['modal-backdrop']"
    @click="closeModal"
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
            @click="closeModal"
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

const props = defineProps<{ isOpen: boolean }>();
const $emit = defineEmits<{ (e: 'update:isOpen', value: boolean): void }>();

// This is purely for transitions so we can close the modal content before the backdrop
const isContainerOpen = ref(props.isOpen);

watch(
  () => props.isOpen,
  () => {
    if (props.isOpen) {
      isContainerOpen.value = props.isOpen;
      return;
    }
  }
);

function animationCompleted() {
  if (!props.isOpen) {
    isContainerOpen.value = false;
  }
}

function closeModal() {
  $emit('update:isOpen', false);
}
</script>

<style lang="scss" module>
.modal-backdrop {
  font: inherit;
  position: fixed;
  inset: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 2px 9px 26px 6px rgba(27, 27, 27, 0.69);
  -webkit-box-shadow: 2px 9px 26px 6px rgba(27, 27, 27, 0.69);
  -moz-box-shadow: 2px 9px 26px 6px rgba(27, 27, 27, 0.69);
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

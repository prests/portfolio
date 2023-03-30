<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header" />

        <button
          type="button"
          class="btn-close"
          @click="$emit('update:isOpen', false)"
        >
          <CloseIcon />
        </button>
      </header>

      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from '@assets/CloseIcon.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ (e: 'update:isOpen', value: boolean): void }>();
</script>

<style lang="scss">
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 15;
  align-items: center;
  justify-content: center;
}

.modal {
  overflow-x: auto;
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  background: #ffffff;
  padding: 10px;
}

.modal-header {
  justify-content: space-between;
  display: inline-flex;
}

.btn-close {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0px;
}
</style>

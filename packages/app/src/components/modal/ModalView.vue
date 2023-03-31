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
  position: fixed;
  inset: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 30%);
}

.modal {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  overflow-x: auto;
  background: #fff;
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
</style>

<template>
  <span :class="$style.text">
    {{ props.content }}
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ content: string }>(), {
  content: '',
});
</script>

<style lang="scss" module>
.text {
  height: auto;
  width: auto;
  color: inherit;
  display: inline-flex;
  margin: auto 0;
}
</style>

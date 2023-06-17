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
  display: inline-flex;
  width: auto;
  height: auto;
  margin: auto 0;
  color: inherit;
}
</style>

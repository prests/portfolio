<template>
  <span :class="$style.text">
    {{ content }}
  </span>
</template>

<script setup lang="ts">
// TODO: Update props destructure once no longer experimental
// eslint-disable-next-line vue/no-setup-props-destructure
const { content = '' } = defineProps<{ content: string }>();
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

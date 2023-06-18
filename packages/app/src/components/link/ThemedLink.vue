<template>
  <a :class="$style.link" @click="$emit('onClick')">{{ content }}</a>
</template>

<script setup lang="ts">
// TODO: Update props destructure once no longer experimental
// eslint-disable-next-line vue/no-setup-props-destructure
const { content = '' } = defineProps<{ content: string }>();

defineEmits<{ (e: 'onClick', value: void): void }>();
</script>

<style lang="scss" module>
@use '~styles/colors.scss';
@use '~styles/links.scss';
@include links.link(black);

a {
  cursor: pointer;
}
</style>

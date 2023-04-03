<template>
  <a :class="$style.link" @click="$emit('onClick')">{{ props.content }}</a>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ content: string }>(), {
  content: '',
});
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

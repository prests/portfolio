<template>
  <div>
    <h1 :class="$style.welcome">Welcome</h1>
    <h2>Shayne Preston</h2>
    <h3>I build Web Apps</h3>

    <p>
      I'm a Software Engineer who strives to build clean and inuitive apps for the web. I am currently working at FactSet Research Systems.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style lang="scss" module>
@use '~styles/colors';

.welcome {
  color: colors.$orange-red-crystal;
}
</style>

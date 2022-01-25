<template>
  <div :class="$style.homeView">
    <h1 :class="$style.welcome">Welcome</h1>
    <h2 :class="$style.motto">
      My name is 
      <span :class="$style.name">Shayne Preston</span>, 
      and I build web applications
    </h2>

    <p>
      Want to get in touch with me? 
      Shoot me an email and I'll try my best to get back to you!
    </p>

    <div :class="$style.buttonContainer">
      <div
        id="contactButton"
        :class="$style.contactMe"
        @mouseover="focusButton('#contactButton')"
        @mouseleave="blurButton('#contactButton')"
        @click="sendEmail"
      >
        Contact Me
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useNavAnimations } from '@composables/nav-bar/path-animations';
import { usePaths } from '@composables/nav-bar/paths-service';

export default defineComponent({
  name: 'HomeView',
  setup: () => {
    const {sendEmail} = usePaths();
    const {blurButton, focusButton} = useNavAnimations();

    return {
      blurButton,
      focusButton,
      sendEmail,
    };
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.homeView {
  display: flex;
  flex-direction: column;
  color: colors.$grey;
  height: auto;
  width: 55%;
  margin: 2em auto;
  font-size: 2rem;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    width: 100%;
    margin: 2em 0;
    flex-direction: column;
  }
}

.welcome {
  color: colors.$orange-red-crystal;
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 0.5em;
}
.name {
  color: colors.$white;
}

.motto {
  margin-bottom: 0.5em;
}

.buttonContainer {
  margin-top: 1em;
  display: flex;
  width: 20%;
}

.contactMe {
  cursor: pointer;
  color: colors.$orange-red-crystal;
  padding: 1rem 1.6rem;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
  align-items: center;
}
</style>

<template>
  <div :class="$style.homeView">
    <h1 :class="$style.welcome">{{ t('welcome') }}</h1>
    <h2 :class="$style.motto">
      {{ t('bio.s1') }}
      <span :class="$style.name">Shayne Preston</span>&#44; 
      {{ t('bio.s2') }}
    </h2>

    <p>
      {{ t('contact.message') }}
    </p>

    <div :class="$style.buttonContainer">
      <div
        id="contactButton"
        :class="$style.contactMe"
        @mouseover="focusButton('#contactButton')"
        @mouseleave="blurButton('#contactButton')"
        @click="sendEmail"
      >
        {{ t('contact.button') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useNavAnimations } from '@composables/nav-bar/path-animations';
import { usePaths } from '@composables/nav-bar/paths-service';
import { useLanguage } from '@language/component-language';
import homeMessages from '@language/messages/home';

export default defineComponent({
  name: 'HomeView',
  setup: () => {
    const { t } = useLanguage(homeMessages);
    const {sendEmail} = usePaths();
    const {blurButton, focusButton} = useNavAnimations();

    return {
      blurButton,
      focusButton,
      sendEmail,
      t,
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
    width: 90%;
    margin: 2em 1em;
    flex-direction: column;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    text-align: center;
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
  margin: 1em 0;
  display: flex;
  width: 25%;
  text-align: center;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    width: 90%;
    margin: 1em auto;
  }
}

.contactMe {
  cursor: pointer;
  color: colors.$orange-red-crystal;
  padding: 1rem 1.6rem;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;
  align-items: center;
  
  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    margin: 0 auto;
  }
}
</style>

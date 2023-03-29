<template>
  <div :class="$style['home-view']">
    <h1 :class="$style.welcome">{{ t('home.welcome') }}</h1>
    <h2 :class="$style.motto">
      {{ t('home.bio.s1') }}
      <span :class="$style.name">Shayne Preston</span>&#44;
      {{ t('home.bio.s2') }}
    </h2>

    <p>
      {{ t('home.contact.message') }}
    </p>

    <div :class="$style['button-container']">
      <div
        id="contactButton"
        :class="$style['contact-me']"
        @mouseover="focusButton('#contactButton')"
        @mouseleave="blurButton('#contactButton')"
        @click="sendEmail"
      >
        {{ t('home.contact.button') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useNavAnimations } from '@composables/animations/nav-bar/path-animations';
import { usePaths } from '@composables/routing/paths-service';
import { useLanguage } from '@language/language-service';

export default defineComponent({
  name: 'HomeView',
  setup: () => {
    const { t } = useLanguage();
    const { sendEmail } = usePaths();
    const { blurButton, focusButton } = useNavAnimations();

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

.home-view {
  display: flex;
  flex-direction: column;
  width: 55%;
  height: auto;
  margin: 2em auto;
  font-size: 2rem;
  color: colors.$grey;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    flex-direction: column;
    width: 90%;
    margin: 2em 1em;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    text-align: center;
  }
}

.welcome {
  margin-bottom: 0.5em;
  font-size: 5rem;
  font-weight: 900;
  color: colors.$orange-red-crystal;
}

.name {
  color: colors.$white;
}

.motto {
  margin-bottom: 0.5em;
}

.button-container {
  display: flex;
  width: 25%;
  margin: 1em 0;
  text-align: center;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    width: 90%;
    margin: 1em auto;
  }
}

.contact-me {
  align-items: center;
  padding: 1rem 1.6rem;
  color: colors.$orange-red-crystal;
  cursor: pointer;
  border: solid 2px colors.$orange-red-crystal;
  border-radius: 5px;

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    margin: 0 auto;
  }
}
</style>

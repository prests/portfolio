<template>
  <div :class="$style.footerContainer">
    <span :class="$style.copyright">
      {{ t('copyright') }}
      <span :class="$style.name"> Shayne Preston </span>
    </span>

    <div :class="$style.linksContainer">
      <a
        href="https://www.github.com/prests"
        aria-label="GitHub"
        target="_blank"
        @mouseover="focusLink('#gitHubIcon')"
        @mouseleave="blurLink('#gitHubIcon')"
      >
        <GithubSvg />
      </a>
      <a
        href="https://www.linkedin.com/in/shayne-preston/"
        aria-label="LinkedIn"
        target="_blank"
        @mouseover="focusLink('#linkedInIcon')"
        @mouseleave="blurLink('#linkedInIcon')"
      >
        <LinkedInSVG />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent } from 'vue';

import GithubSvg from '@assets/GithubSVG.vue';
import LinkedInSVG from '@assets/LinkedInSVG.vue';
import { useLanguage } from '@language/component-language';
import footerMessages from '@language/messages/footer';

export default defineComponent({
  name: 'FooterList',
  components: {
    GithubSvg,
    LinkedInSVG,
  },
  setup: () => {
    const { t } = useLanguage(footerMessages);

    function blurLink(id: string): void {
      gsap.to(id, { duration: 0.5, y: 0 });
    }

    function focusLink(id: string): void {
      gsap.to(id, { duration: 0.5, y: -5 });
    }

    return {
      blurLink,
      focusLink,
      t,
    };
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';

.footerContainer {
  display: flex;
  flex-direction: column;
  margin: auto auto 1.5em auto;
  text-align: center;
}

.copyright {
  color: colors.$grey;
}

.name {
  color: colors.$white;
}

.linksContainer {
  display: flex;
  margin: 0.5em auto 0 auto;
}

.link {
  cursor: pointer;
  filter: invert(45%) sepia(75%) saturate(512%) hue-rotate(315deg)
    brightness(97%) contrast(107%);
}
</style>

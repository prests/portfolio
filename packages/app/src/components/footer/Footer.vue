<template>
  <div :class="$style['footer-container']">
    <span :class="$style.copyright">
      {{ t('copyright') }}
      <span :class="$style.name"> Shayne Preston </span>
    </span>

    <div :class="$style['links-container']">
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
import { animate } from 'motion';
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
      animate(id, { y: 0 }, { duration: 0.5 });
    }

    function focusLink(id: string): void {
      animate(id, { y: -5 }, { duration: 0.5 });
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

.footer-container {
  display: flex;
  flex-direction: column;
  margin: auto auto 1.5em;
  text-align: center;
}

.copyright {
  color: colors.$grey;
}

.name {
  color: colors.$white;
}

.links-container {
  display: flex;
  margin: 0.5em auto 0;
}

.link {
  cursor: pointer;
  filter: invert(45%) sepia(75%) saturate(512%) hue-rotate(315deg)
    brightness(97%) contrast(107%);
}
</style>

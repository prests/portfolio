<template>
  <div :class="$style['contact-card-view']">
    <p>
      {{ t('info') }}
      <a
        ref="contactCardLink"
        :class="$style.link"
        href="shayne-contact-card.vcf"
        download="shayne-contact-card.vcf"
        >{{ t('link') }}</a
      >.
    </p>
    <p>{{ t('tip') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import { useLanguage } from '@language/component-language';
import contactMessages from '@language/messages/contact-card';

export default defineComponent({
  name: 'ContactCard',
  setup: () => {
    const contactCardLink = ref<HTMLAnchorElement>();
    const { t } = useLanguage(contactMessages);

    onMounted(() => {
      contactCardLink.value?.click();
    });

    return { contactCardLink, t };
  },
});
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/links.scss';
@include links.link;

.contact-card-view {
  width: 50%;
  margin: 2em auto;
  color: colors.$grey;
  text-align: center;
}
</style>

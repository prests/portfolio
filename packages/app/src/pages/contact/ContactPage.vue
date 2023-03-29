<template>
  <div :class="$style['contact-card-view']">
    <p>
      {{ t('contactCard.info') }}
      <a
        ref="contactCardLink"
        :class="$style.link"
        href="shayne-contact-card.vcf"
        download="shayne-contact-card.vcf"
        >{{ t('contactCard.link') }}</a
      >.
    </p>
    <p>{{ t('contactCard.tip') }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useLanguage } from '@language/language-service';

const { t } = useLanguage();
const contactCardLink = ref<HTMLAnchorElement>();

onMounted(() => {
  contactCardLink.value?.click();
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

<template>
  <div :class="$style['about-view']">
    <div :class="$style['description-container']">
      <h1 :class="$style['about-header']">{{ t('about.title') }}</h1>

      <div :class="$style['history-container']">
        <p>{{ t('about.p1') }}</p>

        <p>
          {{ t('about.p2') }}
          <a :class="$style.link" href="https://rcos.io/" target="_blank">
            RCOS
          </a>
          &#46;
        </p>

        <!-- eslint-disable-next-line vue/max-len -->
        <p>
          {{ t('about.p3.s1') }}
          <a
            :class="$style.link"
            href="https://www.draftkings.com/"
            target="_blank"
          >
            DraftKings
          </a>
          {{ t('about.p3.s2') }}
        </p>

        <!-- eslint-disable-next-line vue/max-len -->
        <p>{{ t('about.p4') }}</p>

        <span>{{ t('about.technologies.header') }}</span>
        <div :class="$style.technologies">
          <ul>
            <li v-for="index in 7" :key="index">
              {{ t(`about.technologies.techList[${index - 1}]`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div :class="$style['image-container']">
      <transition appear @enter="loadImage">
        <img
          id="aboutPhoto"
          :class="$style['about-image']"
          :src="aboutPhotoSrc"
          alt="photo-of-me"
          @mouseover="focusImage"
          @mouseleave="blurImage"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate } from 'motion';

import aboutPhotoSrc from '@assets/about-photo.jpg';
import { useLanguage } from '@language/language-service';

const { t } = useLanguage();

function blurImage(): void {
  if (window.innerWidth > 1200) {
    animate(`#aboutPhoto`, { rotate: 5 }, { duration: 0.5 });
  }
}

function focusImage(): void {
  animate(`#aboutPhoto`, { rotate: 0 }, { duration: 0.5 });
}

function loadImage(): void {
  if (window.innerWidth > 1200) {
    animate(`#aboutPhoto`, { opacity: 1, rotate: 5 }, { duration: 2 });
  } else {
    animate(`#aboutPhoto`, { opacity: 1 }, { duration: 2 });
  }
}
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.about-view {
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin: 0 auto 1em;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    flex-direction: column;
    width: 100%;
    margin: 2em 0;
  }
}

.description-container {
  display: flex;
  flex-direction: column;
  margin: 0 5em;
  font-size: 2rem;
  color: colors.$grey;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    margin: 0 0 5em 5em;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin: 0 1em 5em;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    text-align: center;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    margin: 0 0 5em;
  }
}

.image-container {
  width: 80%;
  margin: 6em 5em auto auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    width: 50%;
    margin: 0 auto;
  }
}

.about-image {
  width: calc(100% - 20px);
  height: auto;
  border: 10px solid colors.$orange-red-crystal;
  border-radius: 12px;
  box-shadow: 0 0 30px 5px #fe605571;
  opacity: 0;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    transform: rotate(0deg) !important;
  }
}

.about-header {
  margin: 0;
  font-size: 5rem;
  font-weight: 900;
  color: colors.$orange-red-crystal;
}

.history-container {
  display: flex;
  flex-direction: column;
}

.link {
  color: colors.$orange-red-crystal;
  text-decoration: none;
  background: none,
    linear-gradient(
      to right,
      colors.$orange-red-crystal,
      colors.$orange-red-crystal
    );
  background-repeat: no-repeat;
  background-position: 100% 100%, 0 100%;
  background-size: 100% 0.1em, 0 0.1em;
  transition: background-size 400ms;
}

.link:hover,
.link:focus {
  background-size: 0 0.1em, 100% 0.1em;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      display: block;
      margin: 0 auto;
    }
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    padding: 0 auto;
    margin: 0 auto;
  }

  li {
    flex-basis: 45%;
    padding-left: 0.5em;
    margin-right: 0.5em;
    text-align: left;

    @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      padding: 0;
      margin: 0 auto;
    }
  }

  li::marker {
    padding-right: 10em;
    font-size: 3rem;
    color: colors.$orange-red-crystal;
    content: '\21A0';
  }
}
</style>

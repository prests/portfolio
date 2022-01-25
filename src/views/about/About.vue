<template>
  <div :class="$style.aboutView">
    <div :class="$style.descriptionContainer">
      <h1 :class="$style.name">About Me</h1>

      <div :class="$style.historyContainer">
        <!-- eslint-disable-next-line vue/max-len -->
        <p>Hey! My name is Shayne, I&#39;m a Software Engineer, and I am obsessed with the web. My passion for web development began in High School where I took an Introduction to Programming class. I learned about HTML and CSS and loved the creativity and possibilities that a webpage could bring.</p>

        <!-- eslint-disable-next-line vue/max-len -->
        <p>With that taste of programming I decided to pursue a degree in Computer and Systems Engineering at Rensselaer Polytechnic Institute. I used my time here to explore different aspects of computer engineering from computer architecture in classes, to mobile app development in <a :class="$style.link" href="https://rcos.io/" target="_blank">RCOS</a>.</p>
      
        <!-- eslint-disable-next-line vue/max-len -->
        <p>These days I&#39;m working on web based applications both on the frontend and on the backend at <a :class="$style.link" href="https://www.factset.com/" target="_blank">FactSet Research Systems</a>. These apps cater to thousands of users daily and are a cornerstone to FactSet&#39;s infrastructure.</p>

        <span>Technologies I&#39;m currently working with:</span>
        <div :class="$style.technologies">
          <ul>
            <li>Javascript (ES6+)</li>
            <li>Typescript</li>
            <li>Vue.js 2/3</li>
            <li>Angular.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Swagger.js</li>
          </ul>
        </div>
      </div>
    </div>

    <div :class="$style.imageContainer">
      <transition appear @enter="loadImage">
        <img
          id="aboutPhoto"
          :class="$style.aboutImage"
          :src="aboutPhotoSrc"
          alt="photo-of-me"
          @mouseover="focusImage"
          @mouseleave="blurImage"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent } from "vue";

import aboutPhotoSrc from '@assets/about-photo.jpg';

export default defineComponent({
  name: 'AboutView',
  setup: () => {
    function blurImage(): void {
      if (window.innerWidth > 1200) {
        gsap.to(`#aboutPhoto`, {duration: 0.5, rotate: 5});
      }
    }

    function focusImage(): void {
      gsap.to(`#aboutPhoto`, {duration: 0.5, rotate: 0});
    }

    function loadImage(): void {
      if (window.innerWidth > 1200) {
        gsap.to(`#aboutPhoto`, {duration: 2, opacity: 1, rotate: 5});
      } else {
        gsap.to(`#aboutPhoto`, {duration: 2, opacity: 1});
      }
    }

    return {
      aboutPhotoSrc,
      blurImage,
      focusImage,
      loadImage,
    }
  },
})
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.aboutView {
  display: flex;
  flex-direction: row;
  height: auto;
  width: 80%;
  margin: 2em auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    width: 100%;
    margin: 2em 0;
    flex-direction: column;
  }
}

.descriptionContainer {
  display: flex;
  flex-direction: column;
  margin: 0 5em;
  font-size: 2rem;
  color: colors.$grey;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    margin: 0 0 5em 5em;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin: 0 1em 5em 1em;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
    text-align: center;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, xs)) {
    margin: 0 0 5em 0;
  }
}

.imageContainer {
  width: 80%;
  margin: 6em 5em auto auto;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    width: 50%;
    margin: 0 auto;
  }
}

.aboutImage {
  opacity: 0;
  border: 10px solid colors.$orange-red-crystal;
  border-radius: 12px;
  box-shadow: 0px 0px 30px 5px #fe605571;
  height: auto;
  width: calc(100% - 20px);

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    transform: rotate(0deg) !important;
  }
}

.name {
  color: colors.$orange-red-crystal;
  font-size: 5rem;
  font-weight: 900;
}

.historyContainer {
  display: flex;
  flex-direction: column;
}

.link {
  text-decoration: none;
  color: colors.$orange-red-crystal;

  background: 
    none,
    linear-gradient(to right, colors.$orange-red-crystal, colors.$orange-red-crystal);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

.link:hover, .link:focus {
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
    margin: 0 auto;
    padding: 0 auto;
  }

  li {
    text-align: left;
    padding-left: 0.5em;
    margin-right: 0.5em;
    flex-basis: 45%;

    @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      padding: 0;
      margin: 0 auto;
    }
  }

  li::marker {
    content: '\21A0';
    color: colors.$orange-red-crystal;
    font-size: 3rem;
    padding-right: 10em;
  }
}
</style>
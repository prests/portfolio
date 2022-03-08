<template>
  <div :class="$style.experienceView">
    <h2 :class="$style.job">
      Software Engineer III 
      <a :class="$style.link" href="https://www.factset.com/" target="_blank">
        @ FactSet Research Systems
      </a>
    </h2>

    <p>July 2019 - Present</p>

    <div :class="$style.jobDescription">
      <ul>
        <li>
          Creating and maintaining core applications 
          for FactSet&#39;s Research Business Unit&#46; 
          These apps provided real-time news&#44; events&#44; 
          and signals to both Buy Side and Sell Side clients&#46;
        </li>
        <li>
          Managing an agile team to create stable and shareable UI components 
          to improve sustainability across multiple FactSet applications&#46;
        </li>
        <li>
          Designed API endpoints to fetch news and events 
          for internal and external clients&#46;
        </li>
        <li>
          Migrated legacy code from Angular.js to Vue.js&#44; 
          increasing unit test coverage by
          utilizing Typescript over Javascript&#44;  
          and creating responsive applications&#46;
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ExperienceView',
})
</script>

<style lang="scss" module>
@use '~styles/colors';
@use '~styles/responsive';

.experienceView {
  display: flex;
  flex-direction: column;
  color: colors.$grey;
  height: auto;
  width: 55%;
  margin: 2em auto;
  font-size: 2rem;

  @include responsive.responsive(map-get(responsive.$breakpoints, lg)) {
    font-size: 1.6rem;
  }

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    width: 90%;
    margin: 2em auto;
    flex-direction: column;
  }
}

.job {
  color: colors.$white;
  margin-bottom: 0em;
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

.jobDescription {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include responsive.responsive(map-get(responsive.$breakpoints, md)) {
    margin-right: auto;
  }

  ul {
    margin: 0;
  }

  li {
    text-align: left;
    padding: 0.1em 0 0.1em 0.5em;
    margin-right: 0.5em;
    flex-basis: 45%;

    @include responsive.responsive(map-get(responsive.$breakpoints, sm)) {
      flex-basis: 100%;
      margin: 0 auto;
    }
  }

  li::marker {
    content: '\21A0';
    color: colors.$orange-red-crystal;
    font-size: 2.5rem;
  }
}
</style>

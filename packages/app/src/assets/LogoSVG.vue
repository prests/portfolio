<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 83 173.354"
    :class="$style.container"
  >
    <g id="Group_2" data-name="Group 2" transform="translate(158 436.177)">
      <line
        id="Logo_Line_1"
        ref="line1"
        data-name="Line 1"
        y2="40"
        transform="translate(-156.5 -405.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_2"
        ref="line2"
        data-name="Line 2"
        y2="40"
        transform="translate(-116.5 -405.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_3"
        ref="line3"
        data-name="Line 3"
        y2="40"
        transform="translate(-76.5 -405.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_4"
        ref="line4"
        data-name="Line 4"
        y2="40"
        transform="translate(-76.5 -333.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_5"
        ref="line5"
        data-name="Line 5"
        y2="40"
        transform="translate(-116.5 -333.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_6"
        ref="line6"
        data-name="Line 6"
        y2="40"
        transform="translate(-156.5 -333.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_9"
        ref="line7"
        data-name="Line 9"
        x1="40"
        y2="29.469"
        transform="translate(-116.5 -293.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_15"
        ref="line8"
        data-name="Line 15"
        x1="40"
        y2="29.469"
        transform="translate(-156.5 -434.969)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_10"
        ref="line9"
        data-name="Line 10"
        x2="40"
        y2="29.469"
        transform="translate(-156.5 -293.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_16"
        ref="line10"
        data-name="Line 16"
        x2="40"
        y2="29.469"
        transform="translate(-116.5 -434.969)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_11"
        ref="line11"
        data-name="Line 11"
        x2="40"
        y2="32"
        transform="translate(-156.5 -365.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_12"
        ref="line12"
        data-name="Line 12"
        x2="40"
        y2="32"
        transform="translate(-116.5 -365.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_13"
        ref="line13"
        data-name="Line 13"
        x1="20"
        y2="16"
        transform="translate(-96.5 -365.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
      <line
        id="Logo_Line_14"
        ref="line14"
        data-name="Line 14"
        x1="20"
        y2="16"
        transform="translate(-156.5 -349.5)"
        fill="none"
        stroke="#ff4e43"
        stroke-width="5"
        :class="lineOpacity"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useCssModule } from 'vue';

export default defineComponent({
  name: 'LogoSVG',
  props: {
    isSplashScreen: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const { hideLine, showLine } = useCssModule();

    const lineOpacity = computed(() =>
      props.isSplashScreen ? hideLine : showLine
    );

    const line1 = ref<SVGLineElement>();
    const line2 = ref<SVGLineElement>();
    const line3 = ref<SVGLineElement>();
    const line4 = ref<SVGLineElement>();
    const line5 = ref<SVGLineElement>();
    const line6 = ref<SVGLineElement>();
    const line7 = ref<SVGLineElement>();
    const line8 = ref<SVGLineElement>();
    const line9 = ref<SVGLineElement>();
    const line10 = ref<SVGLineElement>();
    const line11 = ref<SVGLineElement>();
    const line12 = ref<SVGLineElement>();
    const line13 = ref<SVGLineElement>();
    const line14 = ref<SVGLineElement>();

    return {
      line1,
      line2,
      line3,
      line4,
      line5,
      line6,
      line7,
      line8,
      line9,
      line10,
      line11,
      line12,
      line13,
      line14,
      lineOpacity,
    };
  },
});
</script>

<style lang="scss" module>
.container {
  height: 100%;
  padding: 0 1em;
}

.showLine {
  opacity: 1;
}

.hideLine {
  opacity: 0;
}
</style>

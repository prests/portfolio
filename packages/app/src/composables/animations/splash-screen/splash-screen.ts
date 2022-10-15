import LogoSVG from '@assets/LogoSVG.vue';

export function getSplashScreen(logo: InstanceType<typeof LogoSVG>) {
  const opacityEasing = 'ease-in-out';

  const opacityOn = 1;
  const opacityOnDuration = 0.25;

  const opacityOff = 0;
  const opacityOffStart = 3.75;
  const opacityOffDuration = 0.5;

  const opacityOnSegments = [
    [
      logo.line1 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line2 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line3 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line4 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line5 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line6 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line7 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line8 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line9 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line10 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line11 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line12 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line13 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
    [
      logo.line14 as SVGLineElement,
      { opacity: opacityOn },
      { duration: opacityOnDuration, easing: opacityEasing },
    ],
  ];

  const opacityOffSegments = [
    [
      logo.line1 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line2 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line3 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line4 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line5 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line6 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line7 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line8 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line9 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line10 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line11 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line12 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line13 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
    [
      logo.line14 as SVGLineElement,
      { opacity: opacityOff },
      {
        duration: opacityOffDuration,
        at: opacityOffStart,
        easing: opacityEasing,
      },
    ],
  ] as any[];

  return {
    opacityOnSegments,
    opacityOffSegments,
  };
}

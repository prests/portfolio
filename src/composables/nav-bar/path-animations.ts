import gsap from "gsap";

export function useNavAnimations() {
  function focusRoute(name: string): void {
    gsap.to(
      `#path_${name}`,
      {
        duration: 0.5,
        backgroundImage:
          'linear-gradient(to left, #F7F7FF 0%, #FE5F55 100%)',
      }
    );
  }

  function blurRoute(name: string): void {
    gsap.to(
      `#path_${name}`,
      {
        duration: 0.5,
        backgroundImage: 'linear-gradient(to left, #F7F7FF 100%, #FE5F55 0%)',
      }
    );
  }

  function focusResume(): void {
    gsap.to('#resume', {duration: 0.5, backgroundColor: '#FE5F5515'});
  }

  function blurResume(): void {
    gsap.to('#resume', {duration: 0.5, backgroundColor: '#FE5F5500'});
  }

  return {
    blurResume,
    blurRoute,
    focusResume,
    focusRoute,
  }
}

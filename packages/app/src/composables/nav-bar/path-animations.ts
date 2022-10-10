import gsap from 'gsap';

export function useNavAnimations() {
  function focusRoute(name: string): void {
    gsap.to(`#path_${name}`, {
      duration: 0.5,
      backgroundImage: 'linear-gradient(to left, #F7F7FF 0%, #FE5F55 100%)',
    });
  }

  function blurRoute(name: string): void {
    gsap.to(`#path_${name}`, {
      duration: 0.5,
      backgroundImage: 'linear-gradient(to left, #F7F7FF 100%, #FE5F55 0%)',
    });
  }

  function focusButton(id: string): void {
    gsap.to(id, { duration: 0.5, backgroundColor: '#FE5F5540' });
  }

  function blurButton(id: string): void {
    gsap.to(id, { duration: 0.5, backgroundColor: '#FE5F5500' });
  }

  return {
    blurButton,
    blurRoute,
    focusButton,
    focusRoute,
  };
}

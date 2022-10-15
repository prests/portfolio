import { animate } from 'motion';

export function useNavAnimations() {
  function focusRoute(name: string): void {
    animate(
      `#path_${name}`,
      {
        backgroundImage: 'linear-gradient(to left, #F7F7FF 0%, #FE5F55 100%)',
      },
      { duration: 0.5 }
    );
  }

  function blurRoute(name: string): void {
    animate(
      `#path_${name}`,
      {
        backgroundImage: 'linear-gradient(to left, #F7F7FF 100%, #FE5F55 0%)',
      },
      { duration: 0.5 }
    );
  }

  function focusButton(id: string): void {
    animate(id, { backgroundColor: '#FE5F5540' }, { duration: 0.5 });
  }

  function blurButton(id: string): void {
    animate(id, { backgroundColor: '#FE5F5500' }, { duration: 0.5 });
  }

  return {
    blurButton,
    blurRoute,
    focusButton,
    focusRoute,
  };
}

import { animate } from 'motion';

export function useNavAnimations() {
  function focusRoute(name: string): void {
    const el = document.getElementById(`path_${name}`) as HTMLElement;

    animate(
      (progress) => {
        el.style.backgroundImage = `linear-gradient(to left, #575755 ${
          100 - progress * 100
        }%, #FE5F55 ${progress * 100}%)`;
      },
      { duration: 0.5 }
    );
  }

  function blurRoute(name: string): void {
    const el = document.getElementById(`path_${name}`) as HTMLElement;

    animate(
      (progress) => {
        el.style.backgroundImage = `linear-gradient(to left, #F7F7FF ${
          progress * 100
        }%, #FE5F55 ${100 - progress * 100}%)`;
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

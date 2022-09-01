import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function usePaths() {
  const router = useRouter();
  const paths = ref([
    {
      id: 'about',
      path: '/about',
    },
    {
      id: 'experience',
      path: '/experience',
    },
    {
      id: 'contact',
      path: '/contact',
    },
  ]);

  function changeRoute(path: string, animationCallback?: Function): void {
    if (path === '/contact') {
      sendEmail();
      return;
    }

    if (animationCallback) {
      animationCallback();
    }

    if (path !== router.currentRoute.value.path) {
      router.push(path);
    }
  }

  const openResume = (): void => {
    window.open('Shayne Preston Resume.pdf', '_blank');
  };

  const sendEmail = (): void => {
    window.open('mailto:shayne.preston@protonmail.com');
  };

  return {
    changeRoute,
    openResume,
    paths,
    sendEmail,
  };
}

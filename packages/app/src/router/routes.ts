import About from '@views/about/About.vue';
import ContactCard from '@views/contact-card/ContactCard.vue';
import Experience from '@views/experience/Experience.vue';
import Home from '@views/home/Home.vue';
import PageNotFound from '@views/page-not-found/PageNotFound.vue';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    name: 'Experience',
    path: '/experience',
    component: Experience,
  },
  {
    name: 'Contact Card',
    path: '/contact-card',
    component: ContactCard,
  },
  {
    name: 'PageNotFound',
    path: '/:catchall(.*)',
    component: PageNotFound,
  },
];

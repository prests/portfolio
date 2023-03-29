import About from '@pages/about/AboutPage.vue';
import ContactCard from '@pages/contact/ContactPage.vue';
import Experience from '@pages/experience/ExperiencePage.vue';
import Home from '@pages/home/HomePage.vue';
import PageNotFound from '@pages/page-not-found/PageNotFound.vue';

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
    name: 'Contact Page',
    path: '/contact',
    component: ContactCard,
  },
  {
    name: 'PageNotFound',
    path: '/:catchall(.*)',
    component: PageNotFound,
  },
];

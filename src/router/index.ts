import { createWebHistory, createRouter } from "vue-router";

import About from '@views/about/About.vue';
import Experience from '@views/experience/Experience.vue';
import Home from "@views/home/Home.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
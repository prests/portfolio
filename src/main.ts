import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import App from './App.vue'

import {setupRouter} from './router';

const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
});
const router = setupRouter(pinia);

const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app');

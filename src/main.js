import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from '@/router';
import './assets/styles/main.css';
// langs
import ru from './locales/ru.json';
import kk from './locales/kk.json';
import en from './locales/en.json';

const storedLang = localStorage.getItem('lang') || 'kk';
const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: storedLang,
	messages: {
		ru,
		kk,
		en,
	},
});

createApp(App).use(router).use(i18n).mount('#app');

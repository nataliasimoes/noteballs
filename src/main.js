import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import i18n from '@/lang' 

createApp(App).use(i18n).use(router).use(createPinia()).mount('#app')

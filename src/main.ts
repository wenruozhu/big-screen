import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './assets/scss/reset.scss'
import './assets/scss/common.scss'
import './assets/css/animate.css'
import "@/api/interceptor";

import ComponentInstall from '@/components/commonInstall'
createApp(App).use(router).use(ComponentInstall).mount('#app')

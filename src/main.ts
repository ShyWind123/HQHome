import { createApp } from 'vue'
import './style/style.css'
import 'ant-design-vue/dist/reset.css'
import 'animate.css';

import App from './App.vue'
import router from '../router/router.js'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(Antd).use(pinia).mount('#app')
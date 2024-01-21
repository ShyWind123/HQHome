import { createApp } from 'vue'
import './style/style.css'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from '../router/router.js'
import Antd from 'ant-design-vue'


createApp(App).use(router).use(Antd).mount('#app')
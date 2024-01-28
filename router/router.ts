import { createRouter, createWebHistory } from "vue-router";

import Home from "../src/views/Home.vue"
import { RouterOptions } from "vue-router";


const routerConfig: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/HQHome'
    },
    {
      path: '/HQHome',
      name: 'Home',
      component: Home
    }
  ]
}

const router = createRouter(routerConfig)

export default router
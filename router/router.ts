import { createRouter, createWebHistory } from "vue-router";

import Home from "../src/views/Home.vue"

const routes = [
  {
    path: '/',
    redirect: '/MyHome'
  },
  {
    path: '/MyHome',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
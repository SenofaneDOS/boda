import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Maria & Steafano" */ '@/pages/HomePage.vue')
  },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router

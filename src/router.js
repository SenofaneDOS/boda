import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'home',
    component: () => import(/*webpackChunkName: "Maria & Steafano"*/ '@/pages/HomePage.vue')
    },
    {
    path: '/cerimonia',
    name: 'cerimonia',
    component: () => import(/*webpackChunkName: "cerimonia"*/ '@/pages/CerimoniaPage.vue')
    },
    {
    path: '/ricevimento',
    name: 'ricevimento',
    component: () => import(/*webpackChunkName: "ricevimento"*/ '@/pages/RicevimentoPage.vue')
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
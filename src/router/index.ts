import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'login',
    component: Home
  },
  {
    path: '/Goodspage',
    name: 'Goodspage',
    component: () => import('../views/Goodspage.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Seckillgoods',
    name: 'Seckillgoods',
    component: () => import('../views/Seckillgoods.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

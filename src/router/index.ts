import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout } from '../layouts/index'
import { asyncRouterMap } from './router.config'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children: asyncRouterMap
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/user/Register.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

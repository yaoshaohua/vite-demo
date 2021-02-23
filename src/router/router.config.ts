import { RouteRecordRaw } from 'vue-router'
const asyncRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/show/aciel',
    name: 'Aciel',
    component: () => import('../views/show/Aciel.vue'),
    meta: { title: '蔚山猪猪' }
  },
  {
    path: '/show/hammington',
    name: 'Hammington',
    component: () => import('../views/show/Hammington.vue'),
    meta: { title: '威本' }
  },
  {
    path: '/summary/2020',
    name: '2020',
    component: () => import('../views/summary/2020.vue'),
    meta: { title: 'summary' }
  }
]
export { asyncRouterMap }

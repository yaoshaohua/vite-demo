import { RouteRecordRaw } from 'vue-router'
const asyncRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/list',
    name: 'Page1',
    component: () => import('../views/dashboard/List.vue'),
    meta: { title: '蔚山猪猪' }
  },
  {
    path: '/list2',
    name: 'Page2',
    component: () => import('../views/dashboard/List.vue'),
    meta: { title: '威本' }
  }
]
export { asyncRouterMap }

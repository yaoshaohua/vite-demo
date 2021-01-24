import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: () => import('../views/page1/List.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

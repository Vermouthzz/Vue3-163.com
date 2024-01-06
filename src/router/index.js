import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/goods',
      component: () => import('@/views/GoodsDetail/index.vue')
    }
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index'

export const pages = [
  {
    path: '/test',
    component: () => import('@/views/test'),
    meta: {
      name: 'test'
    }
  },
  {
    path: '/init',
    component: () => import('@/views/init'),
    meta: {
      name: '初始化'
    }
  },
  {
    path: '/createRenderer',
    component: () => import('@/views/createRenderer/index'),
    meta: {
      name: 'createRenderer'
    }
  },
  {
    path: '/animation',
    component: () => import('@/views/animation'),
    meta: {
      name: 'animation'
    }
  }
]

export const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/init',
    children: pages
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app) {
  app.use(router)
}

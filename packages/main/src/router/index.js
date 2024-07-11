import { createRouter, createWebHashHistory } from 'vue-router'
import { setupGuard } from './guard'

const constantRoutes = []
constantRoutes._map = keyBy(constantRoutes, 'path')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})
export function addRouter(routes) {
  routes.forEach((route) => {
    if (!router.hasRoute(route.name)) router.addRoute(route)
    if (route.children) addRouter(route.children)
  })
}

export function resetRouter(routes = constantRoutes) {
  router.getRoutes().forEach((route) => {
    if (!constantRoutes._map[route.path]) {
      router.removeRoute(route.name)
    }
  })
  addRouter(routes)
}

export const setupRouter = (app) => {
  setupGuard(router)
  app.use(router)
}

export default router

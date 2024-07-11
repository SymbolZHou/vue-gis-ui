import { createRouter, createWebHashHistory } from 'vue-router'
import { routes as defaultRoutes } from './routes'
import { setupGuard } from './guard'

export const constantRoutes = []

constantRoutes._map = keyBy(constantRoutes, 'path')

export const router = createRouter({
  history: createWebHashHistory(),
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

export function setupRouter(app) {
  setupGuard(router)
  app.use(router)
}

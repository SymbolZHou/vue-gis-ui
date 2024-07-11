import { createDiscreteApi } from 'naive-ui'
import { resetRouter } from '@/router'
const { loadingBar } = createDiscreteApi(['loadingBar'])
import { routes as _routes } from '@/router/routes'
import { useRouterStore } from '@/stores'

/**
 * @description 路由守卫
 */

function interceptorLogin(router) {
  router.beforeEach(async (to, from, next) => {
    let routerStore = useRouterStore()

    if (!routerStore.routes.length) {
      await routerStore.getRouters()
      routerMap(routerStore.routes)
      filterRoutes(routerStore.routes)

      routerStore.routes.push({
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'NotFound'
      })

      resetRouter(routerStore.routes)

      return next({ ...to, replace: true })
    } else {
      return next()
    }
  })
}

export function setupGuard(router) {
  router.beforeEach(async (to, from, next) => {
    loadingBar.start()
    next()
  })

  interceptorLogin(router)

  router.afterEach(() => {
    loadingBar.finish()
  })
}

import path from 'path-browserify'

function routerMap(routes, baseUrl = '/') {
  routes.forEach((route) => {
    if (get(_routes._map, [route.name, 'component'])) {
      route.component = get(_routes._map, [route.name, 'component'])
    }

    if (route.path !== '*') route.path = path.resolve(baseUrl, route.path)

    if (route.children) {
      routerMap(route.children, route.path)
    }
  })
}

function filterRoutes(routes) {
  routes.forEach((route) => {
    if (route.children) {
      route.redirect =
        !route.children[0].redirect || route.children[0].redirect == 'noRedirect'
          ? route.children[0].path
          : route.children[0].redirect
    }

    if (route.children) {
      filterRoutes(route.children)
    }
  })
}

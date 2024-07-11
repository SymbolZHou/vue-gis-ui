import {isExternal} from "./validate"
import path from "path-browserify"

export function filterRoutes(routes, baseUrl = "/") {
  return routes.map(route => {
    if (route.path !== "*" && !isExternal(route.path)) route.path = path.resolve(baseUrl, route.path)
    if (route.children) route.children = filterRoutes(route.children, route.path)
    if (!route.redirect) {
      if (route.children) {
        route.redirect = route.children[0].redirect || route.children[0].path
      }
    }
    return route
  })
}

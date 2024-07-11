const modules = import.meta.glob('./*.js', {
  eager: true,
  import: 'default'
})

export const routes = Object.keys(modules).reduce((target, path) => {
  let item = modules[path]
  target.push(item)
  return target
}, [])

import { flatMap } from 'lodash-es'

routes._data = flatMap(routes, function flatFn(n) {
  if (n.children) return [n, ...flatMap(n.children, flatFn)]
  return n
})

routes._map = keyBy(routes._data, 'name')

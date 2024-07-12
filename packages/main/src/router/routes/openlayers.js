import Layout from '@vue-demo/components/Layout'
import { routes } from '@vue-demo/packages/openlayers/src/router/routes'

export default [
  {
    path: '/openlayers',
    name: 'openlayers',
    component: markRaw(Layout),
    children: routes
  }
]

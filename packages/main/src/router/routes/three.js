import Layout from '@/Layout'
import { routes } from '@vue-demo/packages/threejs/src/router/routes'

routes.forEach((item) => {
  if (item.isLayout) {
    item.component = undefined
  }
})

export default {
  path: '/three',
  name: 'three',
  component: markRaw(Layout),
  children: routes,
  meta: {
    title: 'threejs'
  }
}

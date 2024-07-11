import layout from '@/Layout'

export default {
  path: '/geometry',
  name: 'geometry',
  component: markRaw(layout),
  isLayout: true,
  meta: {
    name: '几何体'
  },
  children: [
    {
      path: 'vertexIndex',
      name: 'vertexIndex',
      component: () => import('../../views/geometry/vertexIndex/index'),
      meta: {
        name: '顶点索引'
      }
    },
    {
      path: 'boxGeometry',
      name: 'boxGeometry',
      component: () => import('../../views/geometry/boxGeometry/index'),
      meta: {
        name: '正方体'
      }
    },
    {
      path: 'normal',
      name: 'normal',
      component: () => import('../../views/geometry/normal/index'),
      meta: {
        name: '法线'
      }
    },
    {
      path: 'tubeGeometry',
      name: 'tubeGeometry',
      component: () => import('../../views/geometry/tubeGeometry/index'),
      meta: {
        name: '管道缓冲几何体'
      }
    },
    {
      path: 'latheGeometry',
      name: 'latheGeometry',
      component: () => import('../../views/geometry/latheGeometry/index'),
      meta: {
        name: '车削缓冲几何体'
      }
    },
    {
      path: 'shapeGeometry',
      name: 'shapeGeometry',
      component: () => import('../../views/geometry/shapeGeometry/index'),
      meta: {
        name: '形状缓冲几何体'
      }
    },
    {
      path: 'extrudeGeometry',
      name: 'extrudeGeometry',
      component: () => import('../../views/geometry/extrudeGeometry/index'),
      meta: {
        name: '挤压缓冲几何体'
      }
    },
    {
      path: 'edgesGeometry',
      name: 'edgesGeometry',
      component: () => import('../../views/geometry/edgesGeometry/index'),
      meta: {
        name: '边缘几何体'
      }
    }
  ]
}

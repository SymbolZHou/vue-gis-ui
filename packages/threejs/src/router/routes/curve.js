import layout from '@/Layout'

export default [
  {
    path: '/curve',
    name: 'curve',
    meta: {
      name: '曲线'
    },
    children: [
      {
        path: 'arcVertex',
        name: 'arcVertex',
        component: () => import('../../views/curve/arcVertex/index'),
        meta: {
          name: '圆弧顶点'
        }
      },
      {
        path: 'setFromPoints',
        name: 'setFromPoints',
        component: () => import('../../views/curve/setFromPoints/index'),
        meta: {
          name: 'setFromPoints'
        }
      },
      {
        path: 'arcCurve',
        name: 'arcCurve',
        component: () => import('../../views/curve/arcCurve/index'),
        meta: {
          name: '弧线'
        }
      },
      {
        path: 'catmullRomCurve3',
        name: 'catmullRomCurve3',
        component: () => import('../../views/curve/catmullRomCurve3/index'),
        meta: {
          name: 'catmullRomCurve3'
        }
      },
      {
        path: 'bezierCurve',
        name: 'bezierCurve',
        component: () => import('../../views/curve/bezierCurve/index'),
        meta: {
          name: '贝塞尔曲线'
        }
      },
      {
        path: 'curvePath',
        name: 'curvePath',
        component: () => import('../../views/curve/curvePath/index'),
        meta: {
          name: '曲线路径'
        }
      }
    ]
  }
]

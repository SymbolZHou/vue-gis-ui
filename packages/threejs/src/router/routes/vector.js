import layout from '@/Layout'

export default {
  path: '/vector',
  name: 'vector',
  component: markRaw(layout),
  isLayout: true,
  meta: {
    name: '向量'
  },
  children: [
    {
      path: 'length',
      name: 'length',
      component: () => import('../../views/vector/length/index'),
      meta: {
        name: '长度'
      }
    },
    {
      path: 'normalize',
      name: 'normalize',
      component: () => import('../../views/vector/normalize/index'),
      meta: {
        name: '归一化'
      }
    },
    {
      path: 'cameraTranslate',
      name: 'cameraTranslate',
      component: () => import('../../views/vector/cameraTranslate/index'),
      meta: {
        name: '相机沿着视线方向移动'
      }
    },
    {
      path: 'dot',
      name: 'dot',
      component: () => import('../../views/vector/dot/index'),
      meta: {
        name: '点乘'
      }
    },
    {
      path: 'direction',
      name: 'direction',
      component: () => import('../../views/vector/direction/index'),
      meta: {
        name: '判断方向'
      }
    },
    {
      path: 'cross',
      name: 'cross',
      component: () => import('../../views/vector/cross/index'),
      meta: {
        name: '叉乘'
      }
    },
    {
      path: 'matrix',
      name: 'matrix',
      component: () => import('../../views/vector/matrix/index'),
      meta: {
        name: '矩阵'
      }
    }
  ]
}

import layout from '@/Layout'

export default {
  path: '/texture',
  name: 'texture',
  component: markRaw(layout),
  isLayout: true,
  meta: {
    name: '纹理贴图'
  },
  children: [
    {
      path: 'uv',
      name: 'uv',
      component: () => import('../../views/texture/uv/index'),
      meta: {
        name: '顶点uv'
      }
    },
    {
      path: 'circle',
      name: 'circle',
      component: () => import('../../views/texture/circle/index'),
      meta: {
        name: '圆形贴图'
      }
    },
    {
      path: 'repeat',
      name: 'repeat',
      component: () => import('../../views/texture/repeat/index'),
      meta: {
        name: '阵列'
      }
    },
    {
      path: 'uvAnimation',
      name: 'uvAnimation',
      component: () => import('../../views/texture/uvAnimation/index'),
      meta: {
        name: 'uv动画'
      }
    },
    {
      path: 'canvasAnimation',
      name: 'canvasAnimation',
      component: () => import('../../views/texture/canvasAnimation/index'),
      meta: {
        name: 'canvas纹理'
      }
    }
  ]
}

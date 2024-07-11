export const matrix = [
  {
    path: '平移',
    component: () => import('@/views/matrix/平移/index'),
    meta: {
      name: '平移'
    }
  },
  {
    path: '旋转',
    component: () => import('@/views/matrix/旋转/index'),
    meta: {
      name: '旋转'
    }
  },
  {
    path: '缩放',
    component: () => import('@/views/matrix/缩放/index'),
    meta: {
      name: '缩放'
    }
  },
  {
    path: '四维矩阵',
    component: () => import('@/views/matrix/四维矩阵/index'),
    meta: {
      name: '四维矩阵'
    }
  },
  {
    path: '视图矩阵',
    component: () => import('@/views/matrix/视图矩阵/index'),
    meta: {
      name: '视图矩阵'
    }
  },
  {
    path: '矩阵结合',
    component: () => import('@/views/matrix/矩阵结合/index'),
    meta: {
      name: '矩阵结合'
    }
  },
  {
    path: 'camera',
    component: () => import('@/views/matrix/camera/index'),
    meta: {
      name: 'camera'
    }
  }
]

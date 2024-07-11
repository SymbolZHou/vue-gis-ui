export const basis = [
  {
    path: '圆形',
    component: () => import('@/views/圆形/index'),
    meta: {
      name: '圆形'
    }
  },
  {
    path: '多点',
    component: () => import('@/views/多点/index'),
    meta: {
      name: '多点'
    }
  },
  {
    path: '三角形',
    component: () => import('@/views/三角形/index'),
    meta: {
      name: '三角形'
    }
  },
  {
    path: '线',
    component: () => import('@/views/线/index'),
    meta: {
      name: '线'
    }
  },
  {
    path: '三角带',
    component: () => import('@/views/三角带/index'),
    meta: {
      name: '三角带'
    }
  },
  {
    path: '三角扇',
    component: () => import('@/views/三角扇/index'),
    meta: {
      name: '三角扇'
    }
  },
  {
    path: '鼠标绘制线',
    component: () => import('@/views/鼠标绘制线/index'),
    meta: {
      name: '鼠标绘制线'
    }
  }
]

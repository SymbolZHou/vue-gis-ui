import layout from '@/Layout'

export default [
  {
    path: '/openlayers',
    name: 'openlayers',
    component: markRaw(layout)
  },
  {
    path: 'init',
    name: 'init',
    component: () => import('../../views/init/index'),
    meta: {
      title: '初始化'
    }
  },
  {
    path: 'toggleLayer',
    name: 'toggleLayer',
    component: () => import('../../views/toggleLayer/index'),
    meta: {
      title: '图层切换'
    }
  },
  {
    path: 'zoom',
    name: 'zoom',
    component: () => import('../../views/zoom/index'),
    meta: {
      title: '缩放控件'
    }
  },
  {
    path: 'scaleLine',
    name: 'scaleLine',
    component: () => import('../../views/scaleLine/index'),
    meta: {
      title: '比例尺控件'
    }
  },
  {
    path: 'contextmenu',
    name: 'contextmenu',
    component: () => import('../../views/contextmenu/index'),
    meta: {
      title: '右键菜单控件'
    }
  },
  {
    path: 'compass',
    name: 'compass',
    component: () => import('../../views/compass/index'),
    meta: {
      title: '指北针控件'
    }
  },
  {
    path: 'area',
    name: 'area',
    component: () => import('../../views/area/index'),
    meta: {
      title: '省市区下钻联动'
    }
  },
  {
    path: 'ship',
    name: 'ship',
    component: () => import('../../views/ship/index'),
    meta: {
      title: '模仿船讯网'
    }
  }
]

import layout from '@/Layout'

export default {
  path: '/',
  name: 'basic',
  component: markRaw(layout),
  isLayout: true,
  meta: {
    title: 'basic'
  },
  children: [
    {
      path: 'granary',
      name: 'granary',
      component: () => import('../../views/granary/index'),
      meta: {
        title: '粮仓'
      }
    },
    {
      path: 'phone',
      name: 'phone',
      component: () => import('../../views/phone/index'),
      meta: {
        title: '手机'
      }
    },
    {
      path: 'car',
      name: 'car',
      component: () => import('../../views/car/index'),
      meta: {
        title: '汽车'
      }
    },
    {
      path: 'earth',
      name: 'earth',
      component: () => import('../../views/earth/index'),
      meta: {
        title: '地球'
      }
    },
    {
      path: 'firstPersonControls',
      name: 'firstPersonControls',
      component: () => import('../../views/firstPersonControls/index'),
      meta: {
        title: '第一人称控制器'
      }
    },
    {
      path: 'cannon',
      name: 'cannon',
      component: () => import('../../views/cannon/init/index'),
      meta: {
        title: '物理'
      }
    },
    {
      path: 'angle',
      name: 'angle',
      meta: {
        title: '姿态角度'
      },
      children: [
        {
          path: 'euler',
          name: 'euler',
          component: () => import('../../views/angle/euler/index'),
          meta: {
            title: '欧拉角'
          }
        },
        {
          path: 'quaternion',
          name: 'quaternion',
          component: () => import('../../views/angle/quaternion/index'),
          meta: {
            title: '四元数'
          }
        }
      ]
    },
    {
      path: 'animation',
      name: 'animation',
      component: layout,
      meta: {
        title: '动画'
      },
      children: [
        {
          path: 'keyframeTrack',
          name: 'keyframeTrack',
          component: () => import('../../views/animation/keyframeTrack/index'),
          meta: {
            title: '关键帧动画'
          }
        }
      ]
    }
  ]
}

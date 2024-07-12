import { defineStore } from 'pinia'
import { getRouters } from '@vue-demo/api/common'
import { createDiscreteApi } from 'naive-ui'
import { flatMap } from 'lodash-es'
let { notification } = createDiscreteApi(['notification'])

export const useRouterStore = defineStore('router', {
  state() {
    return {
      routes: []
    }
  },
  actions: {
    async getRouters() {
      let res = await getRouters({
        system: 'openlayers'
      })

      if (isEmpty(res.data)) {
        notification.error({
          content: '提示',
          meta: '当前账号无权限,请联系管理员'
        })
        throw new Error('当前账号无权限,请联系管理员')
      }
      let data = res.data.filter((item) => item.name == 'openlayers')

      data._data = flatMap(data, function flatFn(n) {
        if (n.children) return [n, ...flatMap(n.children, flatFn)]
        return n
      })

      data._map = keyBy(data._data, 'name')

      this.routes = data
      return res
    }
  }
})

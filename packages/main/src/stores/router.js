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
      let res = await getRouters()
      if (isEmpty(res.data)) {
        notification.error({
          content: '提示',
          meta: '当前账号无权限,请联系管理员'
        })
        throw new Error('当前账号无权限,请联系管理员')
      }

      res.data._data = flatMap(res.data, function flatFn(n) {
        if (n.children) return [n, ...flatMap(n.children, flatFn)]
        return n
      })

      res.data._map = keyBy(res.data._data, 'name')

      this.routes = res.data
      return res
    }
  }
})

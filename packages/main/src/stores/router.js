import { defineStore } from 'pinia'
import { getRouters } from '@vue-demo/api/common'
import { createDiscreteApi } from 'naive-ui'

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
      this.routes = res.data
      if (isEmpty(res.data)) {
        notification.error({
          content: '提示',
          meta: '当前账号无权限,请联系管理员'
        })
        throw new Error('当前账号无权限,请联系管理员')
      }
      return res
    }
  }
})

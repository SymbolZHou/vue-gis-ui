import { defineStore } from 'pinia'
import { login, getInfo } from '@EM_CITY/api/user'
import { encrypt } from '@EM_CITY/utils/jsencrypt'
import { useSettingStore } from './setting'
import router from '@/router'
import { useRouterStore } from './router'

export const useUserStore = defineStore('user', {
  state() {
    return {
      token: '',
      roles: [],
      permissions: [],
      user: {}
    }
  },
  actions: {
    async login(data) {
      let settingStore = useSettingStore()

      const res = await login({
        ...data,
        password: encrypt(data.password, settingStore.publicKey)
      })
      this.token = res.token

      return res
    },
    exit() {
      let routerStore = useRouterStore()
      routerStore.$reset()
      this.token = ''
      router.replace('/login')
    },
    async getInfo() {
      let res = await getInfo()
      this.roles = res.roles
      this.permissions = res.permissions
      this.user = res.user

      this.permissions._map = this.permissions.reduce((target, item) => {
        target[item] = item
        return target
      }, {})
    }
  },
  persist: {
    paths: ['token']
  }
})

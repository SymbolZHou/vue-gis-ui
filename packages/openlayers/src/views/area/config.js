import { defineStore } from 'pinia'

import { getGeoJSON } from '@vue-demo/api/common'

export const useStore = defineStore('area', {
  state() {
    return {}
  },
  actions: {
    async getGeoJSON(data) {
      let res = await getGeoJSON(data)
      return res.data
    }
  }
})

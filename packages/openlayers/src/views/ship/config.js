import { defineStore } from 'pinia'

import { getBoat } from '@vue-demo/api/boat'

export const useStore = defineStore('boat', {
  state() {
    return {
      boat: []
    }
  },
  actions: {
    async getBoat(data) {
      let res = await getBoat(data)
      this.boat = res.data.data
      return res.data
    }
  }
})

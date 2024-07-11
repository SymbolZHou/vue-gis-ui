import { ref } from 'vue'
import { isCancel } from 'axios'
export function loading({ options, store }) {
  let _store = {}

  if (options.actions) {
    const $loading = {}
    Object.keys(options.actions).forEach((actionKey) => {
      const originAction = store[actionKey]
      const loading = ref(false)
      const action = function (...args) {
        const rtn = originAction.apply(this, args)
        if (rtn instanceof Promise) {
          return new Promise((resolve, reject) => {
            loading.value = true
            rtn
              .then((res) => {
                loading.value = false
                resolve(res)
              })
              .catch((err) => {
                if (!isCancel(err)) {
                  loading.value = false
                }
                reject(err)
              })
          })
        } else {
          return rtn
        }
      }
      _store[actionKey] = action
      $loading[actionKey] = loading
    })
    _store.$loading = $loading

    return _store
  }
}

import axios from 'axios'

const isFunction = (fn) => {
  return typeof fn === 'function'
}

export const useCancelToken = () => {
  let stack = []

  const add = (cancel) => {
    if (stack.includes(cancel)) return
    stack.push(cancel)
  }

  const cancel = () => {
    while (stack.length) {
      let cancel = stack.shift()
      if (isFunction(cancel)) cancel()
    }
  }

  const del = (cancel) => {
    let i = stack.indexOf(cancel)
    if (i == -1) return

    stack.splice(i, 1)
  }

  const clear = () => {
    stack = []
  }
  return {
    add,
    cancel,
    stack,
    del,
    clear
  }
}

export function cancelToken({ store, options }) {
  if (!options.cancelOptions) return

  let _store = {}

  let { white } = options.cancelOptions

  if (options.actions) {
    let $cancelToken = {}

    Object.keys(options.actions).forEach((actionKey) => {
      if (white.includes(actionKey)) {
        let _cancelToken = ($cancelToken[actionKey] = useCancelToken())
        let originAction = store[actionKey]
        const action = function (...args) {
          _cancelToken.cancel()
          let { token, cancel } = axios.CancelToken.source()
          _cancelToken.add(cancel)

          let rtn = originAction.apply(this, args.length ? [...args, { token }] : [{}, { token }])

          if (rtn instanceof Promise) {
            return new Promise((resolve, reject) => {
              rtn
                .then(resolve)
                .catch(reject)
                .finally(() => {
                  _cancelToken.del(cancel)
                })
            })
          } else {
            return rtn
          }
        }

        _store[actionKey] = action
      }
    })
    _store.$cancelToken = $cancelToken
    return _store
  }
}

import {createDiscreteApi} from "naive-ui"
const {dialog} = createDiscreteApi(["dialog"])

export function handleInterceptorToken(instance, options = {}) {
  let isDialog = false

  instance.interceptors.request.use(config => {
    if (config.noToken) return config

    let {token} = options.config()

    config.headers.Authorization = "Bearer " + token

    return config
  })
  instance.interceptors.response.use(async response => {
    let {exit} = options.config()

    if (!response) return Promise.reject(response)

    if (response.data.code === 401) {
      if (isDialog) return Promise.reject(response.data.msg)

      await new Promise(resolve => {
        let d = dialog.warning({
          title: "提示",
          content: "登录过期, 请重新登录 ",
          positiveText: "确定",
          closeOnEsc: false,
          closable: false,
          maskClosable: false,
          onPositiveClick: () => resolve(d)
        })
        isDialog = true
      })
      exit()
      isDialog = false

      return Promise.reject(response.data.msg)
    }

    return response
  }, undefined)
}

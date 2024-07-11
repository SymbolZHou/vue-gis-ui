const isShow = response => response.data.code !== 200

import {createDiscreteApi} from "naive-ui"
const {notification} = createDiscreteApi(["notification"])

const showMessage = response => {
  if (isShow(response)) {
    notification.error({
      content: "请求失败",
      meta: response.data.msg
    })
    return false
  }

  return true
}

// 处理响应状态
export function handleInterceptorState(instance) {
  instance.interceptors.response.use(response => {
    if (response.config.noHandleResponse) {
      return response
    }
    // if (response.config.noHandleCode) {
    //   return response.data
    // }

    showMessage(response)

    return response.data
  })
}

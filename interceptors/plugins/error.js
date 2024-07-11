import {errorStatus} from "../config"

export function handleResponseError(instance) {
  instance.interceptors.response.use(undefined, error => {
    let {response} = error
    if (!response) {
      ElNotification({
        type: "error",
        title: "请求失败 ",
        message: "请求超时"
      })
      return Promise.reject(error)
    }
    let errorMessage = errorStatus[response.status]

    if (errorMessage) {
      if (/^5/.test(response.status)) {
        errorMessage += `; 状态码: ${response.status},请联系管理员`
      }
      ElNotification({
        type: "error",
        title: "请求失败",
        message: errorMessage
      })
    }
    return Promise.reject(error)
  })
}

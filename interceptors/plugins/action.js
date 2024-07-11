import {createDiscreteApi} from "naive-ui"
const {dialog, message} = createDiscreteApi(["dialog", "message"])

// 增加 / 删除 请求确认
export function handleInterceptorAction(instance) {
  instance.interceptors.request.use(async config => {
    let {action} = config

    if (!get(action, "confirm")) return config

    try {
      await new Promise((resolve, reject) => {
        dialog.warning({
          title: "提示",
          content: "你确定？",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: resolve,
          onNegativeClick: reject,
          content: `确定${action.text}?`
        })
      })
      return config
    } catch (err) {
      return new Promise(() => {})
    }
  })

  instance.interceptors.response.use(response => {
    let {config, data} = response
    if (!config.action) return response
    if (config.action.text) {
      message.create(config.action.text + " " + data.msg, {
        type: data.code == 200 ? "success" : "error"
      })
    }

    if (data.code !== 200) return Promise.reject({text: config.action.text + " " + data.msg})

    return response
  })
}

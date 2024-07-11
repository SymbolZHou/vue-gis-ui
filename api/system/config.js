import {request} from "@/utils/request"

// 查询参数列表
export function getList(data) {
  return request({
    url: "/system/config/list",
    method: "get",
    params: data
  })
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: "/system/config/" + configId,
    method: "get"
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: "/system/config/configKey/" + configKey,
    method: "get"
  })
}

// 新增参数配置
export function add(data) {
  return request({
    url: "/system/config",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改参数配置
export function update(data) {
  return request({
    url: "/system/config",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除参数配置
export function remove(configId) {
  return request({
    url: "/system/config/" + configId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: "/system/config/refreshCache",
    method: "delete"
  })
}

export function exportList() {
  return request({
    url: "/system/config/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}

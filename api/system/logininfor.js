import {request} from "@/utils/request"

// 查询登录日志列表
export function getList(data) {
  return request({
    url: "/monitor/logininfor/list",
    method: "get",
    params: data
  })
}

// 删除登录日志
export function remove(infoId) {
  return request({
    url: "/monitor/logininfor/" + infoId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

// 解锁用户登录状态
export function unlockLogininfor(userName) {
  return request({
    url: "/monitor/logininfor/unlock/" + userName,
    method: "get",
    action: {
      text: "解锁",
      confirm: true
    }
  })
}
// 查询个人登录日志列表
export function listPersonLog(params) {
  return request({
    url: "/monitor/logininfor/listPersonLog",
    method: "get",
    params
  })
}
// 清空登录日志
export function clear() {
  return request({
    url: "/monitor/logininfor/clean",
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}
export function exportList() {
  return request({
    url: "/monitor/logininfor/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}

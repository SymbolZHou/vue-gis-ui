import {request} from "@/utils/request"

// 查询操作日志列表
export function getList(data) {
  return request({
    url: "/monitor/operlog/list",
    method: "get",
    params: data
  })
}

// 删除操作日志
export function remove(operId) {
  return request({
    url: "/monitor/operlog/" + operId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

// 清空操作日志
export function clear() {
  return request({
    url: "/monitor/operlog/clean",
    method: "delete",
    action: {
      text: "清空",
      confirm: true
    }
  })
}

export function exportList() {
  return request({
    url: "/monitor/operlog/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}

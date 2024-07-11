import {request} from "@/utils/request"

// 查询在线用户列表
export function getList(data) {
  return request({
    url: "/monitor/online/list",
    method: "get",
    params: data
  })
}

// 强退用户
export function forceLogout(tokenId) {
  return request({
    url: "/monitor/online/" + tokenId,
    method: "delete",
    action: {
      text: "强退",
      confirm: true
    }
  })
}

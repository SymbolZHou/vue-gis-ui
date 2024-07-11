import {request} from "@/utils/request"

// 查询公告列表
export function getList(data) {
  return request({
    url: "/system/notice/list",
    method: "get",
    params: data
  })
}

// 查询公告详细
export function getNotice(noticeId) {
  return request({
    url: "/system/notice/" + noticeId,
    method: "get"
  })
}

// 新增公告
export function add(data) {
  return request({
    url: "/system/notice",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改公告
export function update(data) {
  return request({
    url: "/system/notice",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除公告
export function remove(noticeId) {
  return request({
    url: "/system/notice/" + noticeId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

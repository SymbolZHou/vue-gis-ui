import {request} from "@/utils/request"

// 查询岗位列表
export function getList(data) {
  return request({
    url: "/system/post/list",
    method: "get",
    params: data
  })
}

// 查询岗位详细
export function getPost(postId) {
  return request({
    url: "/system/post/" + postId,
    method: "get"
  })
}

// 新增岗位
export function add(data) {
  return request({
    url: "/system/post",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改岗位
export function update(data) {
  return request({
    url: "/system/post",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除岗位
export function remove(postId) {
  return request({
    url: "/system/post/" + postId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}
// 导出
export function exportList() {
  return request({
    url: "system/post/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}

//查询岗位下的用户列表
export function selectPostUserList(data) {
  return request({
    url: "/system/post/selectPostUserList",
    method: "put",
    params: data
  })
}

//取消岗位用户
export function cancelPostUser(data) {
  return request({
    url: "/system/post/cancelPostUser",
    method: "put",
    params: data,
    action: {
      text: "取消",
      confirm: true
    }
  })
}

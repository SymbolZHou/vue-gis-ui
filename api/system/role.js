import {request} from "@/utils/request/index"

// 查询角色列表
export function getList(params) {
  return request({
    url: "/system/role/list",
    method: "get",
    params
  })
}

// 查询角色详细
export function getRoleById(roleId) {
  return request({
    url: "/system/role/" + roleId,
    method: "get"
  })
}

// 新增角色
export function add(data) {
  return request({
    url: "/system/role",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改角色
export function update(data) {
  return request({
    url: "/system/role",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: "/system/role/dataScope",
    method: "put",
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(data) {
  // const data = {
  //   roleId,
  //   status
  // }
  return request({
    url: "/system/role/changeStatus",
    method: "put",
    data
  })
}

// 删除角色
export function remove(roleId) {
  return request({
    url: "/system/role/" + roleId,
    method: "delete",
    action: {
      confirm: true,
      text: "删除"
    }
  })
}

// 查询角色已授权用户列表
export function roleAuthUsers(params) {
  return request({
    url: "/system/user/authUser/allocatedList",
    method: "get",
    params
  })
}

// 查询角色未授权用户列表
export function unRoleAuthUsers(params) {
  return request({
    url: "/system/user/authUser/unallocatedList",
    method: "get",
    params
  })
}
// 查询未分配用户角色列表〔1)
export function selectUnRolesByUserId(query) {
  return request({
    url: "/system/role/selectUnRolesByUserId",
    method: "get",
    params: query
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return request({
    url: "/system/role/authUser/cancel",
    method: "put",
    data,
    action: {
      confirm: true,
      text: "用户授权"
    }
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(params) {
  return request({
    url: "/system/role/authUser/cancelAll",
    method: "put",
    params,
    action: {
      confirm: true,
      text: "用户授权"
    }
  })
}

// 授权用户选择
export function authUserSelectAll(params) {
  return request({
    url: "/system/role/authUser/selectAll",
    method: "put",
    params,
    action: {
      confirm: true,
      text: "添加"
    }
  })
}

// 根据角色ID查询部门树结构
export function deptTreeSelect(roleId) {
  return request({
    url: "/system/role/deptTree/" + roleId,
    method: "get"
  })
}

// 获取角色选择框列表
export function optionselect() {
  return request({
    url: "/system/role/optionselect",
    method: "get"
  })
}

// 查询已分配用户角色列表
export function allocatedList(query) {
  return request({
    url: "/system/role/selectRolesByUserId",
    method: "get",
    params: query
  })
}

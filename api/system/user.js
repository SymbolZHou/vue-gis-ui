import {request} from "@/utils/request/index"

// 查询用户列表
export function getList(params) {
  return request({
    url: "/system/user/list",
    method: "get",
    params
  })
}
// 查询用户详细
export function getUser(userId) {
  return request({
    url: "/system/user/" + userId,
    method: "get"
  })
}

// 新增用户
export function add(data) {
  return request({
    url: "/system/user",
    method: "post",
    action: {
      text: "新增"
    },
    data
  })
}

// 修改用户
export function update(data) {
  return request({
    url: "/system/user",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除用户
export function remove(userId) {
  return request({
    url: "/system/user/" + userId,
    method: "delete",
    action: {
      confirm: true,
      text: "删除"
    }
  })
}

// 启用
export function enabled(params) {
  return request({
    url: "/system/user/changeStatus",
    method: "put",
    action: {
      confirm: true,
      text: "启用"
    },
    params: {
      ...params,
      status: 0
    }
  })
}
// 禁用
export function disabled(params) {
  return request({
    url: "/system/user/changeStatus",
    method: "put",
    action: {
      confirm: true,
      text: "禁用"
    },
    params: {
      ...params,
      status: 1
    }
  })
}

// 查询部门下拉树结构
export function deptTreeSelect() {
  return request({
    url: "/system/user/deptTree",
    method: "get"
  })
}

// 保存授权角色
export function updateAuthRole(data) {
  return request({
    url: "/system/user/authRole",
    method: "put",
    params: data
  })
}

// // 新增用户
// export function addUser(data) {
//   return request({
//     url: "/system/user",
//     method: "post",
//     data: data
//   })
// }

// // 修改用户
// export function updateUser(data) {
//   return request({
//     url: "/system/user",
//     method: "put",
//     data: data
//   })
// }

// // 删除用户
// export function delUser(userId) {
//   return request({
//     url: "/system/user/" + userId,
//     method: "delete"
//   })
// }

// // 强制退出
// export function delOnline(tokenId) {
//   return request({
//     url: "/monitor/online/" + tokenId,
//     method: "delete"
//   })
// }

// // 用户密码重置
// export function resetUserPwd(userId, password) {
//   const data = {
//     userId,
//     password
//   }
//   return request({
//     url: "/system/user/resetPwd",
//     method: "put",
//     data: data
//   })
// }

// // 用户状态修改
// export function changeUserStatus(data) {
//   return request({
//     url: "/system/user/changeStatus",
//     method: "put",
//     params: data
//   })
// }

// // 查询用户个人信息
// export function getUserProfile() {
//   return request({
//     url: "/system/user/profile",
//     method: "get"
//   })
// }

// // 修改用户个人信息
// export function updateUserProfile(data) {
//   return request({
//     url: "/system/user/profile",
//     method: "put",
//     data: data
//   })
// }

// // 用户密码重置
// export function updateUserPwd(oldPassword, newPassword) {
//   const data = {
//     oldPassword,
//     newPassword
//   }
//   return request({
//     url: "/system/user/profile/updatePwd",
//     method: "put",
//     params: data
//   })
// }

// // 用户头像上传
// export function uploadAvatar(data) {
//   return request({
//     url: "/system/user/profile/avatar",
//     method: "post",
//     data: data
//   })
// }

// // 查询授权角色
// export function getAuthRole(userId) {
//   return request({
//     url: "/system/user/authRole/" + userId,
//     method: "get"
//   })
// }

// // 保存授权角色
// export function updateAuthRole(data) {
//   return request({
//     url: "/system/user/authRole",
//     method: "put",
//     params: data
//   })
// }

// // 查询部门下拉树结构
// export function deptTreeSelect() {
//   return request({
//     url: "/system/user/deptTree",
//     method: "get"
//   })
// }

// // 修改用户状态
// export function changeStatus(data) {
//   return request({
//     url: "/system/user/changeStatus",
//     method: "put",
//     params: data
//   })
// }

// // 查询未分配用户角色列表〔1)
// export function unallocatedList(query) {
//   return request({
//     url: "/system/role/selectUnRolesByUserId",
//     method: "get",
//     params: query
//   })
// }

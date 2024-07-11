import {request} from "@/utils/request/index"

export const captchaImage = () => {
  return request({
    url: "/captchaImage",
    method: "GET"
  })
}
export const login = data => {
  return request({
    url: "/login",
    method: "POST",
    data,
    action: {
      text: `登录`
    }
  })
}
export const getInfo = () => {
  return request({
    url: "/getInfo",
    method: "GET"
  })
}

// 用户密码修改
export function updateUserPwd(params) {
  return request({
    url: "/system/user/profile/updatePwd",
    method: "put",
    params,
    action: {
      confirm: true,
      text: `修改密码`
    }
  })
}
// 用户密码重置
export function resetUserPwd(data) {
  return request({
    url: "/system/user/resetPwd",
    method: "put",
    data,
    action: {
      text: `重置密码`
    }
  })
}

import {request} from "@/utils/request/index"

// 查询菜单列表
export function getList(data) {
  return request({
    url: "/system/menu/list",
    method: "get",
    params: data
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: "/system/menu/" + menuId,
    method: "get"
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request({
    url: "/system/menu/treeselect",
    method: "get"
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: "/system/menu/roleMenuTreeselect/" + roleId,
    method: "get"
  })
}

// 新增菜单
export function add(data) {
  return request({
    url: "/system/menu",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改菜单
export function update(data) {
  return request({
    url: "/system/menu",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除菜单
export function remove(menuId) {
  return request({
    url: "/system/menu/" + menuId,
    method: "delete",
    action: {
      confirm: true,
      text: "删除"
    }
  })
}

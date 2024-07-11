import {request} from "@/utils/request"

// 查询部门列表
export function getList(data) {
  return request({
    url: "/system/dept/list",
    method: "get",
    params: data
  })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId) {
  return request({
    url: "/system/dept/list/exclude/" + deptId,
    method: "get"
  })
}

// 查询部门详细
export function getDept(deptId) {
  return request({
    url: "/system/dept/" + deptId,
    method: "get"
  })
}

// 新增部门
export function add(data) {
  return request({
    url: "/system/dept",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改部门
export function update(data) {
  return request({
    url: "/system/dept",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除部门
export function remove(deptId) {
  return request({
    url: "/system/dept/" + deptId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

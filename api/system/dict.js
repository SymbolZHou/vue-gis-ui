import {request} from "@/utils/request/index"

export function getListType(type) {
  return request({
    url: `/system/dict/data/type/${type}`,
    method: "get"
  })
}

// 查询字典类型列表
export function getList(data) {
  return request({
    url: "/system/dict/type/list",
    method: "get",
    params: data
  })
}

// 查询字典类型详细
export function getType(dictId) {
  return request({
    url: "/system/dict/type/" + dictId,
    method: "get"
  })
}

// 新增字典类型
export function add(data) {
  return request({
    url: "/system/dict/type",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改字典类型
export function update(data) {
  return request({
    url: "/system/dict/type",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除字典类型
export function remove(dictId) {
  return request({
    url: "/system/dict/type/" + dictId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

// 刷新字典缓存
export function refreshCache() {
  return request({
    url: "/system/dict/type/refreshCache",
    method: "delete"
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request({
    url: "/system/dict/type/optionselect",
    method: "get"
  })
}

export function exportList() {
  return request({
    url: "/system/dict/type/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}

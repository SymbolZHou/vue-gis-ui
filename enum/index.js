import {keyBy} from "lodash-es"
import {useDict} from "@/utils/dict"
export const tableWidthCol2 = "120"
export const tableWidthCol3 = "200"

export const tableHeight = "calc(100vh - 300px)"
export const superAdmin = ["admin"]
// 是否启用
export const status = [
  {value: 0, label: "是"},
  {value: 1, label: "否"}
]
status._map = keyBy(status, "value")

export const status1 = [
  {value: 1, label: "是"},
  {value: 0, label: "否"}
]
status1._map = keyBy(status1, "value")

//是否在线
export const online = [
  {value: 1, label: "在线", color: "green"},
  {value: 2, label: "离线", color: "red"},
  {value: 3, label: "未知"},
  {value: null, label: "未知"}
]
online._map = keyBy(online, "value")

//菜单类型
export const menuType = [
  {value: "M", label: "目录"},
  {value: "C", label: "菜单"},
  {value: "F", label: "按钮"}
]
menuType._map = keyBy(menuType, "value")

//用户性别
export const {sys_user_sex: sexs} = await useDict("sys_user_sex")
sexs._map = keyBy(sexs, "value")

// 系统开关
export const {sys_normal_disable} = await useDict("sys_normal_disable")
sys_normal_disable._map = keyBy(sys_normal_disable, "value")

// 菜单状态
export const {sys_show_hide} = await useDict("sys_show_hide")
sys_show_hide._map = keyBy(sys_show_hide, "value")

// 系统是否
export let {sys_yes_no} = await useDict("sys_yes_no")
sys_yes_no._map = keyBy(sys_yes_no, "value")

// 通知状态
export const {sys_notice_status} = await useDict("sys_notice_status")
sys_notice_status._map = keyBy(sys_notice_status, "value")

// 通知类型
export const {sys_notice_type} = await useDict("sys_notice_type")
sys_notice_type._map = keyBy(sys_notice_type, "value")

// 系统状态
export const {sys_common_status} = await useDict("sys_common_status")
sys_common_status._map = keyBy(sys_common_status, "value")

// 操作类型
export const {sys_oper_type} = await useDict("sys_oper_type")
sys_oper_type._map = keyBy(sys_oper_type, "value")

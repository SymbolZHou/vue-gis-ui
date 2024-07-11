import {getListType} from "@EM_CITY/api/system/dict"

const handleDict = ({data}) => {
  let arr = data.map(item => ({
    value: Number(item.dictValue),
    label: item.dictLabel
  }))
  arr._map = keyBy(arr, "value")
  return arr
}

export let sex = []
export let sys_normal_disable = []
export let sys_show_hide = []
export let sys_yes_no = []
export let sys_notice_status = []
export let sys_notice_type = []
export let sys_common_status = []
export let sys_oper_type = []
export let sys_job_group = []
export let sys_job_status = []
await (async () => {
  await Promise.all([
    getListType("sys_user_sex").then(res => {
      sex = handleDict(res)
    }),
    getListType("sys_normal_disable").then(({data}) => {
      sys_normal_disable = data.map(item => ({
        value: item.dictValue,
        label: item.dictLabel
      }))
      sys_normal_disable._map = keyBy(sys_normal_disable, "value")
    }),
    getListType("sys_show_hide").then(res => {
      sys_show_hide = handleDict(res)
    }),
    getListType("sys_yes_no").then(({data}) => {
      sys_yes_no = data.map(item => ({
        value: item.dictValue,
        label: item.dictLabel
      }))
      sys_yes_no._map = keyBy(sys_yes_no, "value")
    }),
    getListType("sys_notice_status").then(res => {
      sys_notice_status = handleDict(res)
    }),
    getListType("sys_notice_type").then(res => {
      sys_notice_type = handleDict(res)
    }),
    getListType("sys_common_status").then(res => {
      sys_common_status = handleDict(res)
    }),
    getListType("sys_oper_type").then(res => {
      sys_oper_type = handleDict(res)
    }),
    getListType("sys_job_group").then(({data}) => {
      sys_job_group = data.map(item => ({
        value: item.dictValue,
        label: item.dictLabel
      }))
      sys_job_group._map = keyBy(sys_job_group, "value")
    }),
    getListType("sys_job_status").then(res => {
      sys_job_status = handleDict(res)
    })
  ])
})()

// // 系统开关
// export const {sys_normal_disable} = await useDict("sys_normal_disable")
// sys_normal_disable._map = keyBy(sys_normal_disable, "value")

// // 菜单状态
// export const {sys_show_hide} = await useDict("sys_show_hide")
// sys_show_hide._map = keyBy(sys_show_hide, "value")

// // 系统是否
// export let {sys_yes_no} = await useDict("sys_yes_no")
// sys_yes_no._map = keyBy(sys_yes_no, "value")

// // 通知状态
// export const {sys_notice_status} = await useDict("sys_notice_status")
// sys_notice_status._map = keyBy(sys_notice_status, "value")

// // 通知类型
// export const {sys_notice_type} = await useDict("sys_notice_type")
// sys_notice_type._map = keyBy(sys_notice_type, "value")

// // 系统状态
// export const {sys_common_status} = await useDict("sys_common_status")
// sys_common_status._map = keyBy(sys_common_status, "value")

// // 操作类型
// export const {sys_oper_type} = await useDict("sys_oper_type")
// sys_oper_type._map = keyBy(sys_oper_type, "value")

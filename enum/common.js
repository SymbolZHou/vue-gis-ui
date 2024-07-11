export const loginStatus = [
  {
    label: "成功",
    value: 0
  },
  {
    label: "失败",
    value: 1
  }
]
loginStatus._map = keyBy(loginStatus, "value")

// 是否启用
export const enabledStatus1 = [
  {value: 0, label: "是"},
  {value: 1, label: "否"}
]
enabledStatus1._map = keyBy(enabledStatus1, "value")

// 是否外链
export const externalLink = [
  {value: "0", label: "是"},
  {value: "1", label: "否"}
]
externalLink._map = keyBy(externalLink, "value")
// 是否外链
export const externalLinkBlock = [
  {value: 0, label: "本窗口"},
  {value: 1, label: "新窗口"}
]
externalLinkBlock._map = keyBy(externalLinkBlock, "value")

// 是否启用
export const enabledStatus2 = [
  {value: 0, label: "是"},
  {value: 1, label: "否"}
]
enabledStatus1._map = keyBy(enabledStatus1, "value")

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

//执行策略
export const misfirePolicyType = [
  // {value: 0, label: "默认策略"},
  {value: 1, label: "立即执行"},
  {value: 2, label: "执行一次"},
  {value: 3, label: "放弃执行"}
]
misfirePolicyType._map = keyBy(misfirePolicyType, "value")

//是否并发
export const concurrentType = [
  {value: 0, label: "允许"},
  {value: 1, label: "禁止"}
]
concurrentType._map = keyBy(concurrentType, "value")

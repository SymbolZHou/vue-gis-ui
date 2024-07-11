export const roleType = [
  {
    label: "系统角色",
    value: 0
  },
  {
    label: "功能角色",
    value: 1
  },
  {
    label: "流程角色",
    value: 2
  }
]

roleType._map = keyBy(roleType, "value")

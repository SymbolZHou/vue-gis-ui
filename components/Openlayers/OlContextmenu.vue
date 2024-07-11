<template>
  <n-dropdown
    placement="bottom"
    trigger="manual"
    :x="x"
    :y="y"
    :options="contextmenuOptions"
    :show="showDropdown"
    :on-clickoutside="() => (showDropdown = false)"
  />
</template>

<script setup>
import {useEventListener} from "./hooks"
import RemixIcon from "@vue-demo/components/RemixIcon"
import {Draw} from "ol/interaction"

defineOptions({
  name: "OlContextmenu"
})

let emit = defineEmits(["change:center", "change:zoom"])

let {map} = inject("openlayers")

let message = useMessage()

let mapEvent
let showDropdown = ref(false)
let x = ref(0)
let y = ref(0)
let contextmenuOptions = [
  {
    label: "设置中心点",
    key: "set center",
    icon: () => h(RemixIcon, {icon: "focus-3-line"}),
    props: {
      onClick: () => {
        showDropdown.value = false
        emit("change:center", mapEvent)
        message.info("设置成功")
      }
    }
  },
  {
    label: "设置层级",
    key: "set zoom",
    icon: () => h(RemixIcon, {icon: "zoom-in-line"}),
    props: {
      onClick: () => {
        showDropdown.value = false
        emit("change:zoom", mapEvent)
        message.info("设置成功")
      }
    }
  }
]

const onContextmenu = ev => {
  // 处理测量右键事件冲突问题
  let interactions = map.getInteractions().getArray()
  if (interactions.find(interaction => interaction instanceof Draw)) return

  mapEvent = ev
  ev.originalEvent.preventDefault()
  showDropdown.value = true
  x.value = ev.originalEvent.clientX
  y.value = ev.originalEvent.clientY
}

useEventListener(map, "contextmenu", onContextmenu)
</script>
<style lang="scss" scoped></style>

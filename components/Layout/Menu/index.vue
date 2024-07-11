<template>
  <n-layout-sider
    :native-scrollbar="false"
    style="height: calc(100vh - 60px)"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      v-model:value="activeKey"
      key-field="path"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="routes"
      :render-label="renderLabel"
      :render-icon="renderIcon"
    />
  </n-layout-sider>
</template>

<script setup>
import RemixIcon from "@vue-demo/components/RemixIcon"
import {NIcon} from "naive-ui"
import {RouterLink} from "vue-router"

let route = useRoute()

let props = defineProps({
  routes: {
    type: Array,
    default: () => []
  }
})

let collapsed = ref(false)
let activeKey = ref(route.path)

watch(
  () => route.path,
  value => {
    activeKey.value = value
  }
)

function renderIcon(option) {
  return option.meta?.icon
    ? h(NIcon, null, {
        default: () =>
          h(RemixIcon, {
            icon: option.meta?.icon,
            style: "font-size: 18px;"
          })
      })
    : ""
}

const renderLabel = option => {
  if (option.children) return h("span", option.meta?.title)
  return h(
    RouterLink,
    {
      to: option.path
    },
    {default: () => option.meta?.title}
  )
}
</script>
<style lang="scss" scoped></style>

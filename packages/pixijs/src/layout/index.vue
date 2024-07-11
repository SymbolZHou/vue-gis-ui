<template>
  <n-dropdown placement="bottom-start" :options="options" @select="onSelect">
    <n-button type="primary" style="position: fixed; left: 20px; top: 20px; z-index: 999">
      {{ route.meta.name }}
    </n-button>
  </n-dropdown>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { routes } from '@/router'
import { get } from 'lodash-es'
import { filterRoutes } from '@vue-demo/utils/router'

let router = useRouter()
let route = useRoute()

watchEffect(() => {
  document.title = get(route, ['meta', 'name'])
})

const setRouteFiled = (pages) => {
  pages.forEach((item) => {
    item.key = item.path
    item.label = get(item, ['meta', 'name'])
    if (item.children) {
      setRouteFiled(item.children)
    }
  })
}

let options = filterRoutes(routes[0].children)

setRouteFiled(options)

const onSelect = (key) => {
  router.push(key)
}
</script>
<style lang="less" scoped></style>

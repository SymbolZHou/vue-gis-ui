<template>
  <Layout :routes="routes"></Layout>
</template>

<script setup>
import Layout from '@vue-demo/components/Layout'
import { useRouterStore } from '@/stores'

let routerStore = useRouterStore()

const routes = computed(() => {
  return [
    ...routerStore.routes._map['basic'].children,
    ...routerStore.routes.filter((item) => item.path !== '/')
  ]
})
</script>
<style lang="scss" scoped></style>

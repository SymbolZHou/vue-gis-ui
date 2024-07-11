<template>
  <Layout :routes="routerStore.routes"></Layout>
</template>

<script setup>
import Layout from '@vue-demo/components/Layout'
import { useRouterStore } from '@/stores'

let routerStore = useRouterStore()
</script>
<style lang="scss" scoped></style>

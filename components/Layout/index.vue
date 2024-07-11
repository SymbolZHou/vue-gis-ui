<template>
  <n-layout style="--headerHeight: 60px">
    <!-- <n-layout-header>
      <Header class="header"></Header>
    </n-layout-header> -->
    <n-layout has-sider>
      <Menu class="menu" :routes="routes"></Menu>
      <n-layout-content content-style="background: #f0f2f5">
        <div style="height: 100vh; padding: 10px; margin: 10px; background-color: #fff">
          <router-view v-slot="{Component, route}">
            <transition name="fade-transform" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
// import Header from './Header'
import Menu from "./Menu"

defineOptions({
  name: "Layout"
})

defineProps({
  routes: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: var(--headerHeight) 1fr;
  // column-gap: 20px;
  .header {
    // grid-area: header;
    grid-column: 1 / 3;
  }
  .menu {
    // grid-area: menu;
  }
  .main {
    // grid-area: main;
    padding: 10px;
    background: #ccc;
  }
}
</style>

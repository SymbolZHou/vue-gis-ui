<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script setup></script>
<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>

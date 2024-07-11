<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-modal-provider>
      <n-dialog-provider>
        <n-message-provider>
          <!-- <n-theme-editor> -->
          <RouterView />
          <!-- </n-theme-editor> -->
        </n-message-provider>
      </n-dialog-provider>
    </n-modal-provider>
  </n-config-provider>
</template>
<script setup>
import { zhCN, dateZhCN } from 'naive-ui'
</script>

<style scoped></style>

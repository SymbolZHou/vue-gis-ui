<template>
  <div id="box" @click="onClick" ref="boxRef"></div>
</template>

<script setup>
function easeInSine(x) {
  return 1 - Math.cos((x * Math.PI) / 2)
}

let boxRef = ref()
let currentTime = 0
let duration = 2
let target = 500

useRafFn(() => {})
</script>
<style lang="scss" scoped>
#box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>

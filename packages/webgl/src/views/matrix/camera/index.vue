<template>
  <div ref="containerRef"></div>
</template>

<script setup>
import { Camera } from './camera'
let containerRef = ref()

let canvas = document.createElement('canvas')
canvas.width = canvas.height = 1000
let ctx = canvas.getContext('2d')

onMounted(() => {
  containerRef.value.appendChild(canvas)
})

let camera = new Camera(-200, -200)
ctx.fillRect(100, 100, 100, 100)
camera.transformInvert(ctx)
ctx.fillRect(0, 0, 100, 100)
</script>
<style lang="scss" scoped></style>

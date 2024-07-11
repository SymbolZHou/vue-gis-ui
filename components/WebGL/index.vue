<template>
  <div
    ref="containerRef"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
    class="container"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import {initShader, useMouseWebgl, pixelToCoor, createCanvas} from "./utils"
import tinycolor from "tinycolor2"

defineOptions({
  name: "WebGL"
})

let props = defineProps({
  vertexstring: String,
  fragmentstring: String,
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 500
  },
  background: {
    type: String,
    default: "#000"
  }
})

const polygon = []

let containerRef = ref()
let {canvas, ctx} = createCanvas(
  computed(() => props.width),
  computed(() => props.height)
)

let {r, g, b, a} = tinycolor(props.background).from01()

ctx.clearColor(r, g, b, a)
ctx.clear(ctx.COLOR_BUFFER_BIT)

onMounted(() => {
  containerRef.value.appendChild(canvas)
})

initShader(ctx, props.vertexstring, props.fragmentstring)

let a_position = ctx.getAttribLocation(ctx.program, "a_position")

let vertexBuffer = ctx.createBuffer()

ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)

ctx.vertexAttribPointer(a_position, 2, ctx.FLOAT, false, 0, 0)

ctx.enableVertexAttribArray(a_position)

useRafFn(() => {
  if (!polygon.length) return
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  while (polygon.length) {
    polygon.shift()()
  }
})

provide("webgl", {
  ctx,
  canvas,
  polygon,
  containerRef,
  pixelToCoor: pixelToCoor.bind(undefined, canvas),
  useMouseWebgl: useMouseWebgl.bind(undefined, canvas)
})
</script>
<style lang="scss" scoped>
.container {
  display: inline-block;
}
</style>

<template>
  <slot></slot>
</template>

<script setup>
let { ctx, pixelToCoor, polygon } = inject('webgl')

let props = defineProps({
  x: Number,
  y: Number,
  r: Number,
  side: Number
})

const createVertices = (options) => {
  let { r, side, x, y } = options

  let points = Array.from({ length: side + 1 }).reduce(
    (target, item, index) => {
      let pointX = x + r * Math.cos(((Math.PI * 2) / side) * index)
      let pointY = y + r * Math.sin(((Math.PI * 2) / side) * index)

      target.push(...pixelToCoor([pointX, pointY]))

      return target
    },
    [...pixelToCoor([x, y])]
  )

  return points
}

let vertices = computed(() => {
  return createVertices({
    x: props.x,
    y: props.y,
    r: props.r,
    side: props.side
  })
})

const render = () => {
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(vertices.value), ctx.STATIC_DRAW)
  ctx.drawArrays(ctx.TRIANGLE_FAN, 0, vertices.value.length / 2)
}

watch(
  () => props,
  () => {
    polygon.push(render)
  },
  {
    immediate: true,
    deep: true
  }
)
</script>
<style lang="less" scoped></style>

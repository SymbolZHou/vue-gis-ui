<template>
  <slot></slot>
</template>

<script setup>
let { ctx, pixelToCoor } = inject('webgl')

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

let points = [...pixelToCoor([100, 100]), ...pixelToCoor([200, 200]), ...pixelToCoor([300, 300])]

let vertices = new Float32Array(points)

let vertexBuffer = ctx.createBuffer()

ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)

ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)

ctx.vertexAttribPointer(a_position, 2, ctx.FLOAT, false, 0, 0)

ctx.enableVertexAttribArray(a_position)

ctx.clearColor(0, 0, 0, 1)

const render = () => {
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  ctx.drawArrays(ctx.POINTS, 0, vertices.length / 2)
}

render()

useTimeoutFn(() => {
  points.push(...pixelToCoor([400, 400]))
  vertices = new Float32Array(points)
  ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)
  render()
}, 2000)
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

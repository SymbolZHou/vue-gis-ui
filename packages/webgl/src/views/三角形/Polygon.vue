<template>
  <slot></slot>
</template>

<script setup>
let { ctx, pixelToCoor } = inject('webgl')

ctx.clearColor(0, 0, 0, 1)

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

let vertices = new Float32Array([
  ...pixelToCoor([100, 100]),
  ...pixelToCoor([200, 200]),
  ...pixelToCoor([100, 200]),
  ...pixelToCoor([100, 300]),
  ...pixelToCoor([200, 300]),
  ...pixelToCoor([150, 400])
])

let vertexBuffer = ctx.createBuffer()

ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)

ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)

ctx.vertexAttribPointer(a_position, 2, ctx.FLOAT, false, 0, 0)

ctx.enableVertexAttribArray(a_position)

//gl.POINTS:要绘制一系列的点
//gl.LINES:要绘制了一系列未连接直线段(单独行)
//gl.LINE_STRIP:要绘制一系列连接的线段
//gl.LINE_LOOP:要绘制一系列连接的线段。它还连接的第一和最后的顶点，以形成一个环
//TRIANGLES:一系列单独的三角形；绘制方式：（v0,v1,v2）,(v1,v3,v4)
//TRIANGLE_STRIP:一系列带状的三角形
//TRIANGLE_FAN:扇形绘制方式

const render = () => {
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  ctx.drawArrays(ctx.TRIANGLES, 0, vertices.length / 2)
}

render()
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

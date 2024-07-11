<template>
  <slot></slot>
</template>

<script setup>
let { ctx, pixelToCoor } = inject('webgl')

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

//如何向attribute 变量中写入多点，并绘制多点
//顶点数据
const vertices = new Float32Array([0, 0.2, -0.2, -0.1, 0.2, -0.1])
//缓冲对象
const vertexBuffer = ctx.createBuffer()
//绑定缓冲对象
ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)
//写入数据
ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)

//修改attribute 变量
ctx.vertexAttribPointer(a_position, 2, ctx.FLOAT, false, 0, 0)
//赋能-批处理
ctx.enableVertexAttribArray(a_position)

//颜色数据
const colors = new Float32Array([0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1])
//缓冲对象
const colorBuffer = ctx.createBuffer()
//绑定缓冲对象
ctx.bindBuffer(ctx.ARRAY_BUFFER, colorBuffer)
//写入数据
ctx.bufferData(ctx.ARRAY_BUFFER, colors, ctx.STATIC_DRAW)
//获取attribute 变量
const a_Color = ctx.getAttribLocation(ctx.program, 'a_Color')
//修改attribute 变量
ctx.vertexAttribPointer(a_Color, 4, ctx.FLOAT, false, 0, 0)
//赋能-批处理
ctx.enableVertexAttribArray(a_Color)

const render = () => {
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  ctx.drawArrays(ctx.POINTS, 0, vertices.length / 2)
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

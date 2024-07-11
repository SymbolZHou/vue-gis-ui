<template>
  <slot></slot>
</template>

<script setup>
let { ctx, pixelToCoor } = inject('webgl')

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

//如何向attribute 变量中写入多点，并绘制多点
//数据源
const source = new Float32Array([
  0, 0.4, 0, 0, 0, 1, 1, -0.2, -0.1, 0, 0, 1, 0, 1, 0.2, -0.1, 0, 1, 1, 0, 1
])
//元素字节数
const elementBytes = source.BYTES_PER_ELEMENT
//系列尺寸
const verticeSize = 3
const colorSize = 4
//类目尺寸
const categorySize = verticeSize + colorSize
//类目字节数
const categoryBytes = categorySize * elementBytes
//系列字节索引位置
const verticeByteIndex = 0
const colorByteIndex = verticeSize * elementBytes
//顶点总数
const sourceSize = source.length / categorySize

//缓冲对象
const sourceBuffer = ctx.createBuffer()
//绑定缓冲对象
ctx.bindBuffer(ctx.ARRAY_BUFFER, sourceBuffer)
//写入数据
ctx.bufferData(ctx.ARRAY_BUFFER, source, ctx.STATIC_DRAW)

//修改attribute 变量
ctx.vertexAttribPointer(a_position, verticeSize, ctx.FLOAT, false, categoryBytes, verticeByteIndex)
//赋能-批处理
ctx.enableVertexAttribArray(a_position)

//获取attribute 变量
const a_Color = ctx.getAttribLocation(ctx.program, 'a_Color')
//修改attribute 变量
ctx.vertexAttribPointer(a_Color, colorSize, ctx.FLOAT, false, categoryBytes, colorByteIndex)
//赋能-批处理
ctx.enableVertexAttribArray(a_Color)

const render = () => {
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  ctx.drawArrays(ctx.TRIANGLES, 0, sourceSize)
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

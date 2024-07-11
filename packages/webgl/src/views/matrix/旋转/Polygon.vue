<template>
  <slot></slot>
</template>

<script setup>
import gsap from 'gsap'
let { ctx, pixelToCoor } = inject('webgl')

ctx.clearColor(0, 0, 0, 1)

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

let vertices = new Float32Array([
  ...pixelToCoor([250, 250 - 60]),
  ...pixelToCoor([250 - 60, 250 + 60]),
  ...pixelToCoor([250 + 60, 250 + 60])
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

//获取Uniform变量
const u_SinB = ctx.getUniformLocation(ctx.program, 'u_SinB')
const u_CosB = ctx.getUniformLocation(ctx.program, 'u_CosB')

let target = {
  radian: 0
}

gsap.to(target, {
  radian: Math.PI * 2,
  duration: 2,
  repeat: -1,
  ease: 'none',
  onUpdate() {
    ctx.uniform1f(u_SinB, Math.sin(target.radian))
    ctx.uniform1f(u_CosB, Math.cos(target.radian))
    render()
  }
})
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

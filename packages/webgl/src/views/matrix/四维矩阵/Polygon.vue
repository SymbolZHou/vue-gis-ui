<template>
  <slot></slot>
</template>

<script setup>
import gsap from 'gsap'

import { Matrix4 } from 'three'

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
const u_Matrix = ctx.getUniformLocation(ctx.program, 'u_Matrix')

let m1 = new Matrix4()
m1.setPosition(...pixelToCoor([100, 100]), 0)

let target = {
  value: 0
}

let m2 = new Matrix4()

gsap.to(target, {
  value: 2,
  duration: 1,
  repeat: -1,
  ease: 'none',
  yoyo: true,
  onUpdate() {
    m2.makeScale(target.value, target.value, target.value)
    ctx.uniformMatrix4fv(u_Matrix, false, m1.clone().multiply(m2).elements)
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

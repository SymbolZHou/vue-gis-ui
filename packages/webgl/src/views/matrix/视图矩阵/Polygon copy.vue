<template>
  <slot></slot>
</template>

<script setup>
import gsap from 'gsap'

import { Matrix4, Vector3 } from 'three'

let { ctx, pixelToCoor } = inject('webgl')

ctx.clearColor(0, 0, 0, 1)

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')

const verticeLib = [
  1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0,
  -1.0, 1.0, -1.0, -1.0, -1.0, -1.0
]

const indices = [
  0, 1, 1, 2, 2, 3, 3, 0,

  0, 5, 1, 6, 2, 7, 3, 4,

  4, 5, 5, 6, 6, 7, 7, 4
]

const arr = []
indices.forEach((n) => {
  const i = n * 3
  arr.push(verticeLib[i] / 5, verticeLib[i + 1] / 5, verticeLib[i + 2] / 5)
})
const vertices = new Float32Array(arr)

let vertexBuffer = ctx.createBuffer()

ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)

ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)

ctx.vertexAttribPointer(a_position, 3, ctx.FLOAT, false, 0, 0)

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
  ctx.drawArrays(ctx.LINES, 0, indices.length)
}

//获取Uniform变量
const u_ViewMatrix = ctx.getUniformLocation(ctx.program, 'u_ViewMatrix')

function getViewMatrix(e, t, u) {
  //基向量c，视线
  const c = new Vector3().subVectors(e, t).normalize()
  //基向量a，视线和上方向的垂线
  const a = new Vector3().crossVectors(u, c).normalize()
  //基向量b，修正上方向
  const b = new Vector3().crossVectors(c, a).normalize()
  //正交旋转矩阵
  const mr = new Matrix4().set(...a, 0, ...b, 0, -c.x, -c.y, -c.z, 0, 0, 0, 0, 1)
  //位移矩阵
  const mt = new Matrix4().set(1, 0, 0, -e.x, 0, 1, 0, -e.y, 0, 0, 1, -e.z, 0, 0, 0, 1)
  return mr.multiply(mt)
}

let m1 = getViewMatrix(new Vector3(0.1, 0.2, 0.5), new Vector3(0, 0, 0), new Vector3(0, 1, 0))

ctx.uniformMatrix4fv(u_ViewMatrix, false, m1.elements)

render()
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

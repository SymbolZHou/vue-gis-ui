<template>
  <slot></slot>
</template>

<script setup>
import * as dat from 'dat.gui'
import gsap from 'gsap'

import { Matrix4, Vector3, MathUtils } from 'three'

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

// let vertices = new Float32Array([
//   ...pixelToCoor([250, 250 - 60]),
//   ...pixelToCoor([250 - 60, 250 + 60]),
//   ...pixelToCoor([250 + 60, 250 + 60])
// ])

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
const u_ModelMatrix = ctx.getUniformLocation(ctx.program, 'u_ModelMatrix')

var gui = new dat.GUI()

onUnmounted(() => {
  gui.domElement.remove()
})

var e = reactive({ x: 0.2, y: 0.5, z: 0.2 })
var t = reactive({ x: 0, y: 0, z: 0 })
var m = reactive({ x: 0, y: 0, z: 0 })

let eGroup = gui.addFolder('视点')
eGroup.add(e, 'x', -1, 1).step(0.1)
eGroup.add(e, 'y', -1, 1).step(0.1)
eGroup.add(e, 'z', -1, 1).step(0.1)

let tGroup = gui.addFolder('目标')
tGroup.add(t, 'x', -1, 1).step(0.1)
tGroup.add(t, 'y', -1, 1).step(0.1)
tGroup.add(t, 'z', -1, 1).step(0.1)

let model = gui.addFolder('模型位移')
model.add(m, 'x', -1, 1).step(0.1)
model.add(m, 'y', -1, 1).step(0.1)
model.add(m, 'z', -1, 1).step(0.1)

let m1 = new Matrix4()

let m2 = new Matrix4()

watchEffect(() => {
  m1.lookAt(new Vector3(e.x, e.y, e.z), new Vector3(t.x, t.y, t.z), new Vector3(0, 1, 0))
  m2.makeTranslation(m.x, m.y, m.z)

  ctx.uniformMatrix4fv(u_ViewMatrix, false, m1.elements)
  ctx.uniformMatrix4fv(u_ModelMatrix, false, m2.elements)
  render()
})
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

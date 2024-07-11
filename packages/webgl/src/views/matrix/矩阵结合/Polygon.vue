<template>
  <slot></slot>
</template>

<script setup>
import { MathUtils, PerspectiveCamera } from 'three'
let { ctx: gl, canvas } = inject('webgl')

var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix')

// 设置顶点坐标和颜色（蓝色三角形在前面）：
var verticesColors = new Float32Array([
  // 顶点坐标和颜色。
  0.0,
  1.0,
  -4.0,
  0.4,
  1.0,
  0.4, // 绿色三角形在最后
  -0.5,
  -1.0,
  -4.0,
  0.4,
  1.0,
  0.4,
  0.5,
  -1.0,
  -4.0,
  1.0,
  0.4,
  0.4,

  0.0,
  1.0,
  -2.0,
  1.0,
  1.0,
  0.4, // 黄色三角形在中间
  -0.5,
  -1.0,
  -2.0,
  1.0,
  1.0,
  0.4,
  0.5,
  -1.0,
  -2.0,
  1.0,
  0.4,
  0.4,

  0.0,
  1.0,
  0.0,
  0.4,
  0.4,
  1.0, // 蓝色三角形在前面
  -0.5,
  -1.0,
  0.0,
  0.4,
  0.4,
  1.0,
  0.5,
  -1.0,
  0.0,
  1.0,
  0.4,
  0.4
]).map((item) => item * 1)
var n = 9
// 创建缓冲区对象并对它进行一些列操作
var vertexColorBuffer = gl.createBuffer()

// Write the vertex information and enable it
gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer)
gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW)

var FSIZE = verticesColors.BYTES_PER_ELEMENT

var a_Position = gl.getAttribLocation(gl.program, 'a_Position')

gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0)
gl.enableVertexAttribArray(a_Position)

var a_Color = gl.getAttribLocation(gl.program, 'a_Color')

gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3)
gl.enableVertexAttribArray(a_Color)

let camera = new PerspectiveCamera(50, canvas.width / canvas.height, 1, 1000)

var modelMatrix = new Matrix4() // 模型矩阵
var viewMatrix = new Matrix4() // 视图矩阵
var projMatrix = camera.projectionMatrix.clone() // 投影矩阵
var mvpMatrix = new Matrix4() // 模型视图投影矩阵

modelMatrix.makeTranslation(0.75, 0, 0)
viewMatrix.lookAt(new Vector3(0, 0, 1), new Vector3(0, 0, 0), new Vector3(0, 1, 0))

// let camera = new PerspectiveCamera(50, canvas.width / canvas.height, 1, 1000)
// 相同效果
// const near = 1
// let aspect = canvas.width / canvas.height
// let fov = 50
// let top = (near * Math.tan(MathUtils.DEG2RAD * 0.5 * fov)) / 1
// let height = 2 * top
// let width = aspect * height
// let left = -0.5 * width
// projMatrix.makePerspective(left, left + width, top, top - height, near, 1000)

mvpMatrix = projMatrix.clone().multiply(viewMatrix).multiply(modelMatrix)

gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements)

gl.clear(gl.COLOR_BUFFER_BIT) // Clear <canvas>

gl.drawArrays(gl.TRIANGLES, 0, n) // Draw the triangles

// 为另一对三角形准备模型矩阵
modelMatrix.makeTranslation(-0.75, 0, 0)
// 计算模型视图投影矩阵
mvpMatrix.copy(projMatrix).multiply(viewMatrix).multiply(modelMatrix)
// 将模型视图投影矩阵传给u_MvpMatrix变量
gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements)

gl.drawArrays(gl.TRIANGLES, 0, n)
</script>
<style lang="scss" scoped>
.container {
  // background: black;
  display: inline-block;
  margin: 20px;
}
</style>

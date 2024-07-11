<template>
  <WebGL :width="1000" :height="1000" :vertexstring="vertexstring" :fragmentstring="fragmentstring">
    <Polygon></Polygon>
  </WebGL>
</template>

<script setup>
import tinycolor from 'tinycolor2'
import Polygon from './Polygon.vue'

let vertexstring = `
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  uniform mat4 u_MvpMatrix;
  varying vec4 v_Color;
  void main(void){
      gl_Position = u_MvpMatrix * a_Position;
      v_Color = a_Color;
  }
`
let { r, g, b, a } = tinycolor('blue').from01()
let fragmentstring = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  varying vec4 v_Color;
  void main(void){
    gl_FragColor = v_Color;
  }
`

let m1 = new Vector3(10, 10, 0)
let m2 = new Vector3(20, 10, 0)

console.log(m1.dot(m2))
</script>
<style lang="scss" scoped>
#box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>

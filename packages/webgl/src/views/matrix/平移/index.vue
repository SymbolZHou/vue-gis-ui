<template>
  <WebGL :width="500" :height="500" :vertexstring="vertexstring" :fragmentstring="fragmentstring">
    <Polygon></Polygon>
  </WebGL>
</template>

<script setup>
import Polygon from './Polygon.vue'
import tinycolor from 'tinycolor2'

let vertexstring = `
  attribute vec4 a_position;
  uniform vec4 u_translation;
  void main(void){
      gl_Position = a_position + u_translation;
  }
`
let { r, g, b, a } = tinycolor('blue').from01()
let fragmentstring = `
  precision mediump float;
  void main(void){
    gl_FragColor = vec4(${r},${g},${b},${a});
  }
`
</script>
<style lang="scss" scoped>
#box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>

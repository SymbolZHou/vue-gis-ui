<template>
  <WebGL :width="500" :height="500" :vertexstring="vertexstring" :fragmentstring="fragmentstring">
    <Circle></Circle>
  </WebGL>
</template>

<script setup>
import Circle from './Circle.vue'
let vertexstring = `
  attribute vec4 a_position;
  attribute float a_PointSize;
  void main(void){
      gl_Position = a_position;
      gl_PointSize = a_PointSize;
  }
`
let fragmentstring = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main(void){
    float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
    if(dist < 0.5) {
      gl_FragColor = u_FragColor;
    } else {
      discard;
    }
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

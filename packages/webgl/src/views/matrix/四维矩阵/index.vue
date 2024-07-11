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
    //列主序
    uniform mat4 u_Matrix;
    void main(){
      gl_Position = u_Matrix*a_position;
    }
`
// let vertexstring = `
//   attribute vec4 a_position;
//   float angle = radians(60.0);
//   float sinB = sin(angle);
//   float cosB = cos(angle);
//   void main(void){
//       gl_Position.x = a_position.x * cosB - a_position.y * sinB;
//       gl_Position.y = a_position.y * cosB + a_position.x * sinB;
//       gl_Position.z = a_position.z;
//       gl_Position.w = 1.0;
//   }
// `
let { r, g, b, a } = tinycolor('blue').from01()
let fragmentstring = `
  precision mediump float;
  void main(void){
    gl_FragColor = vec4(${r},${g},${b},${a});
  }
`

let m1 = new Matrix4()
console.log(m1)
</script>
<style lang="scss" scoped>
#box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>

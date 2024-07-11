<template>
  <WebGL
    :width="width"
    :height="height"
    :vertexstring="vertexstring"
    :fragmentstring="fragmentstring"
  >
    <Points></Points>
  </WebGL>
</template>

<script setup>
import Points from './Points.vue'

let { width, height } = useWindowSize()

let vertexstring = `
  attribute vec4 a_position;
  void main(void){
      gl_Position = a_position;
      gl_PointSize = 10.0;
  }
`
let fragmentstring = `
  void main(void){
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }
`
</script>
<style lang="scss" scoped></style>

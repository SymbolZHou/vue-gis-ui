<template>
  <WebGL
    :width="width"
    :height="height"
    :vertexstring="vertexstring"
    :fragmentstring="fragmentstring"
  >
    <Line></Line>
  </WebGL>
</template>

<script setup>
import Line from './Line.vue'
import tinycolor from 'tinycolor2'

let { width, height } = useWindowSize()

let { r, g, b, a } = tinycolor('blue').from01()

let vertexstring = `
  attribute vec4 a_position;
  void main(void){
      gl_Position = a_position;
      gl_PointSize = 20.0;
  }
`
let fragmentstring = `
  void main(void){
    gl_FragColor = vec4(${r},${g},${b},${a});
  }
`

let lines = reactive([])

provide('layer', {
  lines
})
</script>
<style lang="scss" scoped></style>

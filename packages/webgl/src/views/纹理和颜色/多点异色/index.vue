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
    attribute vec4 a_Color;
    varying vec4 v_Color;
    void main(){
        //点位
        gl_Position=a_position;
        //尺寸
        gl_PointSize=50.0;
        v_Color=a_Color;
    }
`
let fragmentstring = `
  precision mediump float;
    varying vec4 v_Color;
    void main(){
        gl_FragColor=v_Color;
    }
`
</script>
<style lang="scss" scoped></style>

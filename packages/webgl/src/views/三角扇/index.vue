<template>
  <WebGL
    :width="width"
    :height="height"
    :vertexstring="vertexstring"
    :fragmentstring="fragmentstring"
  >
    <Polygon
      v-for="(item, index) in circles"
      :key="index"
      :x="item.x"
      :y="item.y"
      :r="item.r"
      :side="100"
    ></Polygon>
  </WebGL>
</template>

<script setup>
import gsap from 'gsap'
import Polygon from './Polygon.vue'
import tinycolor from 'tinycolor2'

let { width, height } = useWindowSize()

let { r, g, b, a } = tinycolor('blue').from01()

let vertexstring = `
  attribute vec4 a_position;
  void main(void){
      gl_Position = a_position;
      gl_PointSize = 10.0;
  }
`
let fragmentstring = `
  void main(void){
    gl_FragColor = vec4(${r},${g},${b},${a});
  }
`

let circles = reactive(
  Array.from({ length: 10 }).map((item) => {
    return {
      x: random(100, width.value - 100),
      y: random(100, height.value - 100),
      r: random(10, 30)
    }
  })
)

let gs = gsap.to(circles, {
  r(a, b) {
    return b.r * 2
  },
  ease: 'none',
  repeat: -1,
  yoyo: true
})

onUnmounted(() => {
  gs.revert()
})
</script>
<style lang="scss" scoped></style>

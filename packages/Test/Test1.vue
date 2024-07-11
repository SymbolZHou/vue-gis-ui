<template>
  <div id="container" style="width: 1000px; height: 500px"></div>
</template>

<script setup>
import gsap from 'gsap'
import { Circle } from './utils'

let canvas = document.createElement('canvas')
let w = 100,
  h = 100
canvas.width = w
canvas.height = h
let ctx = canvas.getContext('2d')

let circle = new Circle({
  x: w / 2,
  y: h / 2,
  r: 10,
  opacity: 1
})

let circle1 = circle.clone()
let circle2 = circle.clone()

gsap.to([circle, circle1, circle2], {
  r: 30,
  duration: 3,
  repeat: -1,
  opacity: 0,
  stagger: '1',
  onUpdate() {
    ctx.clearRect(0, 0, w, h)
    circle.render(ctx)
    circle1.render(ctx)
    circle2.render(ctx)
  }
})

onMounted(() => {
  document.querySelector('#container').appendChild(canvas)
})
</script>
<style lang="scss" scoped></style>

<template>
  <slot></slot>
</template>

<script setup>
import { Point } from 'ol/geom'
import { Icon, Style } from 'ol/style.js'
import Feature from 'ol/Feature'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Circle } from './utils'
import gsap from 'gsap'

let { map } = inject('ol')

let props = defineProps({
  center: Array
})

let canvas = document.createElement('canvas')
let w = 200,
  h = 200
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

let style = new Style({
  image: new Icon({
    img: canvas,
    imgSize: [w, h]
  })
})

let source = new VectorSource()

let feature = new Feature(new Point(props.center))
source.addFeature(feature)

feature.setStyle(style)

let layer = new VectorLayer({
  source: source
})

map.addLayer(layer)
import { random } from 'lodash-es'
let gs = gsap
  .to([circle, circle1, circle2], {
    keyframes: [
      { scaleX: 3, scaleY: 3, opacity: 0 },
      { scaleX: 1, scaleY: 1, opacity: 1, duration: 0 }
    ],
    delay: random(0, 1, true),
    duration: 3,
    repeat: -1,
    lazy: true,
    stagger: 1,
    onUpdate() {
      ctx.clearRect(0, 0, w, h)
      circle.render(ctx)
      circle1.render(ctx)
      circle2.render(ctx)
      layer.changed()
    }
  })
  .then(function () {
    console.log(123)
  })

onUnmounted(() => {
  gs.revert()
})
</script>
<style lang="less" scoped></style>

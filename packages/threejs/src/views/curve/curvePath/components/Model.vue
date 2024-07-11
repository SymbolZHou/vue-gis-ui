<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  LineCurve,
  CurvePath,
  LineBasicMaterial,
  Line,
  Vector2,
  ArcCurve
} from 'three'

let { scene } = inject('three')

const line1 = new LineCurve(new Vector2(-50, 50), new Vector2(-50, 0))
const arcCurve = new ArcCurve(0, 0, 50, 0, Math.PI, true)
const line2 = new LineCurve(new Vector2(50, 0), new Vector2(50, 50))

const curvePath = new CurvePath()
curvePath.add(line1)
curvePath.add(arcCurve)
curvePath.add(line2)

let geometry = new BufferGeometry()

geometry.setFromPoints(curvePath.getPoints(10))

let material = new LineBasicMaterial({
  color: 'red'
})

let mesh = new Line(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

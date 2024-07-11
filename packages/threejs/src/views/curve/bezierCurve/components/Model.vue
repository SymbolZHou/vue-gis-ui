<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  PointsMaterial,
  Points,
  Line,
  Vector2,
  Vector3,
  CubicBezierCurve,
  QuadraticBezierCurve3,
  CubicBezierCurve3,
  QuadraticBezierCurve
} from 'three'

let { scene } = inject('three')

const curve1 = new QuadraticBezierCurve(
  new Vector2(-200, 0),
  new Vector2(-100, 100),
  new Vector2(0, 0)
)

const curve2 = new QuadraticBezierCurve3(
  new Vector3(200, 0, -100),
  new Vector3(100, 100, -100),
  new Vector3(0, 0, -100)
)

const curve3 = new CubicBezierCurve(
  new Vector2(-100, 0),
  new Vector2(-50, 150),
  new Vector2(200, 150),
  new Vector2(100, 0)
)
const curve4 = new CubicBezierCurve3(
  new Vector3(-100, 0, 100),
  new Vector3(-50, 150, 100),
  new Vector3(200, 150, 100),
  new Vector3(100, 0, 100)
)

let geometry = new BufferGeometry()
geometry.setFromPoints(curve1.getPoints(20))

let geometry1 = new BufferGeometry()
geometry1.setFromPoints(curve2.getPoints(20))

let geometry2 = new BufferGeometry()
geometry2.setFromPoints(curve3.getPoints(20))

let geometry3 = new BufferGeometry()
geometry3.setFromPoints(curve4.getPoints(20))

let material = new PointsMaterial({
  color: 'red',
  size: 5
})
let material1 = new PointsMaterial({
  color: 'green',
  size: 5
})
let material2 = new PointsMaterial({
  color: 'blue',
  size: 5
})
let material3 = new PointsMaterial({
  color: 'yellow',
  size: 5
})

let mesh = new Points(geometry, material)
let mesh1 = new Points(geometry1, material1)
let mesh2 = new Points(geometry2, material2)
let mesh3 = new Points(geometry3, material3)

scene.add(mesh, mesh1, mesh2, mesh3)
</script>
<style lang="less" scoped></style>

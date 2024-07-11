<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  LineLoop,
  PointsMaterial,
  MeshPhongMaterial,
  Points,
  Mesh,
  Vector3,
  ExtrudeGeometry,
  Shape,
  ArcCurve,
  Vector2,
  DoubleSide
} from 'three'

let { scene } = inject('three')

let points = [
  new Vector2(0, 50),
  new Vector2(-50, 0),
  new Vector2(0, -50),
  new Vector2(50, 0),
  new Vector2(0, 50)
]
let shape = new Shape(points)

let geometry = new ExtrudeGeometry(shape, {
  depth: 200
})

let material = new MeshPhongMaterial({
  color: 'red',
  side: DoubleSide
})

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

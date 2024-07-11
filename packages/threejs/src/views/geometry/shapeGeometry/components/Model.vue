<template>
  <slot></slot>
</template>

<script setup>
import {
  MeshPhongMaterial,
  Mesh,
  ExtrudeGeometry,
  ShapeGeometry,
  Shape,
  Vector3,
  DoubleSide
} from 'three'

let { scene, camera } = inject('three')

let points = [
  new Vector3(-50, 50, 100),
  new Vector3(-50, -50, 100),
  new Vector3(50, -50, 100),
  new Vector3(50, 50, 100)
]
let shape = new Shape(points)
console.log(shape)

let holeRect = new Shape([
  new Vector3(-10, 10),
  new Vector3(-10, -10),
  new Vector3(10, -10),
  new Vector3(10, 10)
])

shape.holes.push(holeRect)

let geometry = new ExtrudeGeometry(shape, {
  depth: 20
})

let material = new MeshPhongMaterial({
  color: 'red',
  side: DoubleSide
})

let mesh = new Mesh(geometry, material)

mesh.position.x = 100

console.log(mesh.matrix, camera, geometry)
scene.add(mesh)
</script>
<style lang="less" scoped></style>

<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  LineBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  CubicBezierCurve3,
  Line,
  Mesh,
  Vector3,
  ArcCurve,
  TubeGeometry,
  CatmullRomCurve3,
  DoubleSide
} from 'three'

let { scene } = inject('three')

const path = new CatmullRomCurve3([
  new Vector3(-100, 0, 100),
  new Vector3(-50, 50, 50),
  new Vector3(0, 0, 0),
  new Vector3(50, -50, 50),
  new Vector3(100, 0, 100)
])

const curve4 = new CubicBezierCurve3(
  new Vector3(-100, 0, 100),
  new Vector3(-50, 150, 100),
  new Vector3(200, 150, 100),
  new Vector3(100, 0, 100)
)
let geometry = new TubeGeometry(path, 64, 10, 8)
// let geometry = new BufferGeometry()
// geometry.setFromPoints(path.getPoints(40))

let material = new MeshLambertMaterial({
  color: 'red',
  side: DoubleSide
})

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

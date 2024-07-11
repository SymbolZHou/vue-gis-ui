<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferAttribute,
  BufferGeometry,
  LineLoop,
  MeshBasicMaterial,
  LineBasicMaterial,
  PointsMaterial,
  Points,
  Vector3,
  CatmullRomCurve3,
  ArcCurve
} from 'three'

let { scene } = inject('three')

const curve = new CatmullRomCurve3([
  new Vector3(-100, 0, 100),
  new Vector3(-50, 50, 50),
  new Vector3(0, 0, 0),
  new Vector3(50, -50, 50),
  new Vector3(100, 0, 100)
])

let geometry = new BufferGeometry()

geometry.setFromPoints(curve.getPoints(20))

let material = new PointsMaterial({
  color: 'red',
  size: 5
})

let mesh = new Points(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

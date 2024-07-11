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
  MeshLambertMaterial,
  Points,
  Mesh,
  Vector3,
  ArcCurve
} from 'three'

let { scene } = inject('three')

const arc = new ArcCurve(0, 0, 100, 0, Math.PI * 2, true)

let geometry = new BufferGeometry()

geometry.setFromPoints(arc.getPoints(10))

let material = new PointsMaterial({
  color: 'red',
  size: 10
})

let mesh = new Points(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

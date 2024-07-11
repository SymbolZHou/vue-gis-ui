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
  Vector3
} from 'three'

let { scene } = inject('three')

let s = 10,
  r = 100,
  n = (Math.PI * 2) / s

let arr = Array.from({ length: s }).map((item, i) => {
  let angle = n * i

  let x = Math.cos(angle) * r
  let y = Math.sin(angle) * r
  let z = 0
  return new Vector3(x, y, z)
})

let geometry = new BufferGeometry()

geometry.setFromPoints(arr)

let material = new PointsMaterial({
  color: 'red',
  size: 20
})

let mesh = new Points(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

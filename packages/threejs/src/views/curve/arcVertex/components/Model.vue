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
  Points
} from 'three'

let { scene } = inject('three')

let s = 20,
  r = 100,
  n = (Math.PI * 2) / s

let arr = Array.from({ length: s }).reduce((target, item, i) => {
  let angle = n * i

  let x = Math.cos(angle) * r
  let y = Math.sin(angle) * r
  let z = 0
  target.push(x, y, z)

  return target
}, [])

const vertices = new Float32Array(arr)

let attribue = new BufferAttribute(vertices, 3)

let geometry = new BufferGeometry()
geometry.attributes.position = attribue

let material = new PointsMaterial({
  color: 'red',
  size: 10
})

let mesh = new Points(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

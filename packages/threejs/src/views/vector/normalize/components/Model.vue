<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3 } from 'three'
import gsap from 'gsap'
let { scene } = inject('three')

let sphere = new SphereGeometry(5)

let material = new MeshLambertMaterial({
  color: 'red'
})

let A = new Vector3(30, 30, 0)
let B = new Vector3(130, 80, 0)

let mesh1 = new Mesh(sphere, material)
mesh1.position.copy(A)

let mesh2 = new Mesh(sphere, material)
mesh2.position.copy(B)

let AB = B.clone().sub(A)
AB.normalize()

let L = AB.clone().multiplyScalar(180).add(mesh1.position)

gsap.to(mesh1.position, {
  x: L.x,
  y: L.y,
  z: L.z,
  duration: 2,
  repeat: -1
})

scene.add(mesh1, mesh2)
</script>
<style lang="less" scoped></style>

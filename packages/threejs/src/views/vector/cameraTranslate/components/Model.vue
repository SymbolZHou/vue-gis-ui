<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3, ArrowHelper } from 'three'
import gsap from 'gsap'

let { scene, camera, controls } = inject('three')

let sphere = new SphereGeometry(5)

let material = new MeshLambertMaterial({
  color: 'red'
})

let A = new Vector3(30, 30, 0)

let mesh = new Mesh(sphere, material)
mesh.position.copy(A)

let AB = A.clone().sub(camera.position)

let dir = AB.clone().normalize()

let L = dir
  .clone()
  .multiplyScalar(AB.length() - 200)
  .add(camera.position)

controls.target = A.clone()

const arrowHelper = new ArrowHelper(dir, camera.position, AB.length())
scene.add(mesh, arrowHelper)

gsap.to(camera.position, {
  x: L.x,
  y: L.y,
  z: L.z,
  duration: 2
})
</script>
<style lang="less" scoped></style>

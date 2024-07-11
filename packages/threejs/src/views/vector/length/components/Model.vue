<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3, Euler } from 'three'
import gsap from 'gsap'

let { scene } = inject('three')

let sphere = new SphereGeometry(10)

let material = new MeshLambertMaterial({
  color: 'red',
  transparent: true,
  opacity: 0.5
})
let material1 = new MeshLambertMaterial({
  color: 'green',
  transparent: true,
  opacity: 0.5
})
let material2 = new MeshLambertMaterial({
  color: 'blue'
})

let A = new Vector3(100, 100, 0)
let B = new Vector3(200, 200, 0)
let C = new Vector3(200, 300, 0)
console.log(C)
let mesh = new Mesh(sphere, material)
mesh.position.copy(A)

let mesh1 = mesh.clone()
mesh1.position.copy(B)
mesh1.material = material1

let AB = B.clone().sub(A) // 两个标量确定向量
let dir = AB.clone().normalize()

let euler = new Euler(0, 0, (45 * Math.PI) / 180)
dir.applyEuler(euler)

dir.multiplyScalar(300).add(mesh.position)

let mesh2 = mesh.clone()
// mesh2.position.set(0, 0, 0)
mesh2.material = material2
mesh2.scale.multiplyScalar(0.5)

gsap.to(mesh2.position, {
  ...dir,
  duration: 2
})

scene.add(mesh, mesh1, mesh2)
</script>
<style lang="less" scoped></style>

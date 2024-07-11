<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3, Matrix4 } from 'three'
import gsap from 'gsap'

let { scene } = inject('three')

let sphere = new SphereGeometry(2)

let material = new MeshLambertMaterial({
  color: 'red'
})

let mesh = new Mesh(sphere, material)

let matrix = new Matrix4()
// matrix.makeTranslation(100, 200, 300)
matrix.makeScale(2, 3, 4)

let matrix1 = new Matrix4().scale(new Vector3(2, 3, 4)).setPosition(100, 200, 300)

mesh.applyMatrix4(matrix)

scene.add(mesh)

console.log(matrix)
console.log(matrix1)
</script>
<style lang="less" scoped></style>

<template>
  <slot></slot>
</template>

<script setup>
import { BufferGeometry, BufferAttribute, MeshBasicMaterial, Mesh } from 'three'

let { scene } = inject('three')

let vertext = new Uint16Array([0, 0, 0, 100, 0, 0, 100, 100, 0, 0, 100, 0])
console.log(vertext.buffer)
let attr = new BufferAttribute(vertext, 3)

let geometry = new BufferGeometry()
geometry.attributes.position = attr

let material = new MeshBasicMaterial({
  color: 'blue'
})

const indexes = new Uint16Array([0, 1, 2, 0, 2, 3])
geometry.index = new BufferAttribute(indexes, 1)

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

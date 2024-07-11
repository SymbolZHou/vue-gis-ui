<template>
  <slot></slot>
</template>

<script setup>
import { CircleGeometry, MeshBasicMaterial, Mesh, TextureLoader, BufferAttribute } from 'three'
import panda from '@vue-demo/assets/panda.jpg'
let { scene } = inject('three')

let texture = new TextureLoader().load(panda)

let geometry = new CircleGeometry(100)

let material = new MeshBasicMaterial({
  map: texture
})
console.log(geometry.attributes.uv)
// 需要按照顶点的顺序
// let uv = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
// geometry.attributes.uv = new BufferAttribute(uv, 2)

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

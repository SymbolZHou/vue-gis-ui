<template>
  <slot></slot>
</template>

<script setup>
import {
  PlaneGeometry,
  BufferGeometry,
  MeshBasicMaterial,
  Mesh,
  TextureLoader,
  BufferAttribute
} from 'three'
import earth from '@vue-demo/assets/earth/earth.jpg'
let { scene } = inject('three')

let texture = new TextureLoader().load(earth)

let geometry = new PlaneGeometry(300, 100)

let material = new MeshBasicMaterial({
  map: texture
})

// 需要按照顶点的顺序
let uv = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0])
geometry.attributes.uv = new BufferAttribute(uv, 2)

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

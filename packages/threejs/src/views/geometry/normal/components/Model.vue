<template>
  <slot></slot>
</template>

<script setup>
import { BufferGeometry, BufferAttribute, MeshLambertMaterial, Mesh, DoubleSide } from 'three'

let { scene } = inject('three')

let vertext = new Float32Array([0, 0, 0, 100, 0, 0, 100, 100, 0, 0, 100, 0])

let attr = new BufferAttribute(vertext, 3)

let geometry = new BufferGeometry()
geometry.attributes.position = attr

let material = new MeshLambertMaterial({
  color: 0x0000ff,
  side: DoubleSide
})

const indexes = new Uint16Array([0, 1, 2, 0, 2, 3])
geometry.index = new BufferAttribute(indexes, 1)

const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])
geometry.attributes.normal = new BufferAttribute(normals, 3)

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

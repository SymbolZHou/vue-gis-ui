<template>
  <slot></slot>
</template>

<script setup>
import {
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  TextureLoader,
  RepeatWrapping,
  SRGBColorSpace
} from 'three'
import plane from '@vue-demo/assets/car/瓷砖.jpg'
let { scene } = inject('three')

let texture = new TextureLoader().load(plane)
texture.wrapS = RepeatWrapping
texture.wrapT = RepeatWrapping
texture.repeat.set(12, 12)
texture.colorSpace = SRGBColorSpace //设置纹理贴图编码方式和WebGL渲染器一致 要不然色差

let geometry = new PlaneGeometry(1000, 1000)

let material = new MeshBasicMaterial({
  map: texture,
  side: 2
})

let mesh = new Mesh(geometry, material)
mesh.rotateX(-90 * (Math.PI / 180))

scene.add(mesh)
</script>
<style lang="less" scoped></style>

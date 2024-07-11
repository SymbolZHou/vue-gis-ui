<template>
  <slot></slot>
</template>

<script setup>
import {
  PlaneGeometry,
  MeshLambertMaterial,
  Mesh,
  DoubleSide,
  TextureLoader,
  SRGBColorSpace,
  RepeatWrapping
} from 'three'
import planeImg from '@vue-demo/assets/car/水泥地.jpg'
let { scene } = inject('three')

let planeGeometry = new PlaneGeometry(6, 6)

// 加载树纹理贴图
var texture = new TextureLoader().load(planeImg)
texture.colorSpace = SRGBColorSpace //设置纹理贴图编码方式和WebGL渲染器一致 要不然色差

// 设置阵列
texture.wrapS = RepeatWrapping
texture.wrapT = RepeatWrapping
// uv两个方向纹理重复数量
// texture.repeat.set(6, 6) //注意选择合适的阵列数量

let material = new MeshLambertMaterial({
  color: 0x666666,
  side: DoubleSide,
  map: texture
})

let mesh = new Mesh(planeGeometry, material)
mesh.rotation.x = -90 * (Math.PI / 180)
mesh.receiveShadow = true

scene.add(mesh)
</script>
<style lang="scss" scoped></style>

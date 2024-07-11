<template>
  <slot></slot>
</template>

<script setup>
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import model from '@vue-demo/assets/phone/手机.glb'
import metallic from '@vue-demo/assets/phone/metallic.png'
import roughness from '@vue-demo/assets/phone/roughness.png'
import basecolor from '@vue-demo/assets/phone/basecolor.png'
import normal from '@vue-demo/assets/phone/normal.png'
import opacity from '@vue-demo/assets/phone/opacity.png'
import { Raycaster, Vector2, MeshStandardMaterial, TextureLoader, MathUtils } from 'three'
import gsap from 'gsap'

let { scene } = inject('three')

const loader = new GLTFLoader()

const raycaster = new Raycaster()

let { width, height, camera, canvasRef } = inject('three')

var texLoader = new TextureLoader()

loader.load(model, function (glb) {
  let phone = glb.scene.getObjectByName('手机')

  gsap.to(phone.rotation, {
    z: MathUtils.degToRad(360),
    repeat: -1,
    ease: 'none',
    duration: 5
  })

  phone.material = new MeshStandardMaterial({
    metalness: 1,
    roughness: 1,
    metalnessMap: texLoader.load(metallic),
    roughnessMap: texLoader.load(roughness),
    map: texLoader.load(basecolor), //颜色贴图
    alphaMap: texLoader.load(opacity), //alpha贴图
    normalMap: texLoader.load(normal), //法线贴图
    transparent: true //使用alphaMap，注意开启透明计算
  })

  phone.material.map.flipY = false
  phone.material.normalMap.flipY = false
  phone.material.metalnessMap.flipY = false
  phone.material.roughnessMap.flipY = false
  phone.material.alphaMap.flipY = false

  scene.add(phone)
})
</script>
<style lang="less" scoped></style>

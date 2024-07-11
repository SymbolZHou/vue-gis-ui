<template>
  <slot></slot>
</template>

<script setup>
import { Euler, Quaternion, Vector3 } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import plane from '@vue-demo/assets/飞机.glb'

let { scene, camera } = inject('three')

camera.position.set(20, 20, 20)

const loader = new GLTFLoader()

let euler = new Euler((45 * Math.PI) / 180, 0, 0)
// let quaternion = new Quaternion()
// quaternion.setFromUnitVectors(new Vector3(0, 0, -1), new Vector3(0, 1, 0))

loader.load(plane, function (model) {
  let fly = model.scene

  scene.add(fly)

  // fly.quaternion.copy(quaternion)
  fly.rotation.copy(euler)
})
</script>
<style lang="less" scoped></style>

<template>
  <slot></slot>
</template>

<script setup>
import { Quaternion, Vector3 } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import plane from '@vue-demo/assets/飞机.glb'
import gsap from 'gsap'

let { scene } = inject('three')

const loader = new GLTFLoader()

let options = {
  angle: 0
}

let model = await loader.loadAsync(plane)

let fly = model.scene
fly.name = 'fly'
fly.scale.set(3, 3, 3)
let p = fly.quaternion.clone()
let r = 100
let a = new Vector3(0, 0, -1)
let target = new Vector3(0, 0, 0)
fly.position.set(r, 50, 0)

gsap.to(options, {
  angle: Math.PI * 2,
  duration: 10,
  repeat: -1,
  ease: 'none',
  onUpdate() {
    let x = Math.cos(options.angle) * r
    let z = Math.sin(options.angle) * r
    fly.position.set(x, 50, z)

    let b = target.clone().sub(fly.position).normalize()

    let quaternion = new Quaternion()
    quaternion.setFromUnitVectors(a, b)
    let c = p.clone().multiply(quaternion)
    fly.quaternion.copy(c)
  }
})

scene.add(model.scene)
</script>
<style lang="less" scoped></style>

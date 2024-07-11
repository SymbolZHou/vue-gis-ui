<template>
  <slot></slot>
</template>

<script setup>
import { AnimationMixer, Group, Vector3 } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { loadParson, Animation } from '../utils'
import gsap from 'gsap'

let { scene, camera, canvasRef } = inject('three')

let model = await loadParson()
let person = model.scene
let cameraGroup = new Group()

cameraGroup.add(camera)
person.add(cameraGroup)
camera.position.set(0, 1.6, -5.5)
camera.lookAt(0, 1.6, 0) //对着人身上某个点
scene.add(person)

let { pressed } = useMousePressed()

let v = new Vector3(0, 0, 0)

let anim = new Animation(model)
anim.play('Idle')

useEventListener(canvasRef, 'mousemove', (e) => {
  if (!pressed.value) return
  person.rotation.y -= e.movementX / 600
  camera.rotation.x += e.movementY / 600
})

let jump = gsap.effects.jump(person.position, { paused: true })

const { w, s, a, d } = useMagicKeys()

let xTo = gsap.quickTo(person.position, 'x', { duration: 0.4 })
let zTo = gsap.quickTo(person.position, 'z', { duration: 0.4 })

onKeyStroke(' ', (e) => {
  if (jump.isActive()) return
  anim.play('Jump')
  jump.restart()
})

watch([w, s, a, d], () => {
  if (w.value || s.value) {
    anim.play('Run')
  } else {
    anim.play('Idle')
  }
})

useRafFn(() => {
  person.getWorldDirection(v)
  let dir = v.clone().normalize()
  let distance = dir.clone().multiplyScalar(3)

  if (w.value) {
    let target = person.position.clone().add(distance)
    xTo(target.x)
    zTo(target.z)
  }
  if (s.value) {
    let target = person.position.clone().sub(distance)
    xTo(target.x)
    zTo(target.z)
  }
})
</script>
<style lang="scss" scoped>
.btn {
  position: fixed;
  left: 100px;
  top: 100px;
}
</style>

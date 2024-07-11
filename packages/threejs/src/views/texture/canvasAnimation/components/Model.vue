<template>
  <slot></slot>
</template>

<script setup>
import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Texture,
  RepeatWrapping,
  SRGBColorSpace
} from 'three'

let { scene } = inject('three')
import gsap from 'gsap'

let canvas = document.createElement('canvas')
canvas.className = 'canvas'
canvas.width = 100
canvas.height = 100
let ctx = canvas.getContext('2d')

let texture = new Texture(canvas)

let geometry = new BoxGeometry(100, 100, 100)

let material = new MeshBasicMaterial({
  map: texture,
  // color: 'green',
  combine: 2
})

let mesh = new Mesh(geometry, material)

let option = {
  scale: 1
}
gsap.to(option, {
  scale: 0,
  duration: 1,
  yoyo: true,
  repeat: -1,
  onUpdate() {
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.scale(option.scale, option.scale)
    ctx.fillStyle = 'red'
    ctx.fillRect(-50, -50, 100, 100)
    ctx.restore()

    texture.needsUpdate = true
    texture.updateMatrix()
  }
})

// gsap.to(mesh.rotation, {
//   y: Math.PI * 2,
//   duration: 2,
//   repeat: -1,
//   ease: 'none'
// })
scene.add(mesh)
</script>
<style lang="scss">
.canvas {
  position: fixed;
  left: 100px;
  top: 100px;
  z-index: 999;
  background: #fff;
}
</style>

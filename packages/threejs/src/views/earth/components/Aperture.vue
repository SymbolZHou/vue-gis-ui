<template>
  <slot></slot>
</template>

<script setup>
import { SpriteMaterial, Sprite, TextureLoader } from 'three'
import img from '../img/地球光圈.png'

let { scene } = inject('three')
let { R } = inject('earth')

const map = new TextureLoader().load(img)

let material = new SpriteMaterial({
  transparent: true,
  map
})

let sprite = new Sprite(material)

sprite.scale.set(R * 3, R * 3, 1)

scene.add(sprite)
</script>
<style lang="scss" scoped></style>

<template>
  <Map>
    <EffectScatter v-for="item in data" :key="item[0]" :center="item"></EffectScatter>
  </Map>
</template>

<script setup>
import Map from './Map.vue'
import EffectScatter from './EffectScatter.vue'
import { random } from 'lodash-es'

let data = Array.from({ length: 100 }).map((item) => [random(100, 130, true), random(15, 30, true)])

import gsap from 'gsap'

let t1 = gsap.exportRoot()

setTimeout(() => {
  gsap.to(t1, { duration: 0.5, timeScale: 0 })
}, 3000)
</script>
<style lang="scss" scoped></style>

<template>
  <slot></slot>
</template>

<script setup>
import { Points, PointsMaterial, BufferGeometry } from 'three'
import { useAxios } from '@vueuse/integrations/useAxios'
import { lon2xyz } from '../utils'
import { chunk } from 'lodash-es'
import { promiseTimeout } from '@vueuse/core'
import pLimit from 'p-limit'
let { scene } = inject('three')
let { R } = inject('earth')

let { data } = useAxios('/mock/airports')

let material = new PointsMaterial({
  color: 'yellow',
  size: 0.4
})

let limit = pLimit(1)

watchOnce(data, (value) => {
  let c = chunk(value.data, value.data.length / 6)
  c.forEach((item) => {
    limit(async () => {
      let v = item.map((item) => lon2xyz(R, item.lon, item.lat))
      let point = new BufferGeometry()
      point.setFromPoints(v)
      let mesh = new Points(point, material)
      scene.add(mesh)

      await promiseTimeout(200)
    })
  })
})
</script>
<style lang="scss" scoped></style>

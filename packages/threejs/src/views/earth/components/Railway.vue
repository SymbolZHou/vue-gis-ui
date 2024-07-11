<template>
  <slot></slot>
</template>

<script setup>
import { BufferGeometry, LineBasicMaterial, Line } from 'three'
import { lon2xyz } from '../utils'
import { chunk } from 'lodash-es'
import { useAxios } from '@vueuse/integrations/useAxios'
import pLimit from 'p-limit'
import { promiseTimeout } from '@vueuse/core'

let { scene } = inject('three')
let { R } = inject('earth')

let material = new LineBasicMaterial({
  color: 'yellow'
})

let { data } = useAxios('/mock/railway')

let limit = pLimit(1)

watchOnce(data, (value) => {
  let _data = chunk(value, value.length / 5)

  _data.forEach((features) => {
    limit(async () => {
      features.forEach((coordinates) => {
        let v = coordinates.map((option) => {
          return lon2xyz(R, option[0], option[1])
        })

        let geometry = new BufferGeometry()
        geometry.setFromPoints(v)
        let line = new Line(geometry, material)

        scene.add(line)
      })
      await promiseTimeout(200)
    })
  })
})
</script>
<style lang="scss" scoped></style>

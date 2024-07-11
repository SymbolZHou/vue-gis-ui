<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  Group,
  Line,
  Shape,
  ShapeGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Vector3
} from 'three'
let { scene } = inject('three')
import world from '../world.json'
import { lon2xyz } from '../utils'

let { R } = inject('earth')

let materialLine = new LineBasicMaterial({
  color: 0x00aaaa
})
let materialSurface = new MeshBasicMaterial({
  color: 'yellow'
})

function createLine(arr) {
  let geometry = new BufferGeometry()
  geometry.setFromPoints(arr)

  let line = new Line(geometry, materialLine)

  return line
}
function createPolygon(arr) {
  let shape = new Shape(arr)
  let geometry = new ShapeGeometry(shape)
  // geometry.setFromPoints(arr)

  let mesh = new Mesh(geometry, materialSurface)

  return mesh
}

let group = new Group()

world.features.forEach((item) => {
  if (item.geometry.type == 'Polygon') {
    item.geometry.coordinates = [item.geometry.coordinates]
    item.geometry.type = 'MultiPolygon'
  }

  item.geometry.coordinates.forEach((item) => {
    item.forEach((option) => {
      let arr = option.reduce((target, one) => {
        let { x, y, z } = lon2xyz(R, one[0], one[1])
        target.push(new Vector3(x, y, z))

        return target
      }, [])
      group.add(createLine(arr))
    })
  })
})

scene.add(group)
</script>
<style lang="scss" scoped></style>

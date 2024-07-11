<template>
  <slot></slot>
</template>

<script setup>
import {
  SphereGeometry,
  MeshBasicMaterial,
  Vector3,
  BufferGeometry,
  Mesh,
  TextureLoader,
  SRGBColorSpace,
  LineBasicMaterial,
  Line,
  Group
} from 'three'
import img from '../img/earth.png'
import { lon2xyz } from '../utils'
import world from '../world.json'

let { scene } = inject('three')

let R = 100

provide('earth', {
  R
})

function createSphere() {
  let texture = new TextureLoader().load(img)
  texture.colorSpace = SRGBColorSpace //设置纹理贴图编码方式和WebGL渲染器一致 要不然色差

  let sphere = new SphereGeometry(100)

  let material = new MeshBasicMaterial({
    map: texture,
    side: 2,
    transparent: true
    // opacity: 0.5
  })
  let mesh = new Mesh(sphere, material)
  return mesh
}

scene.add(createSphere())

let materialLine = new LineBasicMaterial({
  color: 0x00aaaa
})

function createLine(arr) {
  let geometry = new BufferGeometry()
  geometry.setFromPoints(arr)

  let line = new Line(geometry, materialLine)

  return line
}

let group = new Group()
scene.add(group)

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
</script>
<style lang="less" scoped></style>

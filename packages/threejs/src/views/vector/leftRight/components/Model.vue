<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3, ArrowHelper } from 'three'
import { keyBy, get } from 'lodash-es'
import gsap from 'gsap'

let { scene } = inject('three')

let sphere1 = new SphereGeometry(5)
let material1 = new MeshLambertMaterial({
  color: 'red'
})
let sphere2 = new SphereGeometry(5)
let material2 = new MeshLambertMaterial({
  color: 'green'
})
let sphere3 = new SphereGeometry(5)
let material3 = new MeshLambertMaterial({
  color: 'blue'
})

let mesh1 = new Mesh(sphere1, material1)
let mesh2 = new Mesh(sphere2, material2)
mesh2.position.set(100, 0, 0)
let mesh3 = new Mesh(sphere3, material3)
mesh3.position.set(0, 100, 0)

const createArrow = (A, B, color) => {
  let AB = B.clone().sub(A.clone())
  let length = AB.length()
  let dir = AB.clone().normalize()

  let arrow = new ArrowHelper(dir, A, length, color)

  return {
    v: AB,
    length,
    dir,
    arrow
  }
}

let { arrow: arrow1, v: v1 } = createArrow(mesh1.position, mesh2.position, 'green')
let { arrow: arrow2, v: v2 } = createArrow(mesh1.position, mesh3.position, 'red')

let v3 = v1.clone().cross(v2.clone())
let arrow3 = new ArrowHelper(v3.clone().normalize(), mesh1.position, v3.length() / 30, '#fff')

let v4 = v2.clone().cross(v1.clone())
let arrow4 = new ArrowHelper(v4.clone().normalize(), mesh1.position, v4.length() / 30, 'yellow')

scene.add(mesh1, mesh2, mesh3, arrow1, arrow2, arrow3, arrow4)
</script>
<style lang="less" scoped></style>

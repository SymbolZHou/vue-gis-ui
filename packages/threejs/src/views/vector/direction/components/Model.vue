<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, ArrowHelper, Vector3 } from 'three'

let { scene } = inject('three')

let sphere1 = new SphereGeometry(5)
let material1 = new MeshLambertMaterial({
  color: 'red'
})
let sphere2 = new SphereGeometry(5)
let material2 = new MeshLambertMaterial({
  color: 'green'
})

let mesh1 = new Mesh(sphere1, material1)
mesh1.position.set(0, 0, 30)

let mesh2 = new Mesh(sphere2, material2)
mesh2.position.set(-100, 0, -40)

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

// 前1后0左1右0
function direction(A, B) {
  let O = new Vector3(0, 0, -1)
  let AB = B.clone().sub(A)
  let dir = AB.clone().normalize()

  let cos = O.clone().dot(dir)
  let v = O.clone().cross(AB)

  scene.add(new ArrowHelper(v.clone().normalize(), A, v.length(), 'blue'))
  return cos > 0 && v.y > 0 ? [1, 1] : cos <= 0 && v.y > 0 ? [0, 1] : v.y > 0 ? [1, 1] : [1, 0]
  // if (cos > 0) {
  //   return v.y > 0 ? [1, 1] : [1, 0]
  // } else {
  //   return v.y > 0 ? [0, 1] : [0, 0]
  // }
}

let d = direction(mesh1.position, mesh2.position)
console.log(d)
scene.add(mesh1, mesh2, arrow1)
</script>
<style lang="less" scoped></style>

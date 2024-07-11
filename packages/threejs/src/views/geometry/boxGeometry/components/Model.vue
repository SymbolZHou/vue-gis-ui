<template>
  <slot></slot>
</template>

<script setup>
import {
  MeshPhongMaterial,
  Mesh,
  ExtrudeGeometry,
  BoxGeometry,
  Shape,
  Vector3,
  DoubleSide,
  MathUtils,
  ArrowHelper
} from 'three'

let { scene, camera } = inject('three')

let geometry = new BoxGeometry(100, 100, 100)

let material = new MeshPhongMaterial({
  color: 'red',
  side: DoubleSide,
  transparent: true,
  opacity: 0.2
})

let mesh = new Mesh(geometry, material)

let m1 = new Matrix4().makeTranslation(100, 0, 0)
let m2 = new Matrix4().makeRotationAxis(new Vector3(0, -1, 0), MathUtils.degToRad(45))

mesh.applyMatrix4(m2)
// mesh.applyMatrix4(m2.multiply(m1))

const arrowHelper = new ArrowHelper(new Vector3(0, 1, 0), new Vector3(100, 0, 0), 100)

scene.add(mesh, arrowHelper)
</script>
<style lang="less" scoped></style>

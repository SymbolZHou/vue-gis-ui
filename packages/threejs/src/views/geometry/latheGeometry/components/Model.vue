<template>
  <slot></slot>
</template>

<script setup>
import {
  BufferGeometry,
  LineCurve,
  CurvePath,
  LineBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  SplineCurve,
  LatheGeometry,
  CubicBezierCurve3,
  Line,
  Mesh,
  Vector2,
  Vector3,
  ArcCurve,
  TubeGeometry,
  CatmullRomCurve3,
  DoubleSide
} from 'three'

let { scene } = inject('three')

let points = [new Vector3(50, 50), new Vector3(20, 0), new Vector3(50, -50)]
let path = new CatmullRomCurve3(points)

const geometry = new LatheGeometry(path.getPoints(20), 40)

let material = new MeshPhongMaterial({
  color: 'green',
  side: DoubleSide
})

let mesh = new Mesh(geometry, material)

scene.add(mesh)
</script>
<style lang="less" scoped></style>

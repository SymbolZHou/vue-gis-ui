<template>
  <slot></slot>
</template>

<script setup>
import { SphereGeometry, MeshLambertMaterial, Mesh, Vector3 } from 'three'
import gsap from 'gsap'

let { scene, controls, camera } = inject('three')

let geometrys = [new Vector3(0, 0, 10), new Vector3(0, 100, 0), new Vector3(60, 0, 0)]
let color = ['red', 'green', 'blue']

let [A, B, C] = geometrys

let AB = B.clone().sub(A).normalize()
let AC = C.clone().sub(A).normalize()

let cos = AB.dot(AC)
console.log((Math.acos(cos) / Math.PI) * 180)

// 如结果大于0，则方向基本相同，夹角在0°到90°之间
// 如结果等于0，则正交，相互垂直
// 如效果小于0，则方向基本相反，夹角在90°到180°之间

let list = geometrys.map((item, i) => {
  let sphere = new SphereGeometry(5)
  let material = new MeshLambertMaterial({
    color: color[i]
  })
  let mesh = new Mesh(sphere, material)
  mesh.position.copy(item)

  return mesh
})

scene.add(...list)
console.log(camera.matrix.clone().invert())
</script>
<style lang="less" scoped></style>

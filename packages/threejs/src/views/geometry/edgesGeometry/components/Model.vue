<template>
  <slot></slot>
</template>

<script setup>
import {
  MeshPhongMaterial,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  ExtrudeGeometry,
  BoxGeometry,
  EdgesGeometry,
  Shape,
  Vector2,
  DoubleSide,
  Raycaster
} from 'three'

let { scene, canvasRef, width, height, camera } = inject('three')

let points = [
  new Vector2(-50, 50),
  new Vector2(-50, -50),
  new Vector2(50, -50),
  new Vector2(50, 50)
]
let shape = new Shape(points)

let holeRect = new Shape([
  new Vector2(-10, 10),
  new Vector2(-10, -10),
  new Vector2(10, -10),
  new Vector2(10, 10)
])

shape.holes.push(holeRect)

let geometry = new ExtrudeGeometry(shape, {
  depth: 20
})

let material = new MeshPhongMaterial({
  color: 'red',
  // side: DoubleSide
  transparent: true,
  opacity: 0.5
})

let mesh = new Mesh(geometry, material)
mesh.name = 'ExtrudeGeometry'

let edges = new EdgesGeometry(geometry)
const line = new LineSegments(edges, new LineBasicMaterial({ color: 0xffffff, linewidth: 10 }))
line.name = 'line'

scene.add(mesh)

const raycaster = new Raycaster()
useEventListener(canvasRef, 'mousemove', (ev) => {
  const x = (ev.offsetX / width.value) * 2 - 1
  const y = -(ev.offsetY / height.value) * 2 + 1
  raycaster.setFromCamera(new Vector2(x, y), camera)

  const intersects = raycaster.intersectObjects([mesh], false)

  if (intersects.length) {
    intersects[0].object.add(line)
  } else {
    mesh.remove(line)
  }
})
</script>
<style lang="less" scoped></style>

<template>
  <div class="btn-group">
    <n-button type="primary" @click="onAddShpere">添加小球</n-button>
  </div>
</template>

<script setup>
import { SphereGeometry, MeshBasicMaterial, Mesh, Group } from 'three'
import * as CANNON from 'cannon-es'
import { random } from 'lodash-es'

let { scene, camera } = inject('three')
camera.position.set(3, 4, 5)

var world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0)
})

let planeMaterial = new CANNON.Material()
let plane = new CANNON.Body({
  shape: new CANNON.Plane(),
  mess: 0,
  material: planeMaterial
})
plane.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
world.addBody(plane)

let R = 0.02

const createSphere = () => {
  let shpere = new SphereGeometry(R)
  let material = new MeshBasicMaterial({
    color: 'red'
  })
  let mesh = new Mesh(shpere, material)

  let shpereMaterial = new CANNON.Material()
  var sphereBody = new CANNON.Body({
    mass: 1 / 1000, // kg
    position: new CANNON.Vec3(random(-3, 3, true), random(2, 3, true), random(-3, 3, true)), // m
    shape: new CANNON.Sphere(R),
    material: shpereMaterial
  })

  mesh.body = sphereBody
  mesh.shpereMaterial = shpereMaterial

  return {
    mesh,
    sphereBody,
    shpereMaterial
  }
}

let group = new Group()

scene.add(group)

const render = ({ delta }) => {
  world.step(1 / 60)
  group.traverse((mesh) => {
    if (mesh.type !== 'Mesh') return
    mesh.position.copy(mesh.body.position)
  })
}

useRafFn(render)

const onAddShpere = () => {
  Array.from({ length: 100 }).forEach(() => {
    let { mesh } = createSphere()
    world.addBody(mesh.body)
    const contactMaterial = new CANNON.ContactMaterial(planeMaterial, mesh.shpereMaterial, {
      restitution: 0.8
    })
    world.addContactMaterial(contactMaterial)
    group.add(mesh)
  })
}
</script>

<style lang="scss" scoped>
.btn-group {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
</style>

<template>
  <slot></slot>
</template>

<script setup>
import * as CANNON from 'cannon-es'

var world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0)
})

let R = 0.02
let shpereMaterial = new CANNON.Material()
var sphere = new CANNON.Body({
  mass: 1 / 1000, // kg
  position: new CANNON.Vec3(0, 1, 0), // m
  shape: new CANNON.Sphere(R),
  material: shpereMaterial
})

let planeMaterial = new CANNON.Material()
let plane = new CANNON.Body({
  shape: new CANNON.Plane(),
  mess: 0,
  material: planeMaterial
})
plane.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
world.addBody(plane)

const contactMaterial = new CANNON.ContactMaterial(planeMaterial, shpereMaterial, {
  restitution: 0.8
})
world.addContactMaterial(contactMaterial)

provide('gravity', {
  R,
  sphere,
  world
})
</script>

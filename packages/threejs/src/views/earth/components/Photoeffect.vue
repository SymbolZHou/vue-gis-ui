<template>
  <slot></slot>
</template>

<script setup>
import {
  MeshBasicMaterial,
  TextureLoader,
  PlaneGeometry,
  Mesh,
  Group,
  Vector3,
  Quaternion
} from 'three'
import { useAxios } from '@vueuse/integrations/useAxios'
import { lon2xyz } from '../utils'
import img from '../img/贴图.png'
import img1 from '../img/光柱.png'
import img2 from '../img/标注光圈.png'
import gsap from 'gsap'

let { scene } = inject('three')
let { R } = inject('earth')

let { data } = useAxios('/mock/column')

const createAperture = () => {
  const texture = new TextureLoader().load(img)

  let plane = new PlaneGeometry(2, 2)

  let material = new MeshBasicMaterial({
    map: texture,
    transparent: true
  })

  let mesh = new Mesh(plane, material)

  return mesh
}

let aperture = createAperture()

const createColumn = () => {
  const texture = new TextureLoader().load(img1)
  let height = R / 5

  let plane = new PlaneGeometry(R * 0.04, height)
  plane.rotateX(Math.PI / 2)
  plane.translate(0, 0, height / 2)

  let material = new MeshBasicMaterial({
    map: texture,
    color: 'red',
    side: 2,
    transparent: true
  })

  let mesh = new Mesh(plane, material)
  return mesh
}

let column = createColumn()

const createEffect = () => {
  const texture = new TextureLoader().load(img2)

  let plane = new PlaneGeometry(4, 4)

  let material = new MeshBasicMaterial({
    map: texture,
    color: 0x22ffcc,
    transparent: true,
    depthWrite: false
  })
  let mesh = new Mesh(plane, material)
  mesh.name = 'effect'
  return mesh
}
let effect = createEffect()

let scale = {
  x: 1,
  y: 1,
  z: 1,
  opacity: 0
}

let g

watchOnce(data, (value) => {
  let meshGroup = value.data.map((item) => {
    let { x, y, z } = lon2xyz(R, item.lon, item.lat)
    let group = new Group()
    group.name = 'proto'
    group.position.set(x, y, z)

    let quaternion = new Quaternion()
    quaternion.setFromUnitVectors(new Vector3(0, 0, 1), new Vector3(x, y, z).normalize())
    group.quaternion.multiply(quaternion)

    let $a = aperture.clone()
    let $b = column.clone()
    let e = effect.clone()

    group.add($a, $b, e)

    return group
  })
  scene.add(...meshGroup)

  g = gsap.to(scale, {
    keyframes: {
      '50%': {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    stagger: 0.2,
    duration: 4,
    repeat: -1,
    ease: 'none',
    onUpdate() {
      scene.traverse((child) => {
        if (child.name !== 'proto') return
        let effect = child.getObjectByName('effect')
        effect.scale.set(scale.x, scale.y, scale.z)
        effect.material.opacity = scale.opacity
      })
    }
  })
})

onUnmounted(() => {
  g.revert()
})
</script>
<style lang="scss" scoped></style>

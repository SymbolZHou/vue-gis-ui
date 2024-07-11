<template>
  <slot></slot>
</template>

<script setup>
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import model from '@vue-demo/assets/car/gltf/轿车.gltf'
import {
  MeshStandardMaterial,
  Group,
  CubeTextureLoader,
  Raycaster,
  MeshPhysicalMaterial
} from 'three'

let envMap = new URL('@vue-demo/assets/car/envMap', import.meta.url).href + '/'

var textureCube = new CubeTextureLoader()
  .setPath(envMap)
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])

let { scene } = inject('three')

const loader = new GLTFLoader()

let group = new Group()

const load = (url) => {
  return new Promise((resolve) => {
    loader.load(url, function (mode) {
      resolve(mode)
    })
  })
}

onMounted(async () => {
  if (group.children.length) return
  scene.add(group)

  let glb = await load(model)

  glb.scene.castShadow = true
  glb.scene.traverse((item) => {
    if (item.type != 'Mesh') return

    if (item.name.includes('高光金属')) {
      item.material = new MeshStandardMaterial({
        color: item.material.color,
        metalness: 1,
        roughness: 0.2,
        envMapIntensity: 1.0
      })
    } else if (item.name.includes('后视镜')) {
      item.material = new MeshStandardMaterial({
        metalness: 1,
        roughness: 0
      })
    } else if (item.name.includes('玻璃')) {
      item.material = new MeshPhysicalMaterial({
        // color: '#000',
        metalness: 0,
        roughness: 0,
        transparent: true,
        transmission: 1 //transmission替代opacity                    envMapIntensity: 2.5,
      })
    } else if (item.name.includes('外壳')) {
      item.material = new MeshPhysicalMaterial({
        color: 'yellow', //灰色
        clearcoat: 1,
        // clearcoatRoughness: 0.0,
        metalness: 1,
        roughness: 0.8,
        envMapIntensity: 1
      })
    }

    item.material.envMap = textureCube
  })

  group.add(glb.scene)
})

// useEventListener(canvasRef, 'click', (ev) => {
//   const x = (ev.offsetX / width.value) * 2 - 1
//   const y = -(ev.offsetY / height.value) * 2 + 1

//   raycaster.setFromCamera(new Vector2(x, y), camera)

//   // door.rotateY(-70 * (Math.PI / 180))

//   const intersects = raycaster.intersectObjects(group.children)

//   console.log(intersects)
// })
const openLeftFront = () => {}
const openLeftRear = () => {}
</script>
<style lang="less" scoped></style>

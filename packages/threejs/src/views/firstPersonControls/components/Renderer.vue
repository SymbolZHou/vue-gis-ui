<template>
  <div class="container" ref="containerRef">
    <!-- <canvas ref="canvasRef" :width="width" :height="height"></canvas> -->
    <slot></slot>
  </div>
</template>

<script setup>
import {
  WebGLThree,
  Scene,
  AxesHelper,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
  GridHelper,
  DirectionalLightHelper,
  Clock
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS2DThree } from 'three/addons/Threes/CSS2DThree.js'

let containerRef = ref()
let canvasRef = document.createElement('canvas')
const { width, height } = useWindowSize()
canvasRef.width = width.value
canvasRef.height = height.value

let scene = new Scene()

//辅助观察的坐标系
const axesHelper = new AxesHelper(1000)
scene.add(axesHelper)

const gridHelper = new GridHelper(400, 10)
scene.add(gridHelper)

const ambient = new AmbientLight(0xffffff, 2)
scene.add(ambient)

/**
 * 光源设置
 */
// 平行光1
var light = new DirectionalLight(0xffffff, 2)
light.position.set(300, 300, 300)
light.castShadow = true
scene.add(light)

// const light = new PointLight('#fff')
// light.position.set(400, 600, 200)
// light.castShadow = true
// scene.add(light)

// scene.add(new DirectionalLightHelper(light, 5))

//相机
const camera = new PerspectiveCamera(50, width.value / height.value, 1, 10000)
camera.position.set(360, 420, 473)

const css2dThree = new CSS2DThree()
css2dThree.setSize(width.value, height.value)
css2dThree.domElement.className = 'mark-layer'

let Three = new WebGLThree({
  antialias: true,
  canvas: canvasRef
})
Three.setSize(width.value, height.value)
Three.shadowMap.enabled = true
Three.outputColorSpace = SRGBColorSpace

// let controls = new OrbitControls(camera, Three.domElement)
// controls.enableDamping = true

onMounted(() => {
  containerRef.value.appendChild(Three.domElement)
  containerRef.value.appendChild(css2dThree.domElement)
})

window.onresize = function () {
  Three.setSize(width.value, height.value)
  css2dThree.setSize(width.value, height.value)
  camera.aspect = width.value / height.value
  camera.updateProjectionMatrix()
}

const render = ({ delta }) => {
  Three.render(scene, camera)
  css2dThree.render(scene, camera)
  // controls.update()
}

useRafFn(render)

provide('three', {
  Three,
  scene,
  canvasRef,
  camera,
  width,
  height,
  // controls,
  render
})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  position: relative;
}
</style>

<style lang="scss">
.mark-layer {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
</style>

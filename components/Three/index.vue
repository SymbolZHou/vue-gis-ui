<template>
  <div class="container" ref="containerRef" v-bind="$attrs">
    <!-- <canvas ref="canvasRef" :width="width" :height="height"></canvas> -->
    <slot></slot>
  </div>
</template>

<script setup>
import {
  WebGLRenderer,
  Scene,
  AxesHelper,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
  GridHelper
} from "three"
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
import {CSS2DRenderer} from "three/addons/renderers/CSS2DRenderer.js"
import {h, onUnmounted, render as vueRender} from "vue"

defineOptions({
  name: "Three"
})

let containerRef = ref()
let {width, height} = useElementSize(containerRef)

let vnode = h("canvas")
vueRender(vnode, document.createElement("div"))

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

//相机
const camera = new PerspectiveCamera(50, width.value / height.value, 1, 10000)
camera.position.set(360, 420, 473)

const css2dRenderer = new CSS2DRenderer()
css2dRenderer.setSize(width.value, height.value)
css2dRenderer.domElement.className = "mark-layer"

let renderer = new WebGLRenderer({
  antialias: true,
  canvas: vnode.el
})
renderer.setSize(width.value, height.value)
renderer.shadowMap.enabled = true
renderer.outputColorSpace = SRGBColorSpace

let controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement)
  containerRef.value.appendChild(css2dRenderer.domElement)
})

const resize = function () {
  renderer.setSize(width.value, height.value)
  css2dRenderer.setSize(width.value, height.value)
  camera.aspect = width.value / height.value
  camera.updateProjectionMatrix()
}

useResizeObserver(containerRef, resize)

const render = ({delta}) => {
  renderer.render(scene, camera)
  css2dRenderer.render(scene, camera)
  controls.update()
}

useRafFn(render)

onUnmounted(() => {
  renderer.dispose()
})

provide("three", {
  renderer,
  scene,
  camera,
  controls,
  render
})
</script>

<style lang="scss" scoped>
.container {
  // height: 100vh;
  width: 100%;
  height: 100%;
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

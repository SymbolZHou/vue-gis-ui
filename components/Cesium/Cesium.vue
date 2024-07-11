<template>
  <div class="cesium" ref="containerRef">
    <slot></slot>
  </div>
</template>

<script setup>
import {h, render} from "vue"
import * as Cesium from "cesium"

defineOptions({
  name: "Cesium"
})

let props = defineProps({
  defaultOptions: {
    type: Object,
    default: () => ({})
  }
})

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZWE3MTE3Mi04MDk3LTQwOTItOGQyNC01ZTMxOGExMmM1ZWYiLCJpZCI6OTkyNTAsImlhdCI6MTcxOTgwNDI3MH0.S4AbBU8o-IjJH3twiwm1PaALXaYyJP0215Z8I1ruwuU"
let tk = "0f233d6b97b4a74b221a3869ff542b39"

let containerRef = ref()
let vnode = h("div", {
  style: {
    width: "100%",
    height: "100%"
  }
})

render(vnode, document.createElement("div"))

let viewer = new Cesium.Viewer(vnode.el, {
  selectionIndicator: false, //是否显示选取指示器组件
  shouldAnimate: false,
  shadows: true,
  geocoder: false, //是否显示地名查找控件
  sceneModePicker: false, //是否显示投影方式控件
  navigationHelpButton: false, //是否显示帮助信息控件
  baseLayerPicker: false, //是否显示图层选择控件
  homeButton: false, //是否显示Home按钮
  fullscreenButton: false, //是否显示全屏按钮
  animation: false, //左下角的动画控件的显示
  shouldAnimate: false, //控制模型动画
  timeline: false, //底部的时间轴
  selectionIndicator: false,
  infoBox: false,
  baseLayer: new Cesium.ImageryLayer.fromWorldImagery(),
  terrain: Cesium.Terrain.fromWorldTerrain({
    // 地形
    requestWaterMask: true, // 水特效
    requestVertexNormals: true
  })
  // skyBox: new Cesium.SkyBox({
  //   //天空盒
  //   sources: {
  //     positiveX: "stars/TychoSkymapII.t3_08192x04096_80_px.jpg",
  //     negativeX: "stars/TychoSkymapII.t3_08192x04096_80_mx.jpg",
  //     positiveY: "stars/TychoSkymapII.t3_08192x04096_80_py.jpg",
  //     negativeY: "stars/TychoSkymapII.t3_08192x04096_80_my.jpg",
  //     positiveZ: "stars/TychoSkymapII.t3_08192x04096_80_pz.jpg",
  //     negativeZ: "stars/TychoSkymapII.t3_08192x04096_80_mz.jpg"
  //   }
  // })
})

onMounted(async () => {
  containerRef.value.appendChild(viewer.container)
})

onUnmounted(() => {
  if (viewer && !viewer.isDestroyed()) {
    viewer.destroy()
  }
})

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(...props.defaultOptions.center, 5000),
  duration: 1
})

provide("cesium", {
  viewer
})
</script>

<style>
.cesium {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
.cesium-viewer-bottom {
  display: none;
}
</style>

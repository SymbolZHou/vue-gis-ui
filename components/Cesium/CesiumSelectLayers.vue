<template>
  <SelectLayers v-model:value="value" :data="list" v-bind="$attrs"></SelectLayers>
</template>

<script setup>
import * as Cesium from "cesium"
import SelectLayers from "../Map/SelectLayers"
import {list} from "../Openlayers/config"

defineOptions({
  name: "CesiumSelectLayers"
})

let {viewer} = inject("cesium")

let value = defineModel("value", {
  type: String,
  default: "1"
})

let tk = "0f233d6b97b4a74b221a3869ff542b39"

viewer.imageryLayers.add(
  new Cesium.ImageryLayer(
    new Cesium.UrlTemplateImageryProvider({
      url: `http://t2.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${tk}`
    })
  )
)
// onMounted(async () => {
//   const provider = await Cesium.SingleTileImageryProvider.fromUrl(
//     new URL("../Openlayers/images/earth.jpg", import.meta.url).href
//   )
//   viewer.imageryLayers.add(new Cesium.ImageryLayer(provider))
// })

// watch(
//   value,
//   (value, oldValue) => {
//     list._map[value].cesiumLayers.forEach(layer => {
//       viewer.imageryLayers.add(layer)
//     })

//     if (oldValue) {
//       list._map[oldValue].cesiumLayers.forEach(layer => {
//         viewer.imageryLayers.remove(layer)
//       })
//     }
//   },
//   {
//     immediate: true
//   }
// )
</script>

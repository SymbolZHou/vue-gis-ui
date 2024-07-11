<template>
  <div class="map" ref="mapRef">
    <slot></slot>
  </div>
</template>

<script setup>
import Map from "ol/Map"
import MousePosition from "ol/control/MousePosition"
import {format as formatAxirs} from "ol/coordinate"
import "ol/ol.css"
import {list} from "./config"

defineOptions({
  name: "Openlayers"
})

let mapRef = ref()

var map = new Map({
  layers: [list[0].layers],
  controls: [
    new MousePosition({
      coordinateFormat: function (coordinate) {
        return formatAxirs(coordinate, "经度:{x} 纬度:{y}", 6)
      },
      projection: "EPSG:4326",
      className: "custom-mouse-position"
    })
  ]
})

onMounted(() => {
  map.setTarget(mapRef.value)
})

onUnmounted(() => {
  map.setTarget(null)
  map = null
})

provide("openlayers", {
  map
})
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

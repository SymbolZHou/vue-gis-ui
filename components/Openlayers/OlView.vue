<template>
  <slot></slot>
</template>

<script setup>
import View from "ol/View"
import {fromLonLat} from "ol/proj"
defineOptions({
  name: "OlView"
})

let props = defineProps({
  defaultOptions: {
    type: Object,
    default: () => ({})
  }
})

let {map} = inject("openlayers")

let view = new View({
  zoom: 10,
  minZoom: 0,
  maxZoom: 14,
  constrainResolution: true,
  projection: "EPSG:4326",
  center: [113.25, 22.54],
  ...props.defaultOptions
  // center: fromLonLat(props.defaultOptions.center)
})

map.setView(view)

provide("view", {
  view
})
</script>
<style lang="scss" scoped></style>

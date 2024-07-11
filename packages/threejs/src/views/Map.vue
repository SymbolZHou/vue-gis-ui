<template>
  <div id="container" style="height: 100vh">
    <slot></slot>
  </div>
</template>

<script setup>
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import MousePosition from 'ol/control/MousePosition'
import { format as formatAxirs } from 'ol/coordinate'
let tk = 'ce62df9dd155c78d0d3a96652168cc71'

let view = new View({
  center: [118.144657, 20.944429],
  zoom: 10,
  projection: 'EPSG:4326'
})

var map = new Map({
  view,
  layers: [
    new TileLayer({
      source: new XYZ({
        url: `http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tk}`
      })
    }),
    new TileLayer({
      source: new XYZ({
        url: `http://t1.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tk}`
      })
    })
  ],
  controls: [
    new MousePosition({
      coordinateFormat: function (coordinate) {
        return formatAxirs(coordinate, '经度:{x} 纬度:{y}', 2)
      },
      projection: 'EPSG:4326',
      className: 'custom-mouse-position'
    })
  ]
})

onMounted(() => {
  map.setTarget(document.querySelector('#container'))
})

provide('ol', {
  map,
  view
})
</script>

<template>
  <slot></slot>
</template>

<script setup>
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import { Style, Circle, Fill, Text } from 'ol/style'
import { Point } from 'ol/geom'
import Feature from 'ol/Feature.js'
import { Boat } from '@vue-demo/components/Openlayers/shape/boat'
import { useStore } from '../config'

let store = useStore()

let { map } = inject('openlayers')

let source = new VectorSource()

let vectorLayer = new VectorLayer({
  source
})
map.addLayer(vectorLayer)

watchEffect(() => {
  source.clear()

  store.boat.forEach((item) => {
    let feature = new Feature(new Point([item.lat, item.lng]))

    feature.boat = new Boat({
      x: 100,
      y: 100,
      w: 20,
      h: 40
    })

    feature.setStyle(
      new Style({
        renderer([x, y], { context }) {
          feature.boat.x = x
          feature.boat.y = y
          feature.boat.rotate = item.rotate
          feature.boat.render(context)
        }
      })
    )

    source.addFeature(feature)
  })
})
</script>
<style lang="scss" scoped></style>

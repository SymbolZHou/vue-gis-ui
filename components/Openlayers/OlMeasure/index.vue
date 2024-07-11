<template>
  <NButtonGroup vertical size="tiny" class="OlMeasure">
    <slot></slot>
    <n-popover trigger="hover" placement="left">
      <template #trigger>
        <NButton :disabled="!current" type="error" @click="onClose">
          <RemixIcon icon="close-large-fill"></RemixIcon>
        </NButton>
      </template>
      <span>关闭</span>
    </n-popover>
  </NButtonGroup>
</template>

<script setup>
import {Style, Stroke, Fill, Circle} from "ol/style"
import VectorLayer from "ol/layer/Vector.js"
import VectorSource from "ol/source/Vector.js"

defineOptions({
  name: "OlMeasure"
})

let {map} = inject("openlayers")

// {'Point'}
// {'LineString'}
// {'LinearRing'}
// {'Polygon'}
// {'MultiPoint'}
// {'MultiLineString'}
// {'MultiPolygon'}
// {'GeometryCollection'}
// {'Circle'}

let style = new Style({
  fill: new Fill({
    color: "rgba(0, 0, 255, 0.2)"
  }),
  stroke: new Stroke({
    color: "yellow",
    lineDash: [10, 10],
    width: 2
  }),
  image: new Circle({
    radius: 5,
    stroke: new Stroke({
      color: "rgba(0, 0, 0, 0.7)"
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 0.2)"
    })
  })
})

let source = new VectorSource()

let layer = new VectorLayer({
  source,
  style,
  zIndex: Infinity
})
map.addLayer(layer)

let current = ref(null)

watch(current, () => {
  source.clear()
})

const onClose = () => {
  current.value = null
}

provide("OlMeasure", {
  source,
  layer,
  current
})
</script>
<style lang="scss" scoped>
.OlMeasure {
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 1;
}
</style>

<template>
  <div ref="scaleLineRef" class="scaleLine" v-bind="$attrs"></div>
</template>

<script setup>
import {ScaleLine} from "ol/control"

defineOptions({
  name: "OlScaleLine"
})

let {map} = inject("openlayers")

let scaleLineRef = ref()

let scaleLine = new ScaleLine({
  units: "metric",
  text: true,
  maxWidth: 120
})

onMounted(() => {
  scaleLine.setTarget(scaleLineRef.value)
  map.addControl(scaleLine)
})
</script>
<style lang="scss">
.scaleLine {
  /* 比例尺背景颜色 */
  // background: rgba(0, 60, 136, 0.7);
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  .ol-scale-line {
    position: static;
  }
}
</style>

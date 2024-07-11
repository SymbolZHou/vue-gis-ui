<template>
  <n-popover trigger="hover" placement="left">
    <template #trigger>
      <NButton @click="onClick" :disabled="isShow" :type="isShow ? 'info' : 'primary'">
        <RemixIcon icon="map-fill"></RemixIcon>
      </NButton>
    </template>
    <span>测面积</span>
  </n-popover>

  <OlOverlay v-if="isShow" v-for="(item, index) in areaOverlay" :key="item.key" :position="item.center">
    <div class="mouse-overlay">
      <p>面积: {{ numeral(item.area).format("0.00") }}米²</p>
      <RemixIcon @click="onClose(item, index)" class="mouse-overlay-close" icon="close-circle-fill"></RemixIcon>
    </div>
  </OlOverlay>

  <OlOverlay :position="currentOverlay.position" :offset="[0, -90]" v-if="isShow">
    <div class="mouse-overlay">
      <div v-if="currentOverlay.area">
        <p>面积: {{ currentOverlay.area }}米²</p>
        <p>点击设置顶点,右键删除上一个点,双击结束测量</p>
      </div>
      <div v-else>
        <p>0米²</p>
        <p>点击开始测量</p>
      </div>
    </div>
  </OlOverlay>
</template>

<script setup>
import {Draw} from "ol/interaction"
import numeral from "numeral"
import {getArea} from "ol/sphere"
import {getCenter} from "ol/extent"
import {Polygon} from "ol/geom"

defineOptions({
  name: "OlArea"
})

let {map} = inject("openlayers")
let {current, source} = inject("OlMeasure")

let areaOverlay = ref([])
let currentOverlay = reactive({
  position: [0, 0],
  area: 0,
  key: 0
})

let draw = new Draw({
  source: source,
  type: "Polygon",
  minPoint: 3
})
let isShow = computed(() => current.value === "area")

watch(current, value => {
  if (isShow.value) {
    map.addInteraction(draw)
  } else {
    map.removeInteraction(draw)
    areaOverlay.value = []
    currentOverlay = reactive({
      position: [0, 0],
      area: 0,
      key: 0
    })
  }
})

useEventListener(map, "contextmenu", ev => {
  ev.preventDefault()

  draw.removeLastPoint()
  draw.removeLastPoint()
})

useEventListener(map, "pointermove", ev => {
  if (!isShow.value) return
  currentOverlay.position = ev.coordinate

  if (get(draw, ["sketchLineCoords_", "length"], 0) < 3) return

  let geom = new Polygon([draw.sketchLineCoords_])
  currentOverlay.area = getArea(geom, {projection: "EPSG:4326"})
})

draw.on("drawend", ev => {
  let {feature} = ev
  let geometry = feature.getGeometry()
  var extent = geometry.getExtent()

  areaOverlay.value.push({
    center: getCenter(extent),
    area: currentOverlay.area,
    key: Math.random(),
    feature
  })
  currentOverlay = reactive({
    position: [0, 0],
    area: 0
  })
})

const onClick = async () => {
  if (isShow.value) return

  current.value = "area"
}

const onClose = ({feature}, index) => {
  source.removeFeature(feature)
  areaOverlay.value.splice(index, 1)
}
</script>
<style lang="scss" scoped></style>

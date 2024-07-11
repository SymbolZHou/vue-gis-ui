<template>
  <n-popover trigger="hover" placement="left">
    <template #trigger>
      <NButton @click="onClick" :disabled="isShow" :type="isShow ? 'info' : 'primary'">
        <RemixIcon icon="ruler-fill"></RemixIcon>
      </NButton>
    </template>
    <span>测距</span>
  </n-popover>

  <div v-for="(item, index) in flagOverlayList" :key="index">
    <LineOverlay v-for="option in item.distance.filter((a, b) => b > 0)" v-bind="option" :index="index"></LineOverlay>
  </div>

  <OlOverlay :position="mousePosition" :offset="[0, -90]" v-if="isShow">
    <div class="mouse-overlay">
      <div v-if="currentFlag.length > 0">
        <p>总长: {{ formatDistance(totalLength) }}</p>
        <p>点击设置顶点,右键删除上一个点,双击结束测量</p>
      </div>
      <div v-else>
        <p>0米</p>
        <p>点击开始测量</p>
      </div>
    </div>
  </OlOverlay>
</template>

<script setup>
import {useEventListener} from "../../hooks"
import {last} from "lodash-es"
import {getDistanceTotal, formatDistance} from "../config"
import {getDistance} from "ol/sphere"
import LineOverlay from "./LineOverlay"
import {Draw} from "ol/interaction"

defineOptions({
  name: "OlDistance"
})

let {map} = inject("openlayers")
let {current, source} = inject("OlMeasure")

let isShow = computed(() => current.value === "distance")

let prevLength = ref(0)
let totalLength = ref(0)
let mousePosition = ref([])
let flagOverlayList = ref([])

let currentFlag = reactive([])

let draw = new Draw({
  source: source,
  type: "LineString"
})

provide("olDistance", {
  flagOverlayList
})

watch(current, value => {
  if (isShow.value) {
    map.addInteraction(draw)
  } else {
    map.removeInteraction(draw)
    flagOverlayList.value = []
    currentFlag = reactive([])
  }
})

draw.on("drawstart", ev => {
  flagOverlayList.value.push({
    distance: currentFlag,
    feature: ev.feature
  })
})
draw.on("drawend", ev => {
  let {feature} = ev
  let geometry = feature.getGeometry()
  let points = geometry.getCoordinates()

  let metre = getDistance(last(points), last(currentFlag).position)
  currentFlag.push({
    key: Math.random(),
    position: last(points),
    metre,
    total: currentFlag.reduce((a, b) => a + b.metre, metre),
    isEnd: true
  })

  currentFlag = reactive([])
})

useEventListener(map, "contextmenu", ev => {
  ev.preventDefault()

  draw.removeLastPoint()
  draw.removeLastPoint()
  currentFlag.pop()
})

useEventListener(map, "singleclick", ev => {
  if (!isShow.value) return

  currentFlag.push({
    key: Math.random(),
    position: ev.coordinate,
    metre: last(currentFlag) ? getDistance(ev.coordinate, last(currentFlag).position) : 0
  })
})
useEventListener(map, "pointermove", ev => {
  if (!isShow.value) return
  mousePosition.value = ev.coordinate

  if (currentFlag.length) {
    prevLength.value = getDistance(ev.coordinate, last(currentFlag).position)
    totalLength.value = getDistanceTotal([ev.coordinate, ...currentFlag.map(item => item.position)])
  }
})

const onClick = async () => {
  if (isShow.value) return

  current.value = "distance"
}
</script>
<style lang="scss">
.mouse-overlay {
  margin-left: -50%;
  margin-right: 50%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: lime;
  padding: 8px 18px 8px 12px;
  white-space: nowrap;
  z-index: 0;
  /* font-weight: bold; */
  position: relative;
  p {
    line-height: 150%;
  }
  &::before {
    border-top: 6px solid rgba(0, 0, 0, 0.5);
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    content: "";
    position: absolute;
    bottom: -6px;
    margin-left: -7px;
    left: 50%;
  }
  &-record {
    margin-left: -50%;
    margin-right: 50%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    color: #fff;
    padding: 8px 28px 8px 12px;
    white-space: nowrap;
    z-index: 0;
    /* font-weight: bold; */
    position: relative;
    font-size: 14px;
    &::before {
      border-top: 6px solid rgba(0, 0, 0, 0.5);
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      content: "";
      position: absolute;
      bottom: -6px;
      margin-left: -7px;
      left: 50%;
    }
  }
  &-close {
    font-size: 20px;
    position: absolute;
    right: 0px;
    top: 0;
  }
}
</style>

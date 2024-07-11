<template>
  <NSpace class="select">
    <n-tree-select
      v-model:value="code"
      filterable
      :options="city._map[defaultCode].children"
      key-field="adcode"
      label-field="name"
      clearable
    />
    <NButtonGroup>
      <NButton :disabled="!canUndo" type="primary" @click="undo">
        <RemixIcon icon="arrow-left-s-line"></RemixIcon>
      </NButton>
      <NButton :disabled="!canRedo" type="info" @click="redo">
        <RemixIcon icon="arrow-right-s-line"></RemixIcon>
      </NButton>
    </NButtonGroup>
  </NSpace>
</template>

<script setup>
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import { GeoJSON } from 'ol/format'
import { Style, Stroke, Fill } from 'ol/style'
import Text from 'ol/style/Text.js'
import { city } from '@vue-demo/enum/city'
import Select from 'ol/interaction/Select.js'
import { click, pointerMove } from 'ol/events/condition.js'
import { useStore } from './config'
let { map } = inject('openlayers')
let { view } = inject('view')

let store = useStore()

let source = new VectorSource()

let vectorLayer = new VectorLayer({
  source
})

map.addLayer(vectorLayer)

let zoom = {
  country: 4,
  province: 7,
  city: 9,
  district: 11
}
let defaultCode = 100000
let code = ref(defaultCode)

const { undo, redo, canUndo, canRedo } = useRefHistory(code, {
  capacity: 10
})

let createStyle = (feature) => {
  return new Style({
    text: new Text({
      text: feature.values_.name,
      font: '14px sans-serif',
      stroke: new Stroke({
        color: 'rgba(0,0,255,0.5)'
      }),
      fill: new Fill({
        color: '#fff'
      })
    }),
    stroke: new Stroke({
      color: 'rgba(0,0,255)',
      width: 2
    }),
    fill: new Fill({
      color: 'rgba(0,0,255, 0.2)'
    })
  })
}

let selectStyle = (feature) => {
  let style = createStyle(feature)
  style.getFill().setColor('rgba(0,0,255, 0.4)')
  return style
}
const onUpdateValue = async (value) => {
  if (!value) {
    code.value = defaultCode
    return
  }

  let options = city._map[code.value]
  if (options.level === 'district') return

  source.clear()

  // 请求并加载数据
  let geoJSON = await store.getGeoJSON(code.value)
  let features = new GeoJSON().readFeatures(geoJSON)
  features.forEach((feature) => {
    feature.setStyle(createStyle(feature))
  })
  source.addFeatures(features)
  //移动视图
  view.animate({
    center: [city._map[code.value].lng, city._map[code.value].lat],
    zoom: zoom[options.level],
    duration: 200
  })
}

watch(code, onUpdateValue, {
  immediate: true
})

const selectClick = new Select({
  condition: click,
  style: selectStyle,
  multi: true,
  layers: [vectorLayer]
})

const selectPointerMove = new Select({
  condition: pointerMove,
  style: selectStyle,
  layers: [vectorLayer]
})

map.addInteraction(selectPointerMove)
map.addInteraction(selectClick)

selectClick.on('select', (ev) => {
  if (!ev.selected.length) return
  if (city._map[ev.selected[0].values_.adcode].level === 'district') return

  code.value = ev.selected[0].values_.adcode
})

onUnmounted(() => {
  map.removeInteraction(selectPointerMove)
  map.removeInteraction(selectClick)
})
</script>
<style lang="scss" scoped>
.select {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 99;
}
</style>

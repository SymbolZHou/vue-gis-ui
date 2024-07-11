<template>
  <Openlayers id="maps">
    <OlView :defaultOptions="view">
      <OlSelectLayers v-model:value="map"></OlSelectLayers>

      <OlScaleLine></OlScaleLine>

      <OlContextmenu @change:center="onChangeCenter" @change:zoom="onChangeZoom"></OlContextmenu>

      <OlMeasure>
        <OlDistance></OlDistance>
        <OlArea></OlArea>
      </OlMeasure>

      <OlZoom></OlZoom>

      <OlCompass></OlCompass>

      <OlSelectMap v-model:value="mapStore.source"></OlSelectMap>

      <SelectArea></SelectArea>
    </OlView>
  </Openlayers>
</template>

<script setup>
import SelectArea from "./SelectArea.vue"

let view = reactive({
  center: [113.32, 23.09],
  zoom: 10
})

let map = reactive({
  layer: "1"
})

const onChangeCenter = ev => {
  view.center = ev.map.getView().getCenter()
}
const onChangeZoom = ev => {
  view.zoom = ev.map.getView().getZoom()
}
</script>
<style lang="scss" scoped></style>

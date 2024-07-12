<template>
  <Openlayers id="maps">
    <OlView>
      <OlSelectLayers></OlSelectLayers>

      <OlScaleLine></OlScaleLine>

      <OlContextmenu @change:center="onChangeCenter" @change:zoom="onChangeZoom"></OlContextmenu>

      <OlMeasure>
        <OlDistance></OlDistance>
        <OlArea></OlArea>
      </OlMeasure>

      <OlZoom></OlZoom>

      <OlCompass></OlCompass>

      <SelectArea></SelectArea>
    </OlView>
  </Openlayers>
</template>

<script setup>
import SelectArea from './SelectArea.vue'

const onChangeCenter = () => {}
const onChangeZoom = () => {}
</script>
<style lang="scss" scoped></style>

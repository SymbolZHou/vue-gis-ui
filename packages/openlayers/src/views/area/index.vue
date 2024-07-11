<template>
  <Openlayers id="maps">
    <OlView>
      <OlCompass></OlCompass>
    </OlView>
  </Openlayers>
</template>

<script setup>
import SelectArea from './SelectArea.vue'

const onChangeCenter = () => {}
const onChangeZoom = () => {}
</script>
<style lang="scss" scoped></style>

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
    </OlView>
  </Openlayers>
</template>

<script setup></script>
<style lang="scss" scoped></style>

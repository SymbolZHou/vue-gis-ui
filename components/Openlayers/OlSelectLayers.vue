<template>
  <SelectLayers v-model:value="value" :data="list" v-bind="$attrs"></SelectLayers>
</template>

<script setup>
import SelectLayers from "../Map/SelectLayers"
import {list} from "./config"
defineOptions({
  name: "OlSelectLayers"
})

let {map} = inject("openlayers")

let value = defineModel("value", {
  type: String,
  default: "1"
})

watchEffect(() => {
  let layers = map.getLayers()
  layers.setAt(0, list._map[value.value].layers)
})
</script>

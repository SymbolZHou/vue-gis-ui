<template>
  <div ref="overlayRef">
    <slot></slot>
  </div>
</template>

<script setup>
import Overlay from "ol/Overlay.js"

defineOptions({
  name: "OlOverlay",
  inheritAttrs: false
})

let props = defineProps({
  position: {
    type: Array,
    default: () => []
  }
})

let {map} = inject("openlayers")

let overlayRef = ref()

let attrs = useAttrs()

let overlay = new Overlay({
  position: props.position,
  element: null,
  ...attrs
})
map.addOverlay(overlay)

watch(
  () => props.position,
  value => {
    overlay.setPosition(value)
  }
)

onMounted(() => {
  overlay.setElement(overlayRef.value)
})

onUnmounted(() => {
  map.removeOverlay(overlay)
})
</script>
<style lang="scss" scoped></style>

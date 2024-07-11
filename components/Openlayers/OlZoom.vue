<template>
  <NSpace class="zoom" vertical>
    <n-button-group vertical size="tiny">
      <NButton style="width: 28px" type="primary">{{ _zoom }}</NButton>
      <NButton type="primary" @click="onZoomIn">
        <RemixIcon icon="add-fill"></RemixIcon>
      </NButton>
      <NButton type="primary" @click="onZoomOut">
        <RemixIcon icon="subtract-fill"></RemixIcon>
      </NButton>
    </n-button-group>
  </NSpace>
</template>

<script setup>
defineOptions({
  name: "OlZoom"
})

let {view} = inject("view")

let zoom = ref(view.getZoom())

let _zoom = useDebounce(zoom, 500)

view.on(
  "propertychange",
  throttle(() => {
    zoom.value = view.getZoom()
  }, 20)
)

const onZoomIn = debounce(
  () => {
    view.animate({zoom: zoom.value + 1, duration: 500})
  },
  500,
  {
    leading: true
  }
)
const onZoomOut = debounce(
  () => {
    if (zoom.value <= view.getMinZoom()) return
    view.animate({zoom: zoom.value - 1, duration: 500})
  },
  500,
  {
    leading: true
  }
)
</script>
<style lang="scss" scoped>
.zoom {
  position: absolute;
  z-index: 1;
  right: 10px;
  bottom: 140px;
}
</style>

<template>
  <div ref="buttonRef" class="buttonRef">
    <n-button type="primary" @click="emit('open')">开关门</n-button>
  </div>
</template>

<script setup>
import { Vector3 } from 'three'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'

defineProps({
  name: String
})

let emit = defineEmits(['open'])

let buttonRef = ref()
let { scene } = inject('three')

onMounted(() => {
  const css2dObject = new CSS2DObject(buttonRef.value)

  useTimeoutFn(() => {
    let a = scene.getObjectByName('左前光标')
    css2dObject.position.copy(a.getWorldPosition(new Vector3()))
    scene.add(css2dObject)
  }, 500)
})
</script>

<style lang="scss" scoped>
.buttonRef {
  pointer-events: all;
}
</style>

<template>
  <Openlayers id="maps">
    <OlView>
      <Boat></Boat>
    </OlView>
  </Openlayers>
</template>

<script setup>
import { useStore } from './config'
import Boat from './components/Boat.vue'
let store = useStore()

store.getBoat()
</script>
<style lang="scss" scoped></style>

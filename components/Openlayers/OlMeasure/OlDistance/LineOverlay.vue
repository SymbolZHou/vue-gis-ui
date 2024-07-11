<template>
  <OlOverlay :position="position" :offset="[0, -50]">
    <div class="mouse-overlay-record" style="color: lime" v-if="isEnd">
      <b>总长:</b>
      <span>{{ formatDistance(total) }}</span>
      <RemixIcon
        @click="onClose(item, options, index)"
        class="mouse-overlay-close"
        icon="close-circle-fill"
      ></RemixIcon>
    </div>
    <div class="mouse-overlay-record" v-else>
      <b>本段长:</b>
      <span>{{ formatDistance(metre) }}</span>
    </div>
  </OlOverlay>
</template>

<script setup>
import {last} from "lodash-es"
import {formatDistance} from "../config"

let props = defineProps({
  position: Array,
  isEnd: Boolean,
  total: Number,
  metre: Number,
  index: Number
})

let {flagOverlayList} = inject("olDistance")
let {source} = inject("OlMeasure")
const onClose = () => {
  let remove = flagOverlayList.value.splice(props.index, 1)
  source.removeFeature(last(remove).feature)
}
</script>
<style lang="scss" scoped>
.mouse-overlay-record {
  margin-left: -50%;
  margin-right: 50%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: #fff;
  padding: 8px 20px 8px 12px;
  white-space: nowrap;
  z-index: 0;
  position: relative;
  font-size: 14px;
  .mouse-overlay-close {
    cursor: pointer;
  }
}
</style>

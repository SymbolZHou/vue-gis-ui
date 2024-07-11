<template>
  <n-popover trigger="hover" placement="left">
    <template #trigger>
      <div class="compass">
        <button class="left" @click="reverseClick"></button>
        <button class="center" :style="style" @click="recoveryClick"></button>
        <button class="right" @click="forwordClick"></button>
      </div>
    </template>
    按住shift + alt + 鼠标左键可旋转地图, 当前旋转:{{ numeral(rotate).format("0.00") }}
  </n-popover>
</template>
<script setup>
import {DragRotateAndZoom} from "ol/interaction.js"
import {useEventListener} from "../hooks"
import numeral from "numeral"
defineOptions({
  name: "OlCompass"
})

let {view} = inject("view")
let {map} = inject("openlayers")

map.addInteraction(new DragRotateAndZoom())

let style = ref({})
let rotate = ref(0)

useEventListener(view, "change", ev => {
  rotate.value = (ev.target.getRotation() * 180) / Math.PI
  style.value = {
    transform: `rotate(${(ev.target.getRotation() * 180) / Math.PI}deg)`
  }
})

const reverseClick = () => {
  var center = view.getCenter()
  var rotation = view.getRotation()
  view.animate({
    center: center, //旋转中心点
    duration: 200,
    rotation: rotation - Math.PI / 6
  })
}
const recoveryClick = () => {
  var center = view.getCenter()
  view.animate({
    center: center,
    duration: 200,
    rotation: 0
  })
}
const forwordClick = () => {
  var center = view.getCenter()
  var rotation = view.getRotation()
  view.animate({
    center: center,
    duration: 200,
    rotation: rotation + Math.PI / 6
  })
}
</script>

<style lang="scss" scoped>
.compass {
  position: absolute;
  z-index: 5;
  bottom: 34px;
  right: 7px;
  width: 52px;
  height: 54px;
  background: url(./earth-navi-control-pc4-2x.png) 0% 0% / 266px no-repeat;
  .left {
    position: absolute;
    outline: none;
    border: none;
    background: url(./earth-navi-control-pc4-2x.png) -75px -5px / 266px no-repeat;
    cursor: pointer;
    left: 2px;
    top: 5px;
    z-index: 1;
    width: 15px;
    height: 42px;
    opacity: 1;
    &:hover {
      background: url(./earth-navi-control-pc4-2x.png) -89px -5px / 266px no-repeat;
    }
  }
  .center {
    position: absolute;
    outline: none;
    border: none;
    background: url(./earth-navi-control-pc4-2x.png) -56px -4px / 266px no-repeat;
    cursor: pointer;
    left: 19px;
    top: 4px;
    width: 14px;
    height: 44px;
    transform: rotate(0deg);
    opacity: 1;
    transition: all 0.5s;
  }
  .right {
    position: absolute;
    outline: none;
    border: none;
    background: url(./earth-navi-control-pc4-2x.png) -75px -5px / 266px no-repeat;
    cursor: pointer;
    right: 2px;
    top: 5px;
    z-index: 1;
    width: 15px;
    height: 42px;
    transform: scaleX(-1);
    opacity: 1;
    &:hover {
      background: url(./earth-navi-control-pc4-2x.png) -89px -5px / 266px no-repeat;
    }
  }
}
</style>

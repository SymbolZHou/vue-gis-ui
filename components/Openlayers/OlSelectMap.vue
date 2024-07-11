<template>
  <n-popover placement="left">
    <template #trigger>
      <n-button class="OlAndCecium" type="primary" size="tiny" @click="">
        <RemixIcon icon="box-3-fill"></RemixIcon>
      </n-button>
    </template>
    <ul class="list">
      <li
        :class="{
          isActive: value === item.value
        }"
        v-for="item in list"
        :key="item.value"
        @click="value = item.value"
      >
        <n-image :class="['image']" :src="item.src" object-fit="cover" preview-disabled width="100" height="100" />
        <div class="text">{{ item.text }}</div>
      </li>
    </ul>
  </n-popover>
</template>

<script setup>
defineOptions({
  name: "OlSelectMap"
})

let list = [
  {
    text: "2维地图",
    src: new URL("./images/image.png", import.meta.url).href,
    value: "ol"
  },
  {
    text: "3维地图",
    src: new URL("./images/3d.png", import.meta.url).href,
    value: "cesium"
  }
]

let value = defineModel("value", {
  type: String,
  default: "ol"
})
</script>
<style lang="scss" scoped>
.OlAndCecium {
  position: absolute;
  right: 10px;
  bottom: 220px;
  z-index: 1;
}
.list {
  display: flex;
  gap: 10px;
  li {
    border: 2px solid transparent;
    position: relative;
    &.isActive {
      border: 2px solid blue;
    }
    .text {
      position: absolute;
      line-height: 100%;
      inset: auto auto 0 0;
      padding: 4px 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

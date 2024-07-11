<template>
  <n-popover placement="left">
    <template #trigger>
      <n-button class="button" style="margin-top: 10px" type="primary" size="tiny" v-bind="$attrs">
        <RemixIcon icon="stack-fill"></RemixIcon>
      </n-button>
    </template>
    <ul class="list">
      <li
        v-for="item in data"
        :key="item.value"
        :class="{
          'is-active': value === item.value
        }"
        @click="value = item.value"
      >
        <img style="width: 88px; height: 88px" :src="item.icon" />
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </n-popover>
</template>

<script setup>
let props = defineProps({
  data: Array
})

let value = defineModel("value", {
  type: String,
  default: "1"
})
</script>

<style lang="scss" scoped>
.button {
  position: absolute;
  right: 10px;
  bottom: 100px;
  z-index: 99;
}
.list {
  display: flex;
  padding: 10px 20px;
  li {
    position: relative;
    line-height: 0;
    margin-right: 20px;
    cursor: pointer;
    border: 2px solid transparent;
    &.is-active {
      border: 2px solid blue;
    }
    &:last-child {
      margin-right: 0;
    }
    span {
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
<style>
.blueLayer {
  /* filter: grayscale(100%) sepia(51%) invert(100%) saturate(350%); */
}
</style>

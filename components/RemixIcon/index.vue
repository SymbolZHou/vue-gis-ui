<template>
  <svg v-if="isCustomSvg" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
  <svg v-else-if="isDefaultSvg" class="remix-icon ri-*">
    <use :xlink:href="remixIconPath + '#ri-' + icon"></use>
  </svg>
  <i v-else :class="'ri-' + icon" aria-hidden="true"></i>
</template>
<script>
import 'remixicon/fonts/remixicon.css'
import remixIconPath from 'remixicon/fonts/remixicon.symbol.svg'
export default {
  name: 'RemixIcon',
  props: {
    isCustomSvg: {
      type: Boolean,
      default: false
    },
    isDefaultSvg: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      remixIconPath
    }
  },
  computed: {
    iconName() {
      return `#remix-icon-${this.icon}`
    },
    svgClass() {
      if (this.className) {
        return 'remix-icon ' + this.className
      } else {
        return 'remix-icon'
      }
    },
    styleExternalIcon() {
      return this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
[class*='ri'] {
  display: inline-block;
  font-size: 16px;
  text-align: center;
  // vertical-align: -3.5px;
  line-height: 100%;
}

.remix-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: middle;
  fill: currentColor;
}
</style>

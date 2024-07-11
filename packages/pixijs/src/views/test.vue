<template>
  <div class="container" ref="containerRef"></div>
</template>

<script setup>
import Player, { Sniffer } from 'xgplayer'
import FlvPlugin from 'xgplayer-flv'
import HlsPlugin from 'xgplayer-hls'
import 'xgplayer/dist/index.min.css'

let containerRef = ref()
let el = document.createElement('div')
el.style.width = 1000
el.style.height = 1000

onMounted(() => {
  containerRef.value.appendChild(el)
})
console.log(Sniffer.isHevcSupported())
new Player({
  el,
  autoplay: true,
  autoplayMuted: true,
  plugins: [HlsPlugin],
  // url: 'http://101.71.176.190:8020/record/live/cam/1/vod/1713774304-1713774496.m3u8'
  url: 'http://101.71.176.190:8020/record/live/cam/8/vod/1713774693-1713774783.m3u8'
})
</script>

<style></style>

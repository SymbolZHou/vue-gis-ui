<template>
  <div ref="containerRef" class="container"></div>
</template>

<script setup>
import { onMounted } from 'vue'

let containerRef = ref()
let canvas = document.createElement('canvas')
canvas.width = 500
canvas.height = 500

onMounted(() => {
  containerRef.value.appendChild(canvas)
})

// 1. 初始化WebGPU
const adapter = await navigator.gpu.requestAdapter()
// 获取GPU设备对象，通过GPU设备对象device的WebGPU API可以控制GPU渲染过程
const device = await adapter.requestDevice()

//配置WebGPU上下文，把id名为webgpu的Canvas元素作为WebGPU的画布
const context = canvas.getContext('webgpu')
const format = navigator.gpu.getPreferredCanvasFormat() //获取浏览器 默认的
context.configure({
  device: device, //WebGPU渲染器使用的GPU设备对象
  format: format //WebGPU渲染器使用的颜色格式
})

const vertexArray = new Int16Array([
  // 三角形三个顶点坐标的x、y、z值
  0.0,
  0.0,
  0.0, //顶点1坐标
  1.0,
  0.0,
  0.0, //顶点2坐标
  0.0,
  1.0,
  0.0 //顶点3坐标
])

const vertexBuffer = device.createBuffer({
  size: vertexArray.byteLength, //顶点数据的字节长度
  //usage设置该缓冲区的用途
  usage: window.GPUBufferUsage.VERTEX | window.GPUBufferUsage.COPY_DST
})
console.log(device)
device.queue.writeBuffer(vertexBuffer, 1, vertexArray)

// 创建一个WebGPU渲染管线对象pipeline
const pipeline = device.createRenderPipeline({
  vertex: {
    //顶点相关配置
    buffers: [
      // 顶点所有的缓冲区模块设置
      {
        //其中一个顶点缓冲区设置
        arrayStride: 3 * 4, //一个顶点数据占用的字节长度，该缓冲区一个顶点包含xyz三个分量，每个数字是4字节浮点数，3*4字节长度
        // 顶点缓冲区属性
        attributes: [
          {
            shaderLocation: 0, //GPU显存上顶点缓冲区标记存储位置
            format: 'float32x3', //格式：loat32x3表示一个顶点数据包含3个32位浮点数
            offset: 0 //arrayStride表示每组顶点数据间隔字节数，offset表示读取该组的偏差字节数，没特殊需要一般设置0
          }
        ]
      }
    ]
  }
})
</script>
<style lang="scss" scoped></style>

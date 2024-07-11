<template>
  <slot></slot>

  <div class="btn">
    <n-button @click="play" type="primary">play</n-button>
    <n-button @click="stop" type="primary">stop</n-button>
  </div>
</template>

<script setup>
import {
  BoxGeometry,
  Mesh,
  MeshLambertMaterial,
  KeyframeTrack,
  AnimationClip,
  AnimationMixer
} from 'three'

let { scene } = inject('three')

let box = new BoxGeometry(50, 50, 50)

let material = new MeshLambertMaterial({
  color: 'red'
})

let mesh = new Mesh(box, material)
mesh.name = 'Box'

// 1.2 给名为Box的模型对象的设置关键帧数据KeyframeTrack
const times = [0, 3, 6] //时间轴上，设置三个时刻0、3、6秒
// times中三个不同时间点，物体分别对应values中的三个xyz坐标
const values = [0, 0, 0, 100, 0, 0, 0, 0, 100]
// 创建关键帧，把模型位置和时间对应起来
// 0~3秒，物体从(0,0,0)逐渐移动到(100,0,0),3~6秒逐渐从(100,0,0)移动到(0,0,100)
const posKF = new KeyframeTrack('Box.position', times, values)
// 时间轴上选择两个时刻2秒、5秒，分别对应物体两个颜色值(1, 0, 0)、(0, 0, 1)
// 从2秒到5秒，物体从红色逐渐变化为蓝色
const colorKF = new KeyframeTrack('Box.material.color', [2, 5], [1, 0, 0, 0, 0, 1])

// 上面是在时间轴上，随机编辑了两个关键帧posKF、colorKF，你可以根据需要随意改变场景中物体位置、颜色、角度等属性

// 1.3 AnimationClip表示一个关键帧动画，可以基于关键帧数据产生动画效果
// 创建一个clip关键帧动画对象，命名"test"，动画持续时间6s
// AnimationClip包含的所有关键帧数据都放到参数3数组中即可
const clip = new AnimationClip('test', 6, [posKF, colorKF])
const clip1 = new AnimationClip('test', 6, [posKF])

//2.1 动画播放器AnimationMixer播放关键帧动画AnimationClip
//包含关键帧动画的模型对象作为AnimationMixer的参数创建一个播放器mixer
const mixer = new AnimationMixer(mesh)
//AnimationMixer的`.clipAction()`返回一个AnimationAction对象
const clipAction = mixer.clipAction(clip)
//.play()控制动画播放，默认循环播放

clipAction.play()
const play = () => {
  clipAction.stop()
  let clipAction1 = mixer.clipAction(clip1)
  clipAction1.play()
}
const stop = () => {
  clipAction.stop()
}

useRafFn(({ delta }) => {
  mixer.update(delta / 1000)
})

scene.add(mesh)
</script>
<style lang="scss" scoped>
.btn {
  position: fixed;
  left: 100px;
  top: 100px;
}
</style>

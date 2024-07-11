<template>
  <slot></slot>
</template>

<script setup>
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import model from '@vue-demo/assets/liangcang.glb'
import { MeshPhongMaterial, Raycaster, Vector2 } from 'three'

let { scene } = inject('three')

const loader = new GLTFLoader()

const raycaster = new Raycaster()

let { width, height, camera, canvasRef } = inject('three')

loader.load(model, function (glb) {
  glb.scene.traverse(function (object) {
    if (object.type === 'Mesh') {
      // 批量更改所有Mesh的材质
      object.material = new MeshPhongMaterial({
        map: object.material.map, //获取原来材质的颜色贴图属性值
        color: object.material.color //读取原来材质的颜色
      })
    }
  })
  scene.add(glb.scene)

  useEventListener(canvasRef, 'click', (ev) => {
    const x = (ev.offsetX / width.value) * 2 - 1
    const y = -(ev.offsetY / height.value) * 2 + 1

    raycaster.setFromCamera(new Vector2(x, y), camera)

    const intersects = raycaster.intersectObjects(glb.scene.children[2].children)
    if (!intersects.length) return

    intersects[0].object.material.color.set('red')
  })
})
</script>
<style lang="less" scoped></style>

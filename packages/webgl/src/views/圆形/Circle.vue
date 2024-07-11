<template>
  <slot></slot>
</template>

<script setup>
import { random } from 'lodash-es'
import gsap from 'gsap'
import { useEventListener } from '@vueuse/core'

let { ctx, useMouseWebgl, canvas } = inject('webgl')

ctx.clearColor(0, 0, 0, 1)
ctx.enable(ctx.BLEND)
ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_CONSTANT_ALPHA)

let a_position = ctx.getAttribLocation(ctx.program, 'a_position')
let a_PointSize = ctx.getAttribLocation(ctx.program, 'a_PointSize')
let u_FragColor = ctx.getUniformLocation(ctx.program, 'u_FragColor')

const createPoint = ({ x, y }) => ({
  x,
  y,
  size: random(20, 40, true),
  color: [random(0, 1, true), random(0, 1, true), random(0, 1, true), random(0, 1, true)]
})

let points = Array.from({ length: 10 }).map(() =>
  createPoint({
    x: random(-1, 1, true),
    y: random(-1, 1, true)
  })
)

const render = () => {
  ctx.clear(ctx.COLOR_BUFFER_BIT)
  points.forEach((item) => {
    ctx.vertexAttrib2f(a_position, item.x, item.y)
    ctx.vertexAttrib1f(a_PointSize, item.size)
    ctx.uniform4fv(u_FragColor, item.color)
    ctx.drawArrays(ctx.POINTS, 0, 1)
  })
}

let gs = gsap.context(() => {
  gsap.to(points, {
    yoyo: true,
    repeat: -1,
    onUpdate: render,
    size(a, b) {
      return b.size * 0.2
    }
  })
})

onUnmounted(() => {
  gs.revert()
})

let { x, y } = useMouseWebgl()

useEventListener(canvas, 'click', () => {
  console.log(x.value, y.value)
  let point = createPoint({
    x: x.value,
    y: y.value
  })
  points.push(point)
  gs.add(() => {
    gsap.to(point, {
      yoyo: true,
      repeat: -1,
      onUpdate: render,
      size(a, b) {
        return b.size * 0.2
      }
    })
  })
})
</script>
<style lang="less" scoped></style>

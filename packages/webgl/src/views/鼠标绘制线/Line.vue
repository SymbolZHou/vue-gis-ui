<template>
  <slot></slot>
</template>

<script setup>
let { ctx, useMouseWebgl, polygon, canvas } = inject('webgl')

let vertices = []

let { x, y } = useMouseWebgl()

const render = () => {
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(vertices), ctx.STATIC_DRAW)
  ctx.drawArrays(ctx.POINTS, 0, vertices.length / 2)
  ctx.drawArrays(ctx.LINE_STRIP, 0, vertices.length / 2)
}

let clearClick = useEventListener(canvas, 'click', () => {
  vertices.push(x.value, y.value)
})
let clearDBLClick = useEventListener(canvas, 'dblclick', () => {
  clearMove()
  clearClick()
  clearDBLClick()
})

let clearMove = useEventListener(
  canvas,
  'mousemove',
  throttle(() => {
    polygon.push(() => {
      ctx.bufferData(
        ctx.ARRAY_BUFFER,
        new Float32Array([...vertices, x.value, y.value]),
        ctx.STATIC_DRAW
      )
      ctx.drawArrays(ctx.POINTS, 0, (vertices.length + 2) / 2)
      ctx.drawArrays(ctx.LINE_STRIP, 0, (vertices.length + 2) / 2)
    })
  }, 20)
)
</script>
<style lang="scss" scoped></style>

export function initShader(ctx, vertexstring, fragmentstring) {
  let vsshader = ctx.createShader(ctx.VERTEX_SHADER)
  ctx.shaderSource(vsshader, vertexstring)
  ctx.compileShader(vsshader)

  let fsshader = ctx.createShader(ctx.FRAGMENT_SHADER)
  ctx.shaderSource(fsshader, fragmentstring)
  ctx.compileShader(fsshader)

  let program = ctx.createProgram()
  ctx.attachShader(program, vsshader)
  ctx.attachShader(program, fsshader)

  ctx.linkProgram(program)
  ctx.useProgram(program)

  ctx.program = program
}

export const pixelToCoor = (canvas, [x, y]) => {
  return [(x / canvas.width) * 2 - 1, -(y / canvas.height) * 2 + 1]
}

export function useMouseWebgl(canvas) {
  let x = ref(0)
  let y = ref(0)
  let offsetX = ref(0)
  let offsetY = ref(0)

  useEventListener(canvas, 'mousemove', (ev) => {
    let elementX = ev.offsetX - canvas.offsetLeft
    let elementY = ev.offsetY - canvas.offsetTop
    offsetX.value = ev.offsetX
    offsetY.value = ev.offsetY

    let [coorX, coorY] = pixelToCoor(canvas, [elementX, elementY])

    x.value = coorX
    y.value = coorY
  })
  return { x, y, offsetX, offsetY }
}

export const createCanvas = (width, height) => {
  let canvas = document.createElement('canvas')
  canvas.width = width.value
  canvas.height = height.value
  let ctx = canvas.getContext('webgl')

  watchEffect(() => {
    canvas.width = width.value
    canvas.height = height.value
    ctx.viewport(0, 0, canvas.width, canvas.height)
  })

  return {
    canvas,
    ctx
  }
}

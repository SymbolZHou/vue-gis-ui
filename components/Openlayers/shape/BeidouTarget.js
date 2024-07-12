export class BeidouTarget {
  constructor(options) {
    let w = 20,
      h = 40

    let defaultOptions = {
      x: w / 2,
      y: h / 2,
      w,
      h,
      fillStyle: 'yellow',
      strokeStyle: 'black'
    }

    Object.assign(this, defaultOptions, options)
  }
  render(ctx) {
    let { x, y, w, h, fillStyle, strokeStyle } = this
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath()
    ctx.moveTo(0, -h / 2)
    ctx.lineTo(-w / 2, h / 2)
    ctx.lineTo(0, h / 3)
    ctx.lineTo(w / 2, h / 2)
    ctx.closePath()

    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle

    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}

export class RadarTarget {
  constructor(options) {
    let w = 20,
      h = 20

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
    // ctx.moveTo(-w / 2, -h / 2)
    // ctx.lineTo(-w / 2, h / 2)
    // ctx.lineTo(w / 2, h / 2)
    // ctx.lineTo(w / 2, -h / 2)

    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.fillRect(-w / 2, -h / 2, w, h)
    ctx.strokeRect(-w / 2, -h / 2, w, h)

    ctx.restore()
  }
}

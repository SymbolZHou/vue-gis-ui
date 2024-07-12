export class AISTarget {
  constructor(options) {
    let w = 10,
      h = 24

    let defaultOptions = {
      x: w / 2,
      y: h / 2,
      w,
      h,
      rotate: 0,
      fillStyle: 'yellow',
      strokeStyle: 'black'
    }

    Object.assign(this, defaultOptions, options)
  }
  render(ctx) {
    let { x, y, w, h, rotate, fillStyle, strokeStyle } = this
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotate)

    ctx.beginPath()
    ctx.moveTo(0, -h / 2 - 15)
    ctx.lineTo(0, -h / 2)
    ctx.closePath()
    ctx.strokeStyle = '#000'
    ctx.stroke()

    ctx.moveTo(0, -h / 2)
    ctx.lineTo(-w / 2, h / 2 - 1)
    ctx.lineTo(w / 2, h / 2 - 1)
    ctx.closePath()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.fill()
    ctx.stroke()

    ctx.restore()
  }
}

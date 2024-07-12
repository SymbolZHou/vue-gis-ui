export class Look {
  constructor(options) {
    let defaultOptions = {
      x: 0,
      y: 0,
      w: 50,
      h: 50,
      strokeStyle: 'black',
      lineWidth: 1
    }

    Object.assign(this, defaultOptions, options)

    Object.assign(this, defaultOptions, options)
  }
  render(ctx) {
    let { w, h, strokeStyle, lineWidth, x, y } = this
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath()
    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.setLineDash([w / 2, w / 2, w / 2, h - w / 2, w / 2, w / 2, w / 2, h - w / 2])
    ctx.lineDashOffset = w / 4
    ctx.strokeRect(-w / 2, -h / 2, w, h)
    ctx.restore()
  }
}

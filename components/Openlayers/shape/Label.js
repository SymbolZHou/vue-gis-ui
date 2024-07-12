export class Label {
  constructor(options) {
    let defaultOptions = {
      x: 0,
      y: 0,
      h: 20,
      fontSize: '14px',
      text: '',
      fillStyle: '#D2DEE0',
      textColor: '#000',
      line: [20, -30]
    }

    Object.assign(this, defaultOptions, options)
  }
  render(ctx) {
    let { x, y, h, line, fontSize, fillStyle, text } = this
    ctx.save()

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + line[0], y + line[1])
    ctx.closePath()
    ctx.strokeStyle = '#E0E3EA'
    ctx.stroke()

    ctx.font = `${fontSize} '微软雅黑'`
    let { width: textWidth } = ctx.measureText(text)

    ctx.fillStyle = fillStyle
    ctx.fillRect(x + line[0], y + line[1] - h / 2, textWidth + 10, h)

    ctx.textBaseline = 'top'
    ctx.fillStyle = '#000'
    ctx.fillText(text, x + line[0] + 5, y + line[1] - 6)

   

    ctx.restore()
  }
}

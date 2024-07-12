export class Follow {
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
    let { x, y, line, text } = this
    ctx.save()
    let { width: textWidth } = ctx.measureText(text)

    ctx.textBaseline = 'top'
    ctx.fillStyle = 'yellow'
    ctx.strokeStyle = 'yellow'
    ctx.fillText(text, x + line[0] + textWidth + 10, y + line[1] - 6)

    ctx.restore()
  }
}

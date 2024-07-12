class Base {
  constructor(options) {
    let defaultOptions = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      rotate: 0,
      fillStyle: "yellow",
      strokeStyle: "black",
      scaleX: 1,
      scaleY: 1
    }

    Object.assign(this, defaultOptions, options)
  }
}

export class Boat extends Base {
  constructor(options) {
    super(options)
  }
  render(ctx) {
    let {x, y, w, h, rotate, fillStyle, strokeStyle, tarFlag} = this

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotate)
    if (tarFlag == 0) {
      let h1 = 10
      ctx.beginPath()
      ctx.moveTo(0, -h1 / 2 - 30)
      ctx.lineTo(0, -h1 / 2)
      ctx.closePath()
      ctx.strokeStyle = "#000"
      ctx.stroke()

      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
      ctx.fillRect(-w / 2, -h1 / 2, w, h1)
      ctx.strokeRect(-w / 2, -h1 / 2, w, h1)
    } else {
      ctx.beginPath()
      ctx.moveTo(0, -h / 2 - 30)
      ctx.lineTo(0, -h / 2)
      ctx.closePath()
      ctx.strokeStyle = "#000"
      ctx.stroke()

      ctx.moveTo(0, -h / 2)
      ctx.lineTo(-w / 2, h / 2 - 1)
      ctx.lineTo(w / 2, h / 2 - 1)
      ctx.closePath()
      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
      ctx.fill()
      ctx.stroke()
    }

    ctx.restore()
  }
}

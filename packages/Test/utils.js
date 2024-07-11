export class Circle {
  constructor(options) {
    //定义默认配置
    let defaultOptions = {
      fillStyle: 'black',
      strokeStyle: 'black',
      scaleX: 1,
      scaleY: 1,
      r: 0,
      opacity: 1,
      x: 0,
      y: 0
    }

    // 合并到实例上
    Object.assign(this, defaultOptions, options)
  }
  // 克隆当前实例
  clone() {
    let { fillStyle, scaleX, scaleY, x, y, r, opacity } = this

    return new Circle({
      fillStyle,
      scaleX,
      scaleY,
      x,
      y,
      r,
      opacity
    })
  }
  // 绘制方法
  render(ctx) {
    let { fillStyle, scaleX, scaleY, x, y, r, opacity } = this

    //保存配置
    ctx.save()
    //平移到x,y位置
    ctx.translate(x, y)
    //定义缩放
    ctx.scale(scaleX, scaleY)
    //透明度
    ctx.globalAlpha = opacity

    ctx.fillStyle = fillStyle

    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()

    //恢复画布环境
    ctx.restore()
  }
}

export class EffectScatter extends Circle {
  constructor(options) {
    super(options)

    this.data = Array.from({ length: 3 }).map(() => new Circle(options))
  }
  render(ctx) {
    this.data.forEach((item) => item.render(ctx))
  }
}

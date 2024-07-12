import gsap from 'gsap'

export class EffectScatter {
  constructor(options) {
    let defaultOptions = {
      x: 0,
      y: 0,
      r: 10,
      fillStyle: 'red',
      opacity: 1
    }

    this.c1 = Object.assign({}, defaultOptions)
    this.c2 = Object.assign({}, defaultOptions)
    this.c3 = Object.assign({}, defaultOptions)

    Object.assign(this, defaultOptions, options)
  }
  animate(gsapOpt = {}) {
    let t1 = gsap.timeline({
      defaults: { opacity: 0, r: 30, repeat: -1, duration: 3, ...gsapOpt }
    })
    t1.to(this.c1, {})
    t1.to(this.c2, {}, '<1')
    t1.to(this.c3, {}, '<1')

    return t1
  }
  render(ctx) {
    let { x, y, r, c1, c2, c3, fillStyle } = this
    ctx.save()
    ctx.translate(x, y)

    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fillStyle = fillStyle
    ctx.fill()

    ctx.beginPath()
    ctx.arc(0, 0, c1.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 0, 0, ${c1.opacity})`
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(0, 0, c2.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 0, 0, ${c2.opacity})`
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(0, 0, c3.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 0, 0, ${c3.opacity})`
    ctx.fill()
    ctx.closePath()

    ctx.restore()
  }
}

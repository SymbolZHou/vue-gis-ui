import { Path, Circle, Group } from 'zrender'
import gsap from 'gsap'

export const BoatSmall = Path.extend({
  type: 'boat',
  shape: {
    x: 0,
    y: 0,
    w: 10,
    h: 30
  },
  style: {
    fill: 'yellow',
    stroke: '#000'
  },
  buildPath(ctx, shape) {
    let { x, y, w, h } = shape

    ctx.moveTo(x, y - h / 2 - 20)
    ctx.lineTo(x, y - h / 2)
    ctx.lineTo(x - w / 2, y + h / 2)
    ctx.lineTo(x + w / 2, y + h / 2)
    ctx.lineTo(x, y - h / 2)
  }
})

export const BoatLarge = Path.extend({
  type: 'boat',
  shape: {
    x: 0,
    y: 0,
    w: 10,
    h: 30
  },
  style: {
    fill: 'yellow',
    stroke: '#000'
  },
  buildPath(ctx, shape) {
    let { x, y, w, h } = shape

    ctx.moveTo(x, y - h / 2)
    ctx.lineTo(x - w / 4, y - h / 2 + h / 15)
    ctx.lineTo(x - w / 2, y - h / 3)
    ctx.lineTo(x - w / 2, y + h / 2 - h / 11)
    ctx.lineTo(x - w / 2 + w / 6, y + h / 2)
    ctx.lineTo(x + w / 2 - w / 6, y + h / 2)
    ctx.lineTo(x + w / 2, y + h / 2 - h / 11)
    ctx.lineTo(x + w / 2, y - h / 3)
    ctx.lineTo(x + w / 4, y - h / 2 + h / 15)
    ctx.closePath()
  }
})

export class EffectScatter {
  constructor(opt) {
    this.group = new Group(opt)
    this.circle = new Circle(opt)
    this.circle1 = new Circle(opt)
    this.circle2 = new Circle(opt)
    this.circle3 = new Circle(opt)

    this.group.add(this.circle)
    this.group.add(this.circle1)
    this.group.add(this.circle2)
    this.group.add(this.circle3)

    this._onUpdate = () => {}

    this.t1 = gsap.timeline({
      defaults: { opacity: 0, r: 30, repeat: -1, duration: 3 },
      onUpdate: () => {
        // this.circle1.attr('shape', this.circle1.shape)
        // this.circle2.attr('shape', this.circle2.shape)
        // this.circle3.attr('shape', this.circle3.shape)
        this.group.dirty()
        this._onUpdate()
      }
    })

    this.start()
  }
  start() {
    this.t1.to([this.circle1.shape, this.circle1.style], {})
    this.t1.to([this.circle2.shape, this.circle2.style], {}, '<1')
    this.t1.to([this.circle3.shape, this.circle3.style], {}, '<1')
  }
  onUpdate(callback) {
    this._onUpdate = callback
  }
}

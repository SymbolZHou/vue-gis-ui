import { forEach } from 'lodash-es'

export class Layer {
  constructor(options) {
    this.map = {}
    this.options = options
    this.update = false
  }
  add(shape) {
    if (!shape) return
    let _this = this
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        _this.add(arguments[i])
      }
    } else {
      // if (this.map[shape.zIndex]) return

      this.map[shape.zIndex] = shape
      this.update = true
    }
  }
  remove(shape) {
    if (!this.map[shape.zIndex]) return
    delete this.map[shape.zIndex]

    this.update = true
  }
  draw(ctx) {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    forEach(this.map, (shape) => shape.render(ctx))
    // this.queue.forEach((item) => item.render(ctx))

    this.update = false
  }
}

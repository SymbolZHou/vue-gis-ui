import { Vector2, Matrix3 } from 'three'

export class Camera {
  constructor(x = 0, y = 0, zoom = 1) {
    this.position = new Vector2(x, y)
    this.zoom = zoom
  }
  /* 视图投影矩阵：先逆向缩放，再逆向位移 */
  get pvMatrix() {
    const {
      position: { x, y },
      zoom
    } = this
    return new Matrix3().scale(1 / zoom).translate(-x, -y)
  }
  /* 使用视图投影矩阵变换物体*/
  transformInvert(ctx) {
    const {
      position: { x, y },
      zoom
    } = this
    const scale = 1 / zoom
    ctx.translate(-x, -y)
    ctx.scale(scale, scale)
  }
}

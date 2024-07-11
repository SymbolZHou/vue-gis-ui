import { createThree } from 'vue'
import { Graphics } from 'pixi.js'
const Three = createThree({
  createElement(type) {
    let element
    switch (type) {
      case 'rect':
        element = new Graphics()
        element.beginFill(0xff0000)
        element.drawRect(0, 0, 500, 500)
        element.endFill()
        break
      case 'circle':
        element = new Graphics()
        element.beginFill(0xffff00)
        element.drawCircle(0, 0, 50)
        element.endFill()
        break
    }
    return element
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'x':
        el.x = nextValue
        break
      case 'y':
        el.y = nextValue
        break
      default:
        break
    }
  },
  insert(el, parent) {
    console.log(el, parent)
    parent.addChild(el)
  }
})

export function createApp(rootComponent) {
  return Three.createApp(rootComponent)
}

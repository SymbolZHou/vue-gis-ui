import { createRenderer } from 'vue'
import { Graphics } from 'pixi.js'
const renderer = createRenderer({
  createElement(type) {
    let element = new Graphics()
    switch (type) {
      case 'rect':
        element.rect(0, 0, 200, 200).fill('red')
        break
      case 'circle':
        element.circle(0, 0, 50).fill('red')
        break
    }
    return element
  },
  patchProp(el, key, prevValue, nextValue) {
    el[key] = nextValue
  },
  createText(text) {
    return text
  },
  insert(el, parent) {
    if (el instanceof Graphics) parent.addChild(el)
  }
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}

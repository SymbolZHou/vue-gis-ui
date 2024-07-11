import { h, render } from 'vue'
import { NSpin } from 'naive-ui'

const createSpin = (props) => {
  let instance = h(NSpin, props)

  let container = document.createElement('div')

  container.className = 'container-spin'
  container.style.background = props.background

  const open = (el) => {
    render(instance, container)
    el.appendChild(container)
  }

  const close = (el) => {
    render(null, container)
    if (el.contains(container)) {
      el.removeChild(container)
    }
  }

  return { open, close, instance }
}

const handler = (el, binding) => {
  let { open, close } = el.spin
  if (binding.value) {
    open(el)
  } else {
    close(el)
  }
}

export const loading = {
  mounted(el, binding) {
    let stroke = el.getAttribute('loading-color') || 'green'

    let props = {
      description: el.getAttribute('loading-text') || '',
      background: el.getAttribute('loading-background') || 'rgba(255,255,255,0.6)',
      size: el.getAttribute('loading-size') || 'medium',
      stroke,
      contentStyle: {
        color: stroke
      }
    }

    el.spin = createSpin(props)
    handler(el, binding)
  },
  updated(el, binding) {
    console.log(2)
    handler(el, binding)
  }
}

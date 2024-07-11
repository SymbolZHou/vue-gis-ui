import { Application } from 'pixi.js'

const app = new Application()

app.init({ width: 750, height: 750, background: '#1099bb', resizeTo: window }).then(() => {
  document.body.append(app.canvas)
})

export function getRootContainer() {
  return app.stage
}

export function getGame() {
  return app
}

import { Application } from 'pixi.js'

const game = new Application({
  width: 750,
  height: 750
})

document.body.append(game.view)

export function getRootContainer() {
  return game.stage
}

export function getGame() {
  return game
}

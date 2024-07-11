import { loading } from './loading/index.js'

export const setupDirective = (app) => {
  app.directive('loading', loading)
}

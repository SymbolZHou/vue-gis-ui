import { createPinia } from 'pinia'
import { loading } from './plugins/loading'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

export const setupStore = (app) => {
  app.use(pinia)
}

pinia.use(loading)
pinia.use(
  createPersistedState({
    storage: window.localStorage
  })
)

export default pinia

export { useRouterStore } from './router'

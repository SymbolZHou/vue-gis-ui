import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import { setupComponents } from '@vue-demo/components'
import { setupPlugins } from '@/plugins'
// import { setupDirectives } from '@/directive'

import './styles/index.scss'

import App from './App.vue'

const app = createApp(App)
app.use(setupComponents)
setupStore(app)
setupRouter(app)
setupPlugins(app)
// setupDirectives(app)

app.mount('#app')

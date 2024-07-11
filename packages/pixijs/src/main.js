import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/index.scss'
import '@/plugins'
import { setupDirective } from '@vue-demo/directives'

import { setupRouter } from '@/router'

const app = createApp(App)

app.use(createPinia())

setupRouter(app)
setupDirective(app)

app.mount('#app')

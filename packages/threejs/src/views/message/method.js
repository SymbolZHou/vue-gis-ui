import { createApp } from './runtime-canvas'
import App from './App.vue'
import { getRootContainer } from './game'
createApp(App).mount(getRootContainer())

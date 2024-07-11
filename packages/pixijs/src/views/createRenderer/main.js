//封装自定义渲染到canvas平台上的逻辑
import { createApp } from './runtime-canvas'
import App from './App.vue'
//初始化canvas的容器
import { getRootContainer } from './game'

createApp(App).mount(getRootContainer())

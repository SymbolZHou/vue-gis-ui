import './dayjs'
import echarts from './echarts'

export const setupPlugins = (app) => {
  app.use(echarts)
}

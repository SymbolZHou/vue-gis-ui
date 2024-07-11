import OlMeasure from "./index.vue"
import OlDistance from "./OlDistance/index.vue"
import OlArea from "./OlArea/index.vue"

export default {
  install(app) {
    app.component(OlMeasure.name, OlMeasure)
    app.component(OlDistance.name, OlDistance)
    app.component(OlArea.name, OlArea)
  }
}

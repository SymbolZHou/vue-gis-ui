import OlCompass from "./OlCompass/index.vue"
import Openlayers from "./Openlayers.vue"
import OlSelectLayers from "./OlSelectLayers.vue"
import OlScaleLine from "./OlScaleLine.vue"
import OlView from "./OlView.vue"
import OlZoom from "./OlZoom.vue"
import OlContextmenu from "./OlContextmenu.vue"
import OlMeasure from "./OlMeasure"
import OlOverlay from "./OlOverlay"
import OlSelectMap from "./OlSelectMap"

export default {
  install(app) {
    app.component(Openlayers.name, Openlayers)
    app.component(OlCompass.name, OlCompass)
    app.component(OlZoom.name, OlZoom)
    app.component(OlSelectLayers.name, OlSelectLayers)
    app.component(OlScaleLine.name, OlScaleLine)
    app.component(OlView.name, OlView)
    app.component(OlContextmenu.name, OlContextmenu)
    app.component(OlOverlay.name, OlOverlay)
    app.component(OlSelectMap.name, OlSelectMap)
    app.use(OlMeasure)
  }
}

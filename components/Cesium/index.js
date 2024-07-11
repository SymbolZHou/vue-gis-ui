// import OlCompass from "./OlCompass/index.vue"
import Cesium from "./Cesium.vue"
import CesiumSelectLayers from "./CesiumSelectLayers.vue"
// import OlScaleLine from "./OlScaleLine.vue"
// import OlView from "./OlView.vue"
// import OlZoom from "./OlZoom.vue"
// import OlContextmenu from "./OlContextmenu.vue"
// import OlMeasure from "./OlMeasure"
// import OlOverlay from "./OlOverlay"
// import OlSelectMap from "./OlSelectMap"

export default {
  install(app) {
    app.component(Cesium.name, Cesium)
    // app.component(OlCompass.name, OlCompass)
    // app.component(OlZoom.name, OlZoom)
    app.component(CesiumSelectLayers.name, CesiumSelectLayers)
    // app.component(OlScaleLine.name, OlScaleLine)
    // app.component(OlView.name, OlView)
    // app.component(OlContextmenu.name, OlContextmenu)
    // app.component(OlOverlay.name, OlOverlay)
    // app.component(OlSelectMap.name, OlSelectMap)
    // app.use(OlMeasure)
  }
}

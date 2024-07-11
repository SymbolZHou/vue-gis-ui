import Three from "./Three"
import WebGL from "./WebGL"
import Layout from "./Layout"
import RemixIcon from "./RemixIcon"

export const setupComponents = app => {
  app.component(Three.name, Three)
  app.component(WebGL.name, WebGL)
  app.component(Layout.name, Layout)
  app.component(RemixIcon.name, RemixIcon)
}

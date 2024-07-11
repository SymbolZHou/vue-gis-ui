import Mock from "mockjs"
import {basic, three} from "./three"
import {openlayers} from "./openlayers"
export default [
  {
    url: "/mock-server/getRouters",
    method: "get",
    response(req) {
      if (req.query.system === "three") {
        return {
          code: 200,
          data: [
            {
              path: "/",
              name: "basic",
              meta: {
                title: "basic"
              },
              children: basic
            },
            ...three
          ]
        }
      } else if (req.query.system == "openlayers") {
        return {
          code: 200,
          data: [
            {
              path: "/",
              name: "basic",
              meta: {
                title: "basic"
              },
              children: openlayers
            }
          ]
        }
      } else {
        return {
          code: 200,
          data: [
            {
              path: "/three",
              name: "three",
              meta: {
                title: "threejs"
              },
              children: [...basic, ...three]
            }
          ]
        }
      }
    }
  }
]

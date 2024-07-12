import Mock from "mockjs"
import {three} from "./three"
import {openlayers} from "./openlayers"
export default [
  {
    url: "/mock-server/getRouters",
    method: "get",
    response(req) {
      return {
        code: 200,
        data: [three, openlayers]
      }
    }
  }
]

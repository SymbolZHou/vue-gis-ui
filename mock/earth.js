import Mock from "mockjs"
// import railway from "./铁路线.json"

export default [
  {
    url: "/mock/airports",
    method: "get",
    response() {
      return Mock.mock({
        "data|50000-60000": [
          {
            id: "@guid()",
            lat: "@float(90, -90)",
            lon: "@float(180, -180)"
          }
        ]
      })
    }
  },
  {
    url: "/mock/railway",
    method: "get",
    response() {
      // return railway.features.map(item => item.geometry.coordinates)
    }
  },
  {
    url: "/mock/column",
    method: "get",
    response() {
      return Mock.mock({
        "data|500": [
          {
            id: "@guid()",
            lat: "@float(90, -90)",
            lon: "@float(180, -180)"
          }
        ]
      })
    }
  }
]

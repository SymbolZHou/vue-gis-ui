import Mock from "mockjs"
let {data: boatData} = Mock.mock({
  "data|200": [
    {
      name: "佛山@integer(10000, 200000)",
      wail: "@integer(1000, 9999)",
      "No|+1": 900000000,
      captain: "@cname",
      "id|+1": 1,
      lat: "@float(113.6, 113.82, true)",
      lng: "@float(22,22.6, true)",
      // lat: "@float(-180, 180)",
      // lng: "@float(84, -84)",
      targetType: "@integer(0, 1)",
      boatType: "@integer(0, 6)",
      error: "@boolean(1,30, true)",
      rotate: "@integer(0, 360)",
      follow: "@boolean",
      length: "@integer(10, 400)",
      width: "@integer(5, 100)"
    }
  ]
})
export default [
  {
    url: "/mock-server/boat/query",
    method: "get",
    response() {
      return Mock.mock({
        code: 200,
        data: {
          total: boatData.length,
          data: boatData
        },
        msg: "操作成功"
      })
    }
  }
]

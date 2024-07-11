export let tk = "0f233d6b97b4a74b221a3869ff542b39"
//	f3efc3dbaeac69cf5c521c0bc87d0c56
export let list = [
  {
    value: "1",
    text: "矢量",
    icon: new URL("./images/vector.png", import.meta.url).href
  },
  {
    value: "2",
    text: "影像",
    icon: new URL("./images/image.png", import.meta.url).href
  },
  {
    value: "3",
    text: "地形",
    icon: new URL("./images/ter_c.png", import.meta.url).href,
    layers: new LayerGroup({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `http://t2.tianditu.gov.cn/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=${tk}`
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: `http://t2.tianditu.gov.cn/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=${tk}`
          })
        })
      ]
    })
  }
]
list._map = keyBy(list, "value")

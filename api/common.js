import {request} from "@/utils/request/index"

export const getRouters = params => {
  return request({
    url: "/getRouters",
    method: "GET",
    params
  })
}

// export const getGeoJSON = code => {
//   let prefix = import.meta.env.VITE_APP_BASEURL === "/api" ? "http:/" : ""

//   return request({
//     url: `${prefix}/geo.datav.aliyun.com/areas_v3/bound/geojson?code=${code}`,
//     method: "GET",
//     noToken: true,
//     noHandleResponse: true
//   })
// }
export const getGeoJSON = code => {
  return request({
    url: `/geoJson数据包/${code}.geoJson`,
    method: "GET",
    noBaseURL: true,
    noToken: true,
    noHandleResponse: true
  })
}
export const getCity = () => {
  return request({
    url: `${prefix}/geo.datav.aliyun.com/areas_v3/bound/all.json`,
    method: "GET",
    noToken: true,
    noHandleResponse: true
  })
}

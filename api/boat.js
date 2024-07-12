import {request} from "@/utils/request/index"

export const getBoat = params => {
  return request({
    url: "/boat/query",
    method: "GET",
    params
  })
}

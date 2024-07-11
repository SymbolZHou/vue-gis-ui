import {getDistance} from "ol/sphere"
import numeral from "numeral"

export const getDistanceTotal = coordinates => {
  return coordinates.reduce((target, item, index) => {
    let next = coordinates[index + 1]
    if (!next) return target
    target += getDistance(item, next)
    return target
  }, 0)
}

export const formatDistance = value => {
  if (value > 10000) {
    return numeral(value / 1000).format("0.00") + "km"
  }
  return numeral(value).format("0.00") + "m"
}

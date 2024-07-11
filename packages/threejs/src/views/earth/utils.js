export function lon2xyz(R, longitude, latitude) {
  var lon = (longitude * Math.PI) / 180 //转弧度值
  var lat = (latitude * Math.PI) / 180 //转弧度值
  lon = -lon // three.js坐标系z坐标轴对应经度-90度，而不是90度

  // 经纬度坐标转球面坐标计算公式
  var x = R * Math.cos(lat) * Math.cos(lon)
  var y = R * Math.sin(lat)
  var z = R * Math.cos(lat) * Math.sin(lon)
  // 返回球面坐标
  return {
    x: x,
    y: y,
    z: z
  }
}

export const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

export const pLimit = (max) => {
  let count = 0
  let queue = []

  const add = async (options) => {
    queue.push(run.bind(undefined, options))

    await Promise.resolve()

    if (count < max && queue.length > 0) {
      queue.shift()()
    }
  }

  const next = () => {
    count--

    if (queue.length > 0) {
      queue.shift()()
    }
  }

  const run = async ({ fn, args, resolve }) => {
    count++

    let result = await fn(...args)
    resolve(result)

    next()
  }

  const generator = (fn, ...args) =>
    new Promise((resolve) => {
      add({
        fn,
        args,
        resolve
      })
    })

  return generator
}

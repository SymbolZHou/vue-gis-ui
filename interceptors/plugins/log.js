export const handleInterceptorLog = instance => {
  instance.interceptors.request.use(function (config) {
    let { url, params, data, baseURL } = config
    console.group()
    console.log('请求链接:', baseURL + url)
    if (params) {
      console.log('params:', params)
    }
    if (data) {
      console.log('data:', data)
    }
    console.groupEnd()
    return config
  })
}

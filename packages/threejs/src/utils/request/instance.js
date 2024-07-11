import axios from 'axios'

import { handleInterceptorState, handleInterceptorAction } from '@vue-demo/interceptors'

var instance = axios.create({
  timeout: 30000
})

instance.interceptors.request.use((config) => {
  if (!config.noBaseURL) {
    config.baseURL = import.meta.env.VITE_APP_BASEURL
  }

  return config
})

handleInterceptorAction(instance)

handleInterceptorState(instance)

export default instance

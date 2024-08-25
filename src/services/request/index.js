import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { useMainsStore } from '@/stores/modules/main'

const store = useMainsStore()

class XYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(
      (config) => {
        store.isLoading = true
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        store.isLoading = false
        return res
      },
      (error) => {
        store.isLoading = false
        return Promise.reject(error)
      }
    )
  }

  request(config) {
    // store.isLoading = true
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
          // store.isLoading = false
        })
        .catch((err) => {
          reject(err)
          // store.isLoading = false
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new XYRequest(BASE_URL, TIMEOUT)

import XYRequest from '@/services/request/index'

export function getCityAll() {
  return XYRequest.get({
    url: '/city/all'
  })
}

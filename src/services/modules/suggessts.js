import XYRequest from '@/services/request'

export function getHotSuggessts() {
  return XYRequest.get({
    url: '/home/hotSuggests'
  })
}

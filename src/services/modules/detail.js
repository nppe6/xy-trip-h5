import XYRequest from '@/services/request'

export function getHouseInfos(houseId) {
  return XYRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}

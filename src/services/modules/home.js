import XYRequest from '@/services/request'

export function getCategories() {
  return XYRequest.get({
    url: '/home/categories'
  })
}

export function getPageContent(currentPage) {
  return XYRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}

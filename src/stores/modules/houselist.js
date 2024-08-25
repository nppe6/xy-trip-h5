import { defineStore } from 'pinia'
import { getPageContent } from '@/services/modules/home'
import { ref } from 'vue'

export const usePageCountent = defineStore('pageCountent', () => {
  const houseList = ref([])
  const pageNUmber = ref(1)

  const axiosGetPageCounent = async () => {
    const res = await getPageContent(pageNUmber.value)
    // 这里如果直接去进行push那么就是push进去一个个的数组 所以遇到这种分页的情况 这里push进去的一定要是解构好了的
    houseList.value.push(...res.data)
    pageNUmber.value++
  }

  return { houseList, axiosGetPageCounent }
})

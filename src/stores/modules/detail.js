import { defineStore } from 'pinia'
import { getHouseInfos } from '@/services/modules/detail'
import { ref } from 'vue'

export const useDetailStore = defineStore('detail', () => {
  const detailInfos = ref({})

  const axiosGetHouseInfos = async (houseId) => {
    const res = await getHouseInfos(houseId)
    detailInfos.value = res.data
  }

  return { detailInfos, axiosGetHouseInfos }
})

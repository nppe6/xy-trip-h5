import { getHotSuggessts } from '@/services/modules/suggessts'
import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useGetHotStore = defineStore('hotSuggessts', () => {
  const hotData = ref([])

  const axiosGetHotData = async () => {
    const res = await getHotSuggessts()
    hotData.value = res.data
  }

  return { hotData, axiosGetHotData }
})

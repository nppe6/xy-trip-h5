import { getCityAll } from '@/services'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCityStore = defineStore('city', () => {
  // 网络中拿取的数据
  const allCities = ref({})
  // 全局选择的数据
  const currentCity = ref({
    cityName: '赣州'
  })

  const axiosAllCitiesData = async () => {
    const res = await getCityAll()
    allCities.value = res.data
  }

  return { allCities, axiosAllCitiesData, currentCity }
})

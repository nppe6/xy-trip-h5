import { getCityAll } from '@/services'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCityStore = defineStore('city', () => {
  const allCities = ref({})

  const axiosAllCitiesData = async () => {
    const res = await getCityAll()
    allCities.value = res.data
  }

  return { allCities, axiosAllCitiesData }
})

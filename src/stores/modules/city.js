import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCityStore = defineStore('city', () => {
  const cities = reactive([])

  const data = async () => {}

  return { cities, data }
})

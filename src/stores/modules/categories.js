import { defineStore } from 'pinia'
import { getCategories } from '@/services/modules/home'
import { ref } from 'vue'

export const useCategories = defineStore('categories', () => {
  const categoriesList = ref([])

  const axiosCatgories = async () => {
    const res = await getCategories()
    categoriesList.value = res.data
  }

  return { categoriesList, axiosCatgories }
})

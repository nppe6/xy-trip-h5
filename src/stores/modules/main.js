import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainsStore = defineStore('main', () => {
  const isLoading = ref(true)

  return { isLoading }
})

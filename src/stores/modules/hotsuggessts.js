import { getHotSuggessts } from '@/services/modules/suggessts'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { formatMonthDay } from '@/utils/format_day'
export const useGetHotStore = defineStore('hotSuggessts', () => {
  const hotData = ref([])
  // 日期范围的选择
  const nowData = ref(formatMonthDay(new Date()))
  // 拿到当前时间戳 往后加一天 在传入工具函数之中
  const newData = new Date().getTime() + 24 * 60 * 60 * 1000
  const endData = ref(formatMonthDay(newData))

  const axiosGetHotData = async () => {
    const res = await getHotSuggessts()
    hotData.value = res.data
  }

  return { hotData, axiosGetHotData, nowData, endData }
})

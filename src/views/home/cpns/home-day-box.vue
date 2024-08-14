<template>
  <div class="day-main">
    <div class="date-range" @click="showCalender = true">
      <div class="start">
        <span class="date-title">入住</span>
        <span>{{ nowData }}</span>
      </div>
      <div class="stay">共{{ totalDay ? totalDay : '一' }}天</div>
      <div class="end">
        <span class="date-title">离开</span>
        <span>{{ endData }}</span>
      </div>
    </div>
    <van-calendar v-model:show="showCalender" type="range" color="#ff9854" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatMonthDay } from '@/utils/format_day'
// 日期范围的选择
const nowData = ref(formatMonthDay(new Date()))
// 拿到当前时间戳 往后加一天 在传入工具函数之中
const newData = new Date().getTime() + 24 * 60 * 60 * 1000
const endData = ref(formatMonthDay(newData))

const showCalender = ref(false)
const onConfirm = (day) => {
  console.log(day[0].getTime())
  handleDay(day[0].getTime(), day[1].getTime())
  nowData.value = formatMonthDay(day[0])
  endData.value = formatMonthDay(day[1])
  showCalender.value = false
}
const totalDay = ref()
const handleDay = (start, end) => {
  const day = Math.floor((end - start) / (24 * 60 * 60 * 1000))
  console.log(day)

  totalDay.value = day
}
</script>

<style lang="scss" scoped>
.day-main {
  .date-range {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    margin-top: 10px;
    padding: 0 20px;

    .start,
    .end {
      display: flex;
      flex-direction: column;

      .date-title {
        font-size: 14px;
        color: #aaa;
        margin-bottom: 4px;
      }
    }
  }
}
</style>

<template>
  <div class="day-main">
    <div class="date-range bottom-gray-line" @click="showCalender = true">
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
    <div class="section bottom-gray-line">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
      <div class="keyword">关键字/位置/民宿名</div>
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
    padding: 0 20px 5px;

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
  .section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .price,
    .people {
      color: #aaa;
      font-size: 14px;
      padding: 10px 0;
    }

    .price {
      grid-column: 1 / span 1;
      text-align: end;
      padding-right: 20px;
    }

    .people {
      grid-column: 3 / span 1;
      text-align: start;
      padding-left: 20px;
    }

    .keyword {
      grid-column: 1 / span 4;
      color: #aaa;
      font-size: 14px;
      padding: 10px 0 10px;
      margin-left: 40px;
    }
  }
}
</style>

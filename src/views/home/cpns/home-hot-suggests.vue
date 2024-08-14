<template>
  <div class="hot-suggessts">
    <div class="hot-main">
      <template v-for="(ele, index) in hotData" :key="index">
        <div class="item">
          {{ ele.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useGetHotStore } from '@/stores/modules/hotsuggessts'
import { storeToRefs } from 'pinia'
const store = useGetHotStore()
const { hotData } = storeToRefs(store)

store.axiosGetHotData()
console.log(hotData)
</script>

<style lang="scss" scoped>
.hot-suggessts {
  padding: 0 16px;
  .hot-main {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 12px;

    .item {
      padding: 4px 8px;
      font-size: 14px;
      color: #333;
      line-height: 24px;
    }
  }
}
</style>

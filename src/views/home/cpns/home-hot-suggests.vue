<template>
  <div class="hot-suggessts">
    <div class="hot-main">
      <template v-for="(ele, index) in hotData" :key="index">
        <div class="item">
          {{ ele.tagText.text }}
        </div>
      </template>
    </div>
    <div class="seach-button">
      <div class="btn" @click="handleSearch()">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { useCityStore } from '@/stores/modules/city'
import { useGetHotStore } from '@/stores/modules/hotsuggessts'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const store = useGetHotStore()
const { hotData } = storeToRefs(store)

store.axiosGetHotData()
console.log(hotData)

// 获取pinia存储的当前城市信息
const storeCurrentCity = useCityStore()
const { currentCity } = storeToRefs(storeCurrentCity)

// 点击开始搜索跳转到搜索页面
const router = useRouter()
const handleSearch = () => {
  router.push({ name: 'search', query: { currentCity: currentCity.value.cityName } })
}
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
  .seach-button {
    .btn {
      width: 100%;
      height: 44px;
      color: #fff;
      text-align: center;
      border-radius: 20px;
      line-height: 44px;
      background-image: var(--theme-linear-gradient);
    }
  }
}
</style>

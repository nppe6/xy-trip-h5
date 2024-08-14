<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexCity">
      <van-index-anchor index="热门" />

      <div class="hot-city">
        <template v-for="(item, index) in hotCities" :key="index">
          <div class="hot-city-item" @click="handleCity(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(ele, index) in gruopData" :key="index">
        <van-index-anchor :index="ele.group" />
        <template v-for="(item, index) in ele.cities" :key="index">
          <van-cell :title="item.cityName" @click="handleCity(item)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { useCityStore } from '@/stores/modules/city'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const Prop = defineProps({
  gruopData: {
    type: Array,
    default: () => []
  },
  hotCities: {
    type: Array,
    default: () => []
  }
})

// 侧边索引 以后端传回的数据 渲染以及添加热门索引
const indexCity = computed(() => {
  const list = Prop.gruopData.map((item) => item.group)
  list.unshift('#')
  return list
})

// 选择城市并返回上一级
const router = useRouter()
const Citystore = useCityStore()
const handleCity = (cityObj) => {
  Citystore.currentCity = cityObj
  router.back()
}
</script>

<style lang="scss" scoped>
.city-group {
  --van-index-bar-index-line-height: 16px;

  .hot-city {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    padding: 10px 22px;
    gap: 10px;

    .hot-city-item {
      text-align: center;
      padding: 10px;
      font-size: 12px;
      background-color: #fff9f6;
      color: #000;
      border-radius: 6px;
    }
  }
}
</style>

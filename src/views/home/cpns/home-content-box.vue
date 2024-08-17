<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="ele in houseList" :key="ele.data.houseId">
        <div v-if="ele.discoveryContentType === 9">
          <HouseItemV9 :house-data="ele.data"></HouseItemV9>
        </div>
        <div v-else>
          <HouseItemV3 :house-data="ele.data"></HouseItemV3>
        </div>
      </template>
    </div>
    <div class="footer">
      <button class="add-house" @click="handleMoney()">加载更多</button>
    </div>
  </div>
</template>

<script setup>
import HouseItemV9 from '@/components/house-item-v9/index.vue'
import HouseItemV3 from '@/components/house-item-v3/index.vue'
import { usePageCountent } from '@/stores/modules/houselist'
import { storeToRefs } from 'pinia'

const store = usePageCountent()
const { houseList } = storeToRefs(store)
store.axiosGetPageCounent()

const handleMoney = () => {
  console.log('加载更多')

  store.axiosGetPageCounent()
}
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 12px;

  .title {
    font-size: 22px;
    color: #333;
    padding: 0 2px;
  }

  .list {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .add-house {
      border: none;
      color: var(--primary-color);
      font-size: 14px;
      background: none;
    }
  }
}
</style>

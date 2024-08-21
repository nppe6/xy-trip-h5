<template>
  <div class="search-bar">
    <div class="selected-time">
      <div class="start">
        <div class="name">住</div>
        <div class="start-time">{{ nowData }}</div>
      </div>
      <div class="end">
        <div class="name">离</div>
        <div class="end-time">{{ endData }}</div>
      </div>
    </div>
    <div class="content" @click="handleSearchPage()">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <!-- <div class="right">
      <i></i>
    </div> -->
  </div>
</template>

<script setup>
import { useGetHotStore } from '@/stores/modules/hotsuggessts'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'SearchBar'
})
const router = useRouter()
const handleSearchPage = () => {
  router.push({ name: 'search' })
}

const store = useGetHotStore()
const { nowData, endData } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;

  .selected-time {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .start,
    .end {
      display: flex;
      .name {
        font-size: 14px;
        color: #999;
      }

      .start-time,
      .end-time {
        text-align: center;
        font-size: 14px;
      }

      // .end-time::after {
      //   content: '';
      //   display: inline-block;
      //   width: 14.5px;
      //   height: 15px;
      //   background-image: url('../../assets/image/sprite.png');
      //   background-position: -92px -58.5px;
      //   background-size: 125px 110px;
      // }
    }
  }

  .content {
    background-color: #f5f5f5;
    flex: 1;
    padding: 4px 12px;
    display: flex;
    align-items: center;
    border-radius: 22px;

    .keyword {
      color: #999;
      font-size: 14px;
      position: relative;
    }
    &::after {
      content: '';
      position: absolute;
      right: 28px;
      top: 30px;
      width: 24px;
      height: 24px;

      background: url('../../assets/image/home/home-sprite.png');
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>

<template>
  <div class="search-box">
    <div class="location bottom-gray-line">
      <div class="city" @click="handleCity()">
        {{ currentCity.cityName }}
      </div>
      <div class="position" @click="getPosition()">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleCity = () => {
  router.push({ name: 'city' })
}

// 根据经纬度 获取当前位置
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取位置成功', res)
    },
    (err) => {
      console.log('获取位置失败', err)
    }
  )
}

// 拿到pinia 存储的全局城市数据
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
</script>

<style lang="scss" scoped>
.search-box {
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    color: #333;

    .city {
      margin-right: auto;
    }

    .position {
      display: flex;
      height: 100%;
      align-items: center;

      .text {
        color: #333;
        font-size: 15px;
      }

      img {
        width: 22px;
        height: 22px;
        margin-left: 2px;
      }
    }
  }
}
</style>

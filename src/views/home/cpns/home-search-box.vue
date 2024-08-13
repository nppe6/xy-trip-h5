<template>
  <div class="location">
    <div class="city" @click="handleCity()">赣州</div>
    <div class="position" @click="getPosition()">
      <span class="text">我的位置</span>
      <img src="@/assets/image/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleCity = () => {
  router.push({ name: 'city' })
}

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
</script>

<style lang="scss" scoped>
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

    img {
      width: 22px;
      height: 22px;
      margin-left: 2px;
    }
  }
}
</style>

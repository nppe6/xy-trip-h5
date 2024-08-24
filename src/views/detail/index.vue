<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <detail-swipe :house-id="houseId"></detail-swipe>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import DetailSwipe from './cpns/detail-swipe.vue'
defineOptions({
  name: 'DetailIndex'
})

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

const onClickLeft = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);
}
</style>

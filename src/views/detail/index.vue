<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <div v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import DetailSwipe from './cpns/detail-swipe.vue'
import { computed } from 'vue'
import { useDetailStore } from '@/stores/modules/detail'
import { storeToRefs } from 'pinia'
defineOptions({
  name: 'DetailIndex'
})

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

const onClickLeft = () => {
  router.back()
}

const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)
detailStore.axiosGetHouseInfos(houseId)
// 因为这里我们请求出来的数据过于复杂 这时候我们可以通过计算属性 去进行拆解出来 就不用 在detailInfos.mainPart
const mainPart = computed(() => detailInfos.value.mainPart)
</script>

<style lang="scss" scoped>
.detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);
}
</style>

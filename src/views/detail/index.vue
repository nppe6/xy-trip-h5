<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <div v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-infos :house-data="mainPart.topModule"></detail-infos>
      <detail-facility
        :facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detail-facility>
      <detail-comment :house-comment="mainPart.dynamicModule.commentModule"></detail-comment>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useDetailStore } from '@/stores/modules/detail'
import { storeToRefs } from 'pinia'

import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailComment from './cpns/detail_05-comment.vue'

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

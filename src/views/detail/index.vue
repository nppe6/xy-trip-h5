<template>
  <div class="detail">
    <tab-control v-if="showTabsIntro" class="tabs"></tab-control>
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft()" />
    <div v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-infos :house-data="mainPart.topModule"></detail-infos>
      <detail-facility
        :facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></detail-facility>
      <detail-comment :house-comment="mainPart.dynamicModule.commentModule"></detail-comment>
      <detail-map :house-map="mainPart.dynamicModule.positionModule"></detail-map>
      <detail-intor :house-intro="mainPart.introductionModule"></detail-intor>
    </div>
    <div class="footer">
      <div class="text">穷游旅途，永无止境！</div>
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
import DetailMap from './cpns/detail_06-map.vue'
import DetailIntor from './cpns/detail_07-intro.vue'
import TabControl from '@/components/tab-control/index.vue'
import useScroll from '@/hooks/useScroll'

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

const scorll = useScroll()
const showTabsIntro = computed(() => {
  return scorll.scrollTop.value > 300
})
</script>

<style lang="scss" scoped>
.detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);

  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;

    .text {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>

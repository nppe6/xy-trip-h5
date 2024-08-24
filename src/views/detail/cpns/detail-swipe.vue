<template>
  <div v-if="mainPart" class="detail-swupe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(ele, index) in mainPart.topModule.housePicture.housePics" :key="index">
        <van-swipe-item>
          <img :src="ele.url" alt="" />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDetailStore } from '@/stores/modules/detail'
import { storeToRefs } from 'pinia'

const props = defineProps({
  houseId: String
})

const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)
detailStore.axiosGetHouseInfos(props.houseId)
// 因为这里我们请求出来的数据过于复杂 这时候我们可以通过计算属性 去进行拆解出来 就不用 在detailInfos.mainPart
const mainPart = computed(() => detailInfos.value.mainPart)
console.log('321313', mainPart)
</script>

<style lang="scss" scoped>
.detail-swupe {
  .my-swipe {
    img {
      width: 100%;
    }
  }
}
</style>

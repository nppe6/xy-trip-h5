<template>
  <div v-if="isLoading" class="loding" @click="handleClonse()">
    <div class="bg">
      <img src="@/assets/image/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useMainsStore } from '@/stores/modules/main'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'LodingIndex'
})

const isLoadingStore = useMainsStore()
const { isLoading } = storeToRefs(isLoadingStore)

const handleClonse = () => {
  isLoading.value = false
}
</script>

<style lang="scss" scoped>
.loding {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 107px;
    height: 107px;
    background: url('@/assets/image/home/loading-bg.png') 0 0 / 100% 100%;
  }

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
}
</style>

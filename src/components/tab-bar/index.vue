<template>
  <div class="tab-bar">
    <van-tabbar v-model="cueeentIndex" active-color="#ff9854">
      <template v-for="(ele, index) in tabbarData" :key="ele.path">
        <van-tabbar-item :to="ele.path">
          <span>{{ ele.text }}</span>
          <template #icon>
            <img
              :src="cueeentIndex === index ? getAssets(ele.imageActive) : getAssets(ele.image)"
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabbar'
import { getAssets } from '@/utils/load_assets'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
defineOptions({
  name: 'TarBarIndex'
})
const cueeentIndex = ref(0)
const route = useRoute()
watch(route, (newVal) => {
  const index = tabbarData.findIndex((ele) => ele.path === newVal.path)
  if (index === -1) return
  cueeentIndex.value = index
})
</script>

<style lang="scss" scoped>
.tab-bar {
  img {
    height: 28px;
  }

  span {
    font-size: 14px;
  }
}
</style>

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
import { ref } from 'vue'
defineOptions({
  name: 'TarBarIndex'
})
const cueeentIndex = ref(0)
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

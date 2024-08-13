<template>
  <div class="tab-bar">
    <template v-for="(ele, index) in tabbarData" :key="ele.path">
      <div
        class="tab-bar-item"
        :class="cueeentIndex === index ? 'active' : ''"
        @click="itemClick(ele.path, index)"
      >
        <img :src="cueeentIndex === index ? getAssets(ele.imageActive) : getAssets(ele.image)" />
        <span class="text">{{ ele.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabbar'
import { getAssets } from '@/utils/load_assets'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
defineOptions({
  name: 'TarBarIndex'
})
const cueeentIndex = ref(0)

const router = useRouter()
const itemClick = (path, index) => {
  cueeentIndex.value = index
  router.push(path)
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;

  display: flex;
  border-top: 1px solid #ccc;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    .text {
      font-size: 14px;
    }

    img {
      width: 32px;
    }
  }
}
</style>

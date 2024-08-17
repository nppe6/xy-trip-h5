<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" />
    </div>
    <homeSearchBox></homeSearchBox>
    <homeDayBox></homeDayBox>
    <homeHotSuggests></homeHotSuggests>
    <homeCategoriesBox></homeCategoriesBox>
    <homeContentBox></homeContentBox>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import homeSearchBox from './cpns/home-search-box.vue'
import homeDayBox from './cpns/home-day-box.vue'
import homeHotSuggests from './cpns/home-hot-suggests.vue'
import homeCategoriesBox from './cpns/home-categories-box.vue'
import homeContentBox from './cpns/home-content-box.vue'
import useScroll from '@/hooks/useScroll'
import { watch } from 'vue'
import { usePageCountent } from '@/stores/modules/houselist'
defineOptions({
  name: 'HomeIndex'
})

const store = usePageCountent()
store.axiosGetPageCounent()

// window.addEventListener('scroll', () => {
//   // 表示当前屏幕的高度
//   const clientHeight = document.documentElement.clientHeight
//   // 表示当前滚动的高度
//   const scrollTop = document.documentElement.scrollTop
//   // 表示页面文档内容总高度
//   const scrollHeight = document.documentElement.scrollHeight
//   console.log(clientHeight, scrollTop, scrollHeight)

//   if (clientHeight + scrollTop >= scrollHeight - 1) {
//     console.log('滚动到底部了')
//     store.axiosGetPageCounent()
//   }
// })

const { isReachButton } = useScroll()
console.log(isReachButton)

watch(isReachButton, (newVal) => {
  if (newVal) {
    store.axiosGetPageCounent().then(() => {
      isReachButton.value = false
    })
  }
})
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>

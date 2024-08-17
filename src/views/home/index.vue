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
defineOptions({
  name: 'HomeIndex'
})
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 50px);
  overflow-y: auto;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>

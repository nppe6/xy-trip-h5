<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" />
    </div>
    <homeSearchBox></homeSearchBox>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import homeSearchBox from './cpns/home-search-box.vue'
defineOptions({
  name: 'HomeIndex'
})
</script>

<style lang="scss" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>

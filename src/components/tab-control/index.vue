<template>
  <div class="tab">
    <van-tabs v-model:active="active" color="#ff9645">
      <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab>
      <van-tab title="标签 3"></van-tab>
      <van-tab title="标签 4"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TabControl'
})
</script>

<style lang="scss" scoped></style>

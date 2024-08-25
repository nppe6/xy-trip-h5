<template>
  <div class="intro">
    <h2 class="title">{{ houseIntro.title }}</h2>
    <div class="content">{{ houseIntro.introduction }}</div>
  </div>
</template>

<script setup>
defineProps({
  houseIntro: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.intro {
  padding: 16px;

  .title {
    font-size: 16px;
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
    text-align: justify;
    color: #666;
    line-height: 20px;
  }
}
</style>

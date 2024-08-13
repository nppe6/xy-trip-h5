<script setup>
import TarBarIndex from '@/components/tab-bar/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <router-view></router-view>
    <tar-bar-index v-if="!route.meta.hideTabbar"></tar-bar-index>
  </div>
</template>

<style scoped></style>

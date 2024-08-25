<script setup>
import TarBarIndex from '@/components/tab-bar/index.vue'
import { useRoute } from 'vue-router'
import LodingIndex from '@/components/loding-bar/index.vue'

const route = useRoute()
</script>

<template>
  <div>
    <router-view></router-view>
    <tar-bar-index v-if="!route.meta.hideTabbar"></tar-bar-index>

    <LodingIndex></LodingIndex>
  </div>
</template>

<style scoped></style>

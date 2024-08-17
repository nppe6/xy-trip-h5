<template>
  <div class="search">
    <div>当前城市：{{ $route.query.currentCity }}</div>
    <div>入住时间：{{ nowData }}</div>
    <div>离店时间：{{ endData }}</div>
  </div>
</template>

<script setup>
import { useGetHotStore } from '@/stores/modules/hotsuggessts'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'SearchIndex'
})
const store = useGetHotStore()
const { nowData, endData } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>

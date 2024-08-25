<template>
  <div class="favor" ref="favorRef">
    <h2>Favor</h2>
    <template v-for="ele in 100" :key="ele">
      <div>数据：{{ ele }}</div>
    </template>
  </div>
</template>

<script setup>
import useScroll from '@/hooks/useScroll'
import { ref } from 'vue'
defineOptions({
  name: 'FavorIndex'
})

const favorRef = ref()
useScroll(favorRef)
</script>

<style lang="scss" scoped>
.favor {
  height: 300px;
  background-color: var(--primary-color);
  overflow-y: auto;
}
</style>

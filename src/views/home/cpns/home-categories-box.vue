<template>
  <div class="catgories">
    <div class="catgories-main">
      <template v-for="ele in categoriesList" :key="ele.id">
        <div class="items">
          <img :src="ele.pictureUrl" alt="" />
          <div class="title">{{ ele.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useCategories } from '@/stores/modules/categories'
import { storeToRefs } from 'pinia'

const store = useCategories()
const { categoriesList } = storeToRefs(store)

store.axiosCatgories()
console.log(categoriesList)
</script>

<style lang="scss" scoped>
.catgories {
  margin-top: 12px;
  .catgories-main {
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .items {
      flex-shrink: 0;
      width: 64px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 6px 6px;

      img {
        width: 32px;
        height: 32px;
      }

      .title {
        margin-top: 6px;
        text-align: center;
        font-size: 14px;
        color: #777;
      }
    }
  }
}
</style>

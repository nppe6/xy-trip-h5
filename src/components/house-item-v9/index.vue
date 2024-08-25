<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseData.image.url" alt="" />
      </div>
      <div class="infos">
        <div class="summary">{{ houseData.summaryText }}</div>
        <div class="name">{{ houseData.houseName }}</div>
        <div class="price">
          <van-rate
            v-model="value"
            :size="15"
            color="#ffd21e"
            :allow-half="true"
            :readonly="true"
          />

          <span>￥{{ houseData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'HouseItemV9'
})

const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({})
  }
})

const value = ref(Number(props.houseData.commentScore))
</script>

<style lang="scss" scoped>
.house-item {
  padding: 4px;
  .item-inner {
    position: relative;

    .cover {
      width: 168px;
      height: 224px;

      img {
        border-radius: 8px;
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      background: rgba(0, 0, 0, 0.3);
      padding: 6px;

      .summary {
        margin-bottom: 2px;
      }

      .name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 16px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
      }
    }
  }
}
</style>

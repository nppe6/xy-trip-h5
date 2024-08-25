<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseData.image.url" alt="" />
      </div>
      <div class="infos">
        <div class="location"><van-icon name="location" /> {{ houseData.location }}</div>
        <div class="name">
          {{ houseData.houseName }}
        </div>
        <div class="summary">
          {{ houseData.summaryText }}
        </div>
        <div class="pric">
          <span class="pric-final">￥{{ houseData.finalPrice }}</span>
          <span class="pric-produ">￥{{ houseData.productPrice }}</span>
          <span class="price-box">{{ houseData?.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'HouseItemV3'
})

defineProps({
  houseData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.house-item {
  width: 168px;
  height: 224px;
  padding: 4px;

  .item-inner {
    .cover {
      width: 100%;
      height: 112px;
      img {
        border-radius: 8px;
        width: 100%;
      }
    }
  }

  .infos {
    padding: 8px;

    .location {
      font-size: 14px;
      color: #888;
      margin-bottom: 6px;
    }

    .name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 6px;
    }

    .summary {
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .pric {
      display: flex;
      .pric-final {
        color: #fba737;
      }

      .pric-produ {
        font-size: 14px;
        text-decoration: line-through;
        color: #888;
        display: inline-block;
      }

      .price-box {
        display: inline-block;
        margin-left: 6px;
        color: #fff;
        font-size: 14px;
        padding: 0 3px;
        background-color: #ffb9b5;
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;
      }
    }
  }
}
</style>

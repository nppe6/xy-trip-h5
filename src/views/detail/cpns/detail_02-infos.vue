<template>
  <div class="infos">
    <div class="name">{{ houseData.houseName }}</div>
    <div class="tags">
      <template v-for="(ele, index) in houseData.houseTags" :key="index">
        <span
          v-if="ele.tagText"
          class="item"
          :style="{ color: ele.tagText.color, background: ele.tagText.background.color }"
        >
          {{ ele.tagText.text }}
        </span>
      </template>
    </div>
    <div class="brief">
      <div class="left">
        <span class="over">
          {{ houseData.commentBrief.overall }}
        </span>
        <span>
          {{ houseData.commentBrief.scoreTitle }}
        </span>
        <span>
          {{ houseData.commentBrief.commentBrief }}
        </span>
      </div>
      <div class="right">{{ houseData.commentBrief.totalCount }}条评论 ></div>
    </div>
    <div class="address">
      <div class="left">
        {{ houseData.nearByPosition.address }}
      </div>
      <div class="right">地图·周边 ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  houseData: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.infos {
  padding: 10px 16px;

  .name {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    text-align: justify;
    overflow: hidden;
    line-height: 24px;
    // line-height: 2em;
  }

  .tags {
    display: flex;
    font-size: 14px;
    margin-top: 10px;

    .item {
      margin-right: 5px;
      // padding: 1px 3px;
    }
  }

  .brief {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .left {
      .over {
        font-weight: 700;
        font-size: 20px;
      }

      span:nth-child(2) {
        margin: 0 4px;
        font-size: 14px;
      }
      span:nth-child(3) {
        margin: 0 4px;
        font-size: 14px;
        color: #999;
      }
    }

    .right {
      font-size: 14px;
      color: var(--primary-color);
    }
  }

  .address {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;

    .left {
      font-weight: 600;
    }

    .right {
      color: var(--primary-color);
    }
  }
}
</style>

<template>
  <div class="comment">
    <DetailSection title="热门评论" :more-text="`查看全部${houseComment.totalCount}条评论`">
      <div class="header">
        <div class="title">
          <div>{{ houseComment.overall }}</div>
          <div>
            <div>{{ houseComment.scoreTitle }}</div>
            <div>{{ houseComment.totalCount }}条评论</div>
            <van-rate v-model="rateValue" :size="14" color="#ffd21e" />
          </div>
        </div>
        <div class="scores">
          <template v-for="(ele, index) in houseComment.subScores" :key="index">
            <div>
              {{ ele }}
            </div>
          </template>
        </div>
      </div>
      <div class="content">
        <template v-for="(item, index) in houseComment.commentTagVo" :key="index">
          <div :style="{ color: item.color, backgroundColor: item.backgroundColor }" class="item">
            {{ item.text }}
          </div>
        </template>
      </div>
      <div class="footer">
        <div class="header">
          <img :src="houseComment.comment.userAvatars" alt="" />
          <div>
            <span>{{ houseComment.comment.userName }}</span>
            <span>{{ houseComment.comment.checkInDate }}</span>
          </div>
        </div>
        <div class="content">
          {{ houseComment.comment.commentDetail }}
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/index.vue'
import { ref } from 'vue'
const props = defineProps({
  houseComment: {
    type: Object,
    default: () => ({})
  }
})
const rateValue = ref()
rateValue.value = props.houseComment.overall
</script>

<style lang="scss" scoped>
.comment {
  .header {
    display: flex;
    justify-content: space-between;

    .title {
      display: flex;

      & > div:nth-child(1) {
        font-size: 52px;
        font-weight: 600;
      }

      & > div:last-child {
        font-size: 12px;
        margin: 0 10px 0;
        line-height: 18px;

        & > div:nth-child(1) {
          font-weight: 600;
        }

        & > div:nth-child(2) {
          color: #999;
        }
      }
    }

    .scores {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px;
      font-size: 12px;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .item {
      margin: 8px 8px 8px 0;
      font-size: 14px;
    }
  }

  .footer {
    .header {
      margin-top: 10px;
      display: flex;

      img {
        margin: 8px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }

      div {
        flex: 1;
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        & > span:first-child {
          font-weight: 600;
        }

        & > span:last-child {
          font-size: 14px;
          margin-top: 4px;
          color: #999;
        }
      }
    }

    .content {
      font-size: 14px;
      font-weight: 500;
      text-align: justify;
      line-height: 18px;
    }
  }
}
</style>

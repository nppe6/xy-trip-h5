<template>
  <div class="facility">
    <DetailSection title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(ele, index) in facility.houseFacilitys" :key="index">
          <div v-if="facility?.facilitySort?.includes(index)" class="content">
            <div class="head">
              <img :src="ele.icon" alt="" />
              <div class="text">{{ ele.groupName }}</div>
            </div>
            <div class="list">
              <div class="content">
                <template v-for="(item, index) in ele.facilitys.splice(0, 4)" :key="index">
                  <div class="item">
                    <i class="icon_check icon"></i>
                    <span>{{ item.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  facility: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.facility {
  .facility-inner {
    .content {
      display: flex;
      justify-content: space-between;

      .head {
        display: flex;
        flex-basis: 80px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        img {
          width: 24px;
          height: 24px;
        }
        .text {
          margin-top: 4px;
          font-size: 14px;
        }
      }

      .list {
        flex: 1;
        margin-left: 20px;

        .content {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }
      }
    }
  }
}
</style>

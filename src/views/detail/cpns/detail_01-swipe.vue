<template>
  <div class="detail-swupe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(ele, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="ele.url" alt="" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active }">
        <!-- <div class="indicator">{{ active + 1 }} / {{ total }}</div> -->
        <!-- {{ active }} -->
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span>{{ getName(value[0].title) }}</span>
              <span v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getCount(swipeData[active]) }}/{{ value.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = ref({})
// for (const item of props.swipeData) {
//   swipeGroup[item.enumPictureCategory] = []
// }

// for (const item of props.swipeData) {
//   const valueArray = swipeGroup[item.enumPictureCategory]
//   valueArray.push(item)
// }

for (const item of props.swipeData) {
  let valueArray = swipeGroup.value[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup.value[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

const getName = (name) => {
  return name.replace('：', '')
}

const getCount = (item) => {
  const valueArray = swipeGroup.value[item.enumPictureCategory]
  return valueArray.findIndex((ele) => ele === item) + 1
}
</script>

<style lang="scss" scoped>
.detail-swupe {
  .my-swipe {
    img {
      width: 100%;
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);

      .item {
        padding: 2px 3px;
        border-radius: 8px;

        &.active {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
}
</style>

<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="cityValue"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="cancelClick()"
      />

      <van-tabs v-model:active="tabActive">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      {{ allCitiesData }}
    </div>
  </div>
</template>

<script setup>
// import { getCityAll } from '@/services'
import { useCityStore } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'CityIndex'
})

/**
 * 搜索功能
 */
const cityValue = ref('')
const router = useRouter()
const cancelClick = () => {
  // 返回上一层
  router.back()
}

/**
 * tab切换选择
 */
const tabActive = ref('')

const storeCities = useCityStore()
const { allCities } = storeToRefs(storeCities)
storeCities.axiosAllCitiesData()

// 这里如果想要他不失去响应式 就必须使用计算属性去进行拿值
const allCitiesData = computed(() => allCities.value[tabActive.value])

// const allCity = ref({})
// getCityAll().then((res) => {
//   console.log(res.data)
//   allCity.value = res.data
// })
</script>

<style lang="scss" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>

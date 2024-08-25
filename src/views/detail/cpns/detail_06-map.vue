<template>
  <div class="map">
    <DetailSection title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/index.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  houseMap: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref()

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value) // 绘制地图实例
  const point = new BMapGL.Point(props.houseMap.longitude, props.houseMap.latitude) //创建坐标 经纬度

  map.centerAndZoom(point, 15) // 地图展示的范围大小
  var marker = new BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker)
})
</script>

<style lang="scss" scoped>
.map {
  .baidu {
    height: 220px;
  }
}
</style>

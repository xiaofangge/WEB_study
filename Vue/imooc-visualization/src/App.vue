
<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
    v-if="data"
  >
    <!-- 左 -->
    <div class=" flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontaoBar class=" h-1/3 box-border pb-4" :data="data.regionData" />
      <!-- 雷达图 -->
      <LedarBar class=" h-1/3" :data="data.riskData" />
      <!-- 数据传递关系图 -->
      <Relation class=" h-1/3 box-border pb-4" :data="data.relationData" />
    </div>

    <!-- 中 -->
    <div class=" w-1/2 mr-5 flex flex-col">
      <!-- 数据总览图 -->
      <TotalData class=" bg-opacity-50 bg-slate-800 p-3" :data="data.totalData" />
      <!-- 地图可视化 -->
      <MapChart class=" bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" :data="data.mapData" />
    </div>

    <!-- 右 -->
    <div class=" flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 竖向柱状图 -->
      <VerticalBar class=" h-1/3 box-border pb-4" :data="data.serverData" />
      <!-- 环形图 -->
      <RingBar class=" h-1/3 box-border pb-4" :data="data.abnormalData" />
      <!-- 文档云图 -->
      <WordCloud class=" h-1/3" :data="data.wordCloudData" />
    </div>
  </div>
</template>

<script setup>
import HorizontaoBar from './components/HorizontalBar.vue';
import Relation from './components/Relation.vue';
import LedarBar from './components/LedarBar.vue';
import TotalData from './components/TotalData.vue';
import MapChart from './components/MapChart.vue';
import VerticalBar from './components/Verticalbar.vue';
import RingBar from './components/RingBar.vue';
import WordCloud from './components/WordCloud.vue';
import { ref } from 'vue';
import { getVisualization } from './api/visualization.js';

const data = ref(null)
const loadData = async () => {
  try {
    data.value = await getVisualization()
  } catch (error) {
    console.error("loadData error => ", error)
  } finally {
    setTimeout(() => {
      loadData()
    }, 3000);
  }
}
loadData()

</script>

<style scoped></style>

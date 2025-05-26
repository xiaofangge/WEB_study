<template>
  <div class="pie-radar-chart">
    <div ref="pieRef" class="pie"></div>
    <div ref="radarRef" class="radar"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, defineProps } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({ pieData: Array, radarData: Array })
const pieRef = ref(null)
const radarRef = ref(null)
let pieChart = null
let radarChart = null
function renderPie() {
  if (!props.pieData || props.pieData.length === 0) return
  pieChart = echarts.init(pieRef.value)
  pieChart.setOption({
    animationDuration: 1200,
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', right: 0, top: 'center' },
    series: [{
      name: '适航法规占比',
      type: 'pie',
      radius: '70%',
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
      label: { show: false },
      emphasis: { label: { show: true, fontSize: 18, fontWeight: 'bold' } },
      labelLine: { show: false },
      data: props.pieData.map(item => ({ value: parseFloat(item.global_coverage), name: item.regulation }))
    }]
  })
}
function renderRadar() {
  if (!props.radarData || props.radarData.length === 0) return
  radarChart = echarts.init(radarRef.value)
  radarChart.setOption({
    animationDuration: 1200,
    tooltip: {},
    legend: { top: 0 },
    radar: {
      indicator: props.radarData.map(item => ({ name: item.airport, max: 100 })),
      shape: 'circle',
      splitNumber: 4,
      axisName: { color: '#888fa6' },
      splitLine: { lineStyle: { color: '#e0e7ef' } },
      splitArea: { areaStyle: { color: ['#f8fafc', '#e0e7ef'] } },
      axisLine: { lineStyle: { color: '#b0b3c6' } }
    },
    series: [{
      name: '软件利用率',
      type: 'radar',
      data: [{
        value: props.radarData.map(item => parseFloat(item.software_utilization)),
        name: '利用率',
        areaStyle: { color: 'rgba(99,102,241,0.2)' },
        lineStyle: { color: '#6366f1' }
      }]
    }]
  })
}
onMounted(async () => {
  renderPie()
  await nextTick()
  renderRadar()
})
watch(() => props.pieData, renderPie)
watch(() => props.radarData, renderRadar)
</script>

<style lang="scss" scoped>
.pie-radar-chart {
  display: flex;
  height: 260px!important;
  gap: 8px;
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 12px 8px 18px;
  height: 100%;
  min-height: unset;
  .pie, .radar {
    width: 180px;
    height: 220px;
    flex: 1;
  }
}
</style> 
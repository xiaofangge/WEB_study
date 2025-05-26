<template>
  <div class="bar-line-chart">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({ chartData: Array })
const chartRef = ref(null)
let chart = null
function renderChart() {
  if (!props.chartData || props.chartData.length === 0) return
  const months = Object.keys(props.chartData[0].monthly_stats)
  const series = props.chartData.map(item => ({
    name: item.airline,
    type: 'line',
    data: Object.values(item.monthly_stats),
    smooth: true
  }))
  const barSeries = props.chartData.map(item => ({
    name: item.airline + '（柱状）',
    type: 'bar',
    data: Object.values(item.monthly_stats),
    emphasis: { focus: 'series' },
    barGap: 0
  }))
  chart = echarts.init(chartRef.value)
  chart.setOption({
    animationDuration: 1200,
    tooltip: { trigger: 'axis' },
    legend: { top: 10 },
    xAxis: { type: 'category', data: months },
    yAxis: { type: 'value' },
    series: [...series, ...barSeries]
  })
}
onMounted(renderChart)
watch(() => props.chartData, renderChart)
</script>

<style lang="scss" scoped>
.bar-line-chart {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 12px 8px 18px;
  min-height: 260px;
  display: flex;
  align-items: center;
  .chart {
    width: 100%;
    height: 180px;
  }
}
</style> 
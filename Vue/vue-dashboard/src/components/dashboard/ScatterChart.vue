<template>
  <div class="scatter-chart">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const chartRef = ref(null)
onMounted(async () => {
  const res = await fetch('/data/airport_metrics.json')
  const json = await res.json()
  const data = json.airport_metrics.slice(0, 10)
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    animationDuration: 1200,
    tooltip: { trigger: 'item' },
    xAxis: { name: '最大载重', type: 'value' },
    yAxis: { name: '告警频率', type: 'value' },
    series: [{
      symbolSize: 18,
      data: data.map(item => [item.max_payload, item.alert_frequency, item.airport]),
      type: 'scatter',
      emphasis: { focus: 'series' },
      itemStyle: { color: '#6366f1', shadowBlur: 10, shadowColor: '#a5b4fc' },
      label: { show: true, formatter: p => p.data[2], position: 'top', color: '#888fa6' }
    }]
  })
})
</script>

<style lang="scss" scoped>
.scatter-chart {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 12px 8px 18px;
  min-height: 320px;
  .chart {
    width: 100%;
    height: 220px;
  }
}
</style> 
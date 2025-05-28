<template>
  <div class="airline-line-chart">
    <div ref="lineChart" class="line-chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'AirlineLineChart',
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartInstance: null
    }
  },
  mounted() {
    this.chartInstance = echarts.init(this.$refs.lineChart)
    this.setOption()
  },
  methods: {
    setOption() {
      if (!this.chartData || this.chartData.length === 0) return
      const months = Object.keys(this.chartData[0].monthly_stats)
      const series = this.chartData.map((item, idx) => ({
        name: item.airline,
        type: 'line',
        data: Object.values(item.monthly_stats),
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        emphasis: { focus: 'series' }
      }))
      this.chartInstance.setOption({
        animationDuration: 1200,
        tooltip: { trigger: 'axis' },
        legend: { top: 10 },
        grid: { left: 32, right: 18, top: 40, bottom: 24, containLabel: true },
        xAxis: { type: 'category', data: months, axisLabel: { color: '#888fa6' } },
        yAxis: { type: 'value', axisLabel: { color: '#888fa6' } },
        series
      })
      this.chartInstance.resize()
    }
  },
  watch: {
    chartData() { this.setOption() }
  }
}
</script>

<style lang="scss" scoped>
.airline-line-chart {
  background-image: linear-gradient(to right, #e0eafc, #cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 12px 8px 18px;
  flex: 1 1 340px;
  min-width: 287%;
  max-width: 800px;
  display: flex;
  align-items: center;
  .line-chart {
    width: 100%;
    height: 100%;
    min-height: 100%;
  }
}
@media (max-width: 1200px) {
  .airline-line-chart {
    min-width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 900px) {
  .airline-line-chart {
    min-width: 0;
    width: 100%;
    max-width: 100%;
    padding: 12px 6px 6px 12px;
  }
}
</style> 
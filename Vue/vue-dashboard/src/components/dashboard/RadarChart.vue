<template>
  <div class="radar-chart-box">
    <div ref="radarChart" class="radar-chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'RadarChart',
  props: {
    radarData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      radarInstance: null
    }
  },
  mounted() {
    this.radarInstance = echarts.init(this.$refs.radarChart)
    this.setRadarOption()
  },
  methods: {
    setRadarOption() {
      this.radarInstance.setOption({
        tooltip: {},
        radar: {
          indicator: this.radarData.map(item => ({ name: item.name, max: 100 })),
          radius: 60,
          splitLine: { lineStyle: { color: '#e0eafc' } },
          axisLine: { lineStyle: { color: '#b0b3c6' } }
        },
        series: [{
          name: '指标',
          type: 'radar',
          data: [{ value: this.radarData.map(item => item.value), name: '指标' }],
          areaStyle: { color: 'rgba(99,102,241,0.2)' },
          lineStyle: { color: '#6366f1' },
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: { color: '#6366f1' }
        }]
      })
    }
  },
  watch: {
    radarData() { this.setRadarOption() }
  }
}
</script>

<style lang="scss" scoped>
.radar-chart-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.radar-chart {
  width: 180px;
  height: 220px;
}
</style> 
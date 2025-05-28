<template>
  <div class="pie-chart-box">
    <div ref="pieChart" class="pie-chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'PieChart',
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      pieInstance: null
    }
  },
  mounted() {
    this.pieInstance = echarts.init(this.$refs.pieChart)
    this.setPieOption()
  },
  methods: {
    setPieOption() {
      this.pieInstance.setOption({
        tooltip: { trigger: 'item' },
        legend: { top: '5%', left: 'center', textStyle: { color: '#888fa6' } },
        series: [{
          name: '分布',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
          label: { show: false, position: 'center' },
          emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
          labelLine: { show: false },
          data: this.pieData
        }]
      })
    }
  },
  watch: {
    pieData() { this.setPieOption() }
  }
}
</script>

<style lang="scss" scoped>
.pie-chart-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pie-chart {
  width: 180px;
  height: 220px;
}
</style> 
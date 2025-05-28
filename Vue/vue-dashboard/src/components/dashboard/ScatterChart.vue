<template>
  <div class="scatter-chart">
    <div ref="scatterChart" class="scatter-chart-inner"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ScatterChart',
  data() {
    return {
      chartInstance: null
    }
  },
  mounted() {
    this.chartInstance = echarts.init(this.$refs.scatterChart)
    this.setOption()
  },
  methods: {
    setOption() {
      this.chartInstance.setOption({
        // 这里配置散点图 option
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scatter-chart {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 12px 8px 18px;
  min-height: 320px;
  .scatter-chart-inner {
    width: 100%;
    height: 220px;
  }
}
</style> 
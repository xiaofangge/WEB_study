<template>
  <div class="bar-line-chart">
    <div ref="barLineChart" class="bar-line-chart-inner"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarLineChart',
  props: {
    // 根据实际 props 定义
  },
  data() {
    return {
      chartInstance: null
    }
  },
  mounted() {
    this.chartInstance = echarts.init(this.$refs.barLineChart)
    this.setOption()
  },
  methods: {
    setOption() {
      this.chartInstance.setOption({
        // 这里配置柱线混合图 option
      })
    }
  }
}
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
  .bar-line-chart-inner {
    width: 100%;
    height: 180px;
  }
}
</style> 
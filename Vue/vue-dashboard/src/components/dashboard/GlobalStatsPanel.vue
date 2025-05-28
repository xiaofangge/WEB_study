<!-- GlobalDeploymentCharts.vue -->
<template>
    <div class="chart-container">
      <!-- 热力图容器 -->
      <div ref="mapChart" class="chart-item map-chart"></div>
      
      <!-- 双图表容器 -->
      <div class="sub-chart-group">
        <div ref="barChart" class="chart-item bar-chart"></div>
        <div ref="lineChart" class="chart-item line-chart"></div>
      </div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts'
  export default {
    name: 'GlobalStatsPanel',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        years: [2019, 2020, 2021, 2022, 2023],
        yearIndex: 4,
        mapInstance: null,
        barInstance: null,
        regionCoords: {
          '亚太地区': [120, 30],
          '北美地区': [-100, 40],
          '欧洲地区': [10, 50],
          '拉丁美洲': [-60, -15],
          '中东地区': [45, 25],
          '非洲地区': [20, 0],
          '独联体国家': [60, 55],
          '大洋洲地区': [140, -25],
          '北欧地区': [20, 65],
          '东南亚地区': [105, 10]
        }
      }
    },
    computed: {
      currentYear() {
        return this.years[this.yearIndex]
      },
      yearMarks() {
        const marks = {}
        this.years.forEach((y, idx) => { marks[idx] = y + '' })
        return marks
      },
      globalData() {
        // 兼容 props.data 传递
        return this.data && this.data.length ? this.data : []
      }
    },
    mounted() {
      this.mapInstance = echarts.init(this.$refs.mapChart)
      this.barInstance = echarts.init(this.$refs.barChart)
      this.setMapOption()
      this.setBarOption()
    },
    methods: {
      setMapOption() {
        this.mapInstance.setOption({
          geo: {
            map: 'world',
            roam: true,
            itemStyle: { areaColor: '#0b1c2c', borderColor: '#3cc7e8' },
            emphasis: { areaColor: '#2a333d' }
          },
          series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.globalData.map(item => ({
              name: item.region,
              value: [...(this.regionCoords[item.region] || [0,0]), item.airports_covered],
              user_growth: item.user_growth,
              compliance_trend: item.compliance_trend
            })),
            symbolSize: val => 10 + val[2] / 20,
            showEffectOn: 'render',
            rippleEffect: { brushType: 'stroke' },
            label: { formatter: '{b}', position: 'right', show: true },
            itemStyle: { color: '#6cf16c', shadowBlur: 10, shadowColor: '#333' }
          }]
        })
      },
      setBarOption() {
        this.barInstance.setOption({
          grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
          xAxis: { type: 'value', axisLabel: { color: '#fff' }, splitLine: { show: false } },
          yAxis: [{
            type: 'category',
            data: this.globalData.map(item => item.region),
            inverse: true,
            axisLabel: { color: '#fff', fontSize: 12 }
          }],
          series: [{
            type: 'bar',
            data: this.globalData.map(item => item.airports_covered),
            itemStyle: { color: '#6cf16c' },
            barWidth: 12
          }]
        })
      },
      onYearChange() {
        // 可扩展为按年份切换数据
        this.setMapOption()
        this.setBarOption()
      }
    },
    watch: {
      yearIndex() {
        this.onYearChange()
      },
      data: {
        handler() {
          this.setMapOption()
          this.setBarOption()
        },
        deep: true
      }
    }
  }
  </script>
  
  <style lang="scss">
  .chart-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 20px;
    background: #f8f9fa;
  
    .map-chart {
      width: 100%;
      height: 500px;
    }
  
    .sub-chart-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 1rem;
  
      .bar-chart, .line-chart {
        height: 350px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
    }
  }
  
  @media (max-width: 768px) {
    .sub-chart-group {
      grid-template-columns: 1fr !important;
    }
  }
  </style>
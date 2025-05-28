<template>
  <div class="dashboard-home dashboard-bg">
    <div class="dashboard-grid">
      <!-- 左侧栏：用户卡片、生日 -->
      <div class="dashboard-left">
        <UserCard :user="mainUser" />
        <BirthdayList :users="birthdayUsers" />
        <ScatterChart />
      </div>
      <!-- 中间栏：数据卡片、统计图表+时间线 -->
      <div class="dashboard-center">
        <div class="card-row"><DataCards :stats="stats" /></div>
        <div class="chart-row">
          <AirlineLineChart :chart-data="chartData" />
          <PieChart :pie-data="pieData" />
          <RadarChart :radar-data="radarData" />
          <TimelinePanel :logs="logs" />
          <GlobalStatsPanel :data="globalData" />
        </div>
      </div>
      <!-- 右侧栏：日历、事件 -->
      <div class="dashboard-right">
        <CustomCalendar v-model="calendarDate" />
        <EventList :date="calendarDate" :events="events" />
      </div>
    </div>
  </div>
</template>

<script>
import DataCards from './dashboard/DataCards.vue'
import BarLineChart from './dashboard/BarLineChart.vue'
import TimelinePanel from './dashboard/TimelinePanel.vue'
import CustomCalendar from './dashboard/CustomCalendar.vue'
import UserCard from './dashboard/UserCard.vue'
import BirthdayList from './dashboard/BirthdayList.vue'
import EventList from './dashboard/EventList.vue'
import AirlineLineChart from './dashboard/AirlineLineChart.vue'
import ScatterChart from './dashboard/ScatterChart.vue'
import GlobalStatsPanel from './dashboard/GlobalStatsPanel.vue'
import RadarChart from './dashboard/RadarChart.vue'
import PieChart from './dashboard/PieChart.vue'

export default {
  name: 'DashboardHome',
  components: {
    DataCards,
    BarLineChart,
    PieChart,
    TimelinePanel,
    RadarChart,
    CustomCalendar,
    UserCard,
    BirthdayList,
    EventList,
    AirlineLineChart,
    ScatterChart,
    GlobalStatsPanel
  },
  data() {
    return {
      mainUser: null,
      birthdayUsers: [],
      stats: {},
      chartData: [],
      pieData: [],
      radarData: [],
      logs: [],
      events: [],
      calendarDate: new Date(),
      globalData: []
    }
  },
  mounted() {
    // 用户与生日
    fetch('/data/user_activity.json')
      .then(res => res.json())
      .then(userJson => {
        this.mainUser = userJson.user_activity[0]
        this.birthdayUsers = userJson.user_activity.slice(1, 4)
        // 统计卡片
        fetch('/data/airline_operations.json')
          .then(res => res.json())
          .then(planeJson => {
            this.stats = {
              totalUsers: userJson.user_activity.reduce((sum, d) => sum + d.total_users, 0),
              onlineRatio: Number((userJson.user_activity.reduce((sum, d) => sum + parseFloat(d.online_ratio), 0) / userJson.user_activity.length).toFixed(1)),
              totalPlanes: planeJson.airline_operations.reduce((sum, d) => sum + d.total_aircraft, 0),
              cargoRatio: Number((planeJson.airline_operations.reduce((sum, d) => sum + parseFloat(d.cargo_ratio), 0) / planeJson.airline_operations.length).toFixed(1))
            }
            this.chartData = planeJson.airline_operations.slice(0, 5)
          })
        // 饼图
        fetch('/data/regulation_distribution.json')
          .then(res => res.json())
          .then(pieJson => {
            this.pieData = pieJson.regulation_distribution.slice(0, 6)
          })
        // 雷达图
        fetch('/data/airport_metrics.json')
          .then(res => res.json())
          .then(radarJson => {
            this.radarData = radarJson.airport_metrics.slice(0, 6)
          })
        // 时间线
        fetch('/data/log_analysis.json')
          .then(res => res.json())
          .then(logJson => {
            this.logs = logJson.log_analysis
          })
        // 事件
        fetch('/data/scheduled_tasks.json')
          .then(res => res.json())
          .then(taskJson => {
            this.events = taskJson.scheduled_tasks
          })
        // 全球部署
        fetch('/data/global_deployment.json')
          .then(res => res.json())
          .then(globalJson => {
            this.globalData = globalJson.global_deployment
          })
      })
  }
}
</script>

<style lang="scss" scoped>
.dashboard-bg {
  background: #fff;
  min-height: 100vh;
}
.dashboard-home {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: 260px 1fr 320px;
  gap: 8px;
}
.dashboard-left, .dashboard-center, .dashboard-right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.card-row {
  display: flex;
  gap: 8px;
}
.chart-row {
  display: flex;
  gap: 8px;
  align-items: stretch;
  & > *:first-child {
    flex: 1 1 340px;
    width: 440px;
    min-width: 340px;
    max-width: 800px;
  }
  & > *:last-child {
    flex: 2 1 0;
    min-width: 0;
    /* 让时间线高度与图表一致，宽度填满剩余空间 */
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: 220px 1fr 260px;
    gap: 8px;
  }
}
@media (max-width: 900px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .dashboard-left, .dashboard-right {
    flex-direction: row;
    gap: 8px;
  }
  .dashboard-right {
    margin-top: 16px;
  }
}
</style> 
<template>
  <div class="dashboard-home dashboard-bg">
    <div class="dashboard-grid">
      <!-- 左侧栏：用户卡片、生日 -->
      <div class="dashboard-left">
        <UserCard :user="mainUser" />
        <BirthdayList :users="birthdayUsers" />
        <AirlineLineChart :chart-data="chartData" />
        <ScatterChart />
      </div>
      <!-- 中间栏：数据卡片、统计图表+时间线 -->
      <div class="dashboard-center">
        <div class="card-row"><DataCards :stats="stats" /></div>
        <div class="chart-row">
          <PieRadarChart :pie-data="pieData" :radar-data="radarData" />
          <TimelinePanel :logs="logs" />
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
import { ref, onMounted } from 'vue'
import DataCards from './dashboard/DataCards.vue'
import BarLineChart from './dashboard/BarLineChart.vue'
import PieRadarChart from './dashboard/PieRadarChart.vue'
import TimelinePanel from './dashboard/TimelinePanel.vue'
import CustomCalendar from './dashboard/CustomCalendar.vue'
import UserCard from './dashboard/UserCard.vue'
import BirthdayList from './dashboard/BirthdayList.vue'
import EventList from './dashboard/EventList.vue'
import AirlineLineChart from './dashboard/AirlineLineChart.vue'
import ScatterChart from './dashboard/ScatterChart.vue'

export default {
  name: 'DashboardHome',
  components: {
    DataCards,
    BarLineChart,
    PieRadarChart,
    TimelinePanel,
    CustomCalendar,
    UserCard,
    BirthdayList,
    EventList,
    AirlineLineChart,
    ScatterChart
  },
  setup() {
    const mainUser = ref(null)
    const birthdayUsers = ref([])
    const stats = ref({})
    const chartData = ref([])
    const pieData = ref([])
    const radarData = ref([])
    const logs = ref([])
    const events = ref([])
    const calendarDate = ref(new Date())

    onMounted(async () => {
      // 用户与生日
      const userRes = await fetch('/data/user_activity.json')
      const userJson = await userRes.json()
      mainUser.value = userJson.user_activity[0]
      birthdayUsers.value = userJson.user_activity.slice(1, 4)
      // 统计卡片
      const planeRes = await fetch('/data/airline_operations.json')
      const planeJson = await planeRes.json()
      stats.value = {
        totalUsers: userJson.user_activity.reduce((sum, d) => sum + d.total_users, 0),
        onlineRatio: Number((userJson.user_activity.reduce((sum, d) => sum + parseFloat(d.online_ratio), 0) / userJson.user_activity.length).toFixed(1)),
        totalPlanes: planeJson.airline_operations.reduce((sum, d) => sum + d.total_aircraft, 0),
        cargoRatio: Number((planeJson.airline_operations.reduce((sum, d) => sum + parseFloat(d.cargo_ratio), 0) / planeJson.airline_operations.length).toFixed(1))
      }
      // 图表
      chartData.value = planeJson.airline_operations.slice(0, 5)
      const pieRes = await fetch('/data/regulation_distribution.json')
      const pieJson = await pieRes.json()
      pieData.value = pieJson.regulation_distribution.slice(0, 6)
      const radarRes = await fetch('/data/airport_metrics.json')
      const radarJson = await radarRes.json()
      radarData.value = radarJson.airport_metrics.slice(0, 6)
      // 时间线
      const logRes = await fetch('/data/log_analysis.json')
      const logJson = await logRes.json()
      logs.value = logJson.log_analysis
      // 事件
      const taskRes = await fetch('/data/scheduled_tasks.json')
      const taskJson = await taskRes.json()
      events.value = taskJson.scheduled_tasks;
    })

    return { mainUser, birthdayUsers, stats, chartData, pieData, radarData, logs, events, calendarDate }
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
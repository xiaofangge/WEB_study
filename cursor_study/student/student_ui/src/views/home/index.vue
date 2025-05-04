<template>
  <div class="app-container">
    <AppHeader />
    <div class="app-main-container">
      <AppSidebar />
      <div class="app-content">
        <div class="content-header">
          <h2>欢迎使用学生管理系统</h2>
        </div>
        <transition name="page-transition" mode="out-in">
          <router-view></router-view>
        </transition>
        <div class="main-content">
          <div class="dashboard-content">
            <div class="dashboard-card card-blue">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="card-info">
                <div class="card-number">1,254</div>
                <div class="card-title">学生总数</div>
              </div>
            </div>
            <div class="dashboard-card card-green">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div class="card-info">
                <div class="card-number">156</div>
                <div class="card-title">课程数量</div>
              </div>
            </div>
            <div class="dashboard-card card-orange">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3.6 3.6l2.9 15.5c.1.7.5 1.1 1.1 1.2h8.8c.6 0 1-.4 1.1-1.1l2.9-15.6"></path>
                  <circle cx="7.8" cy="8.1" r="1"></circle>
                  <circle cx="16.2" cy="8.1" r="1"></circle>
                  <path d="M12 11v5"></path>
                  <path d="M9 14h6"></path>
                </svg>
              </div>
              <div class="card-info">
                <div class="card-number">98.5%</div>
                <div class="card-title">平均出勤率</div>
              </div>
            </div>
            <div class="dashboard-card card-red">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div class="card-info">
                <div class="card-number">85.2</div>
                <div class="card-title">平均成绩</div>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <div class="chart">
              <h3>近六个月学生注册趋势</h3>
              <div class="chart-placeholder">
                <!-- 这里可以集成图表库，如 ECharts -->
                <div class="chart-bars">
                  <div class="chart-bar" style="height: 60%;">
                    <div class="bar-value">185</div>
                  </div>
                  <div class="chart-bar" style="height: 80%;">
                    <div class="bar-value">245</div>
                  </div>
                  <div class="chart-bar" style="height: 70%;">
                    <div class="bar-value">210</div>
                  </div>
                  <div class="chart-bar" style="height: 90%;">
                    <div class="bar-value">280</div>
                  </div>
                  <div class="chart-bar" style="height: 75%;">
                    <div class="bar-value">230</div>
                  </div>
                  <div class="chart-bar" style="height: 95%;">
                    <div class="bar-value">304</div>
                  </div>
                </div>
                <div class="chart-labels">
                  <div class="chart-label">1月</div>
                  <div class="chart-label">2月</div>
                  <div class="chart-label">3月</div>
                  <div class="chart-label">4月</div>
                  <div class="chart-label">5月</div>
                  <div class="chart-label">6月</div>
                </div>
              </div>
            </div>
            <div class="chart">
              <h3>各学科成绩分布</h3>
              <div class="chart-placeholder">
                <!-- 饼图占位 -->
                <div class="pie-chart">
                  <div class="pie-segment" style="--segment-start: 0deg; --segment-end: 108deg; --segment-color: #67C23A;">
                    <div class="pie-label">数学 30%</div>
                  </div>
                  <div class="pie-segment" style="--segment-start: 108deg; --segment-end: 180deg; --segment-color: #409EFF;">
                    <div class="pie-label">英语 20%</div>
                  </div>
                  <div class="pie-segment" style="--segment-start: 180deg; --segment-end: 252deg; --segment-color: #E6A23C;">
                    <div class="pie-label">物理 20%</div>
                  </div>
                  <div class="pie-segment" style="--segment-start: 252deg; --segment-end: 324deg; --segment-color: #F56C6C;">
                    <div class="pie-label">化学 20%</div>
                  </div>
                  <div class="pie-segment" style="--segment-start: 324deg; --segment-end: 360deg; --segment-color: #909399;">
                    <div class="pie-label">其他 10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-container">
            <div class="recent-activity">
              <h3>最近活动</h3>
              <div class="activity-list">
                <div class="activity-item">
                  <div class="activity-time">今天 10:30</div>
                  <div class="activity-content">
                    <div class="activity-title">新增学生 <span class="highlight">张三</span></div>
                    <div class="activity-desc">年级：高一，班级：1班</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-time">昨天 15:45</div>
                  <div class="activity-content">
                    <div class="activity-title">更新了 <span class="highlight">期中考试</span> 成绩单</div>
                    <div class="activity-desc">已完成全部录入，共计1254名学生</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-time">2023-06-10 09:15</div>
                  <div class="activity-content">
                    <div class="activity-title">系统进行了 <span class="highlight">数据备份</span></div>
                    <div class="activity-desc">备份完成，文件大小：125MB</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-time">2023-06-08 14:20</div>
                  <div class="activity-content">
                    <div class="activity-title">添加新课程 <span class="highlight">高级数学</span></div>
                    <div class="activity-desc">授课教师：李四，时间：每周一、三、五</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()

onMounted(() => {
  // 设置默认主题色（如果有）
  const storedColor = localStorage.getItem('primaryColor')
  if (storedColor) {
    themeStore.setPrimaryColor(storedColor)
  }
})
</script>

<style scoped>
/* 全局布局 */
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-main-container {
  flex: 1;
  display: flex;
  width: 100%;
  overflow: hidden;
}

.app-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
}

.content-header {
  margin-bottom: 20px;
}

.content-header h2 {
  color: var(--text-color-primary);
  font-size: 24px;
  margin: 0;
}

.main-content {
  flex: 1;
  width: 100%;
}

/* 仪表盘卡片 */
.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.dashboard-card {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}

.card-blue {
  border-top: 3px solid #409EFF;
}

.card-green {
  border-top: 3px solid #67C23A;
}

.card-orange {
  border-top: 3px solid #E6A23C;
}

.card-red {
  border-top: 3px solid #F56C6C;
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 16px;
}

.card-blue .card-icon {
  background-color: rgba(64, 158, 255, 0.1);
  color: #409EFF;
}

.card-green .card-icon {
  background-color: rgba(103, 194, 58, 0.1);
  color: #67C23A;
}

.card-orange .card-icon {
  background-color: rgba(230, 162, 60, 0.1);
  color: #E6A23C;
}

.card-red .card-icon {
  background-color: rgba(245, 108, 108, 0.1);
  color: #F56C6C;
}

.card-info {
  flex: 1;
}

.card-number {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-bottom: 4px;
}

.card-title {
  color: var(--text-color-secondary);
  font-size: 14px;
}

/* 图表容器 */
.chart-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.chart {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.chart h3 {
  color: var(--text-color-primary);
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
}

.chart-placeholder {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* 条形图样式 */
.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  padding: 0 10px;
}

.chart-bar {
  width: 40px;
  background-color: rgba(64, 158, 255, 0.7);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: height 0.5s ease;
}

.bar-value {
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  color: var(--text-color-secondary);
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.chart-label {
  font-size: 12px;
  color: var(--text-color-secondary);
  width: 40px;
  text-align: center;
}

/* 饼图样式 */
.pie-chart {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
}

.pie-segment {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%);
  transform: rotate(var(--segment-start));
  background-color: var(--segment-color);
}

.pie-segment::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--segment-color);
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%);
  transform: rotate(calc(var(--segment-end) - var(--segment-start)));
}

.pie-label {
  position: absolute;
  white-space: nowrap;
  font-size: 12px;
  color: var(--text-color-primary);
  transform: rotate(calc((var(--segment-start) + var(--segment-end)) / 2 - var(--segment-start)));
  transform-origin: 50% 50%;
  left: 110%;
  top: 50%;
}

/* 最近活动 */
.recent-container {
  margin-bottom: 20px;
}

.recent-activity {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.recent-activity h3 {
  color: var(--text-color-primary);
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
}

.activity-list {
  display: flex;
  flex-direction: column;
}

.activity-item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color-lighter);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-time {
  width: 100px;
  color: var(--text-color-secondary);
  font-size: 12px;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-title {
  color: var(--text-color-primary);
  margin-bottom: 4px;
  font-weight: 500;
}

.activity-desc {
  color: var(--text-color-secondary);
  font-size: 12px;
}

.highlight {
  color: var(--primary-color);
  font-weight: 600;
}
</style> 
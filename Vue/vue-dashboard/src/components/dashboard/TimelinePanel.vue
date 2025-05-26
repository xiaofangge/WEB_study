<template>
  <div class="timeline-panel">
    <el-timeline class="horizontal-timeline">
      <el-timeline-item
        v-for="(item, index) in logs"
        :key="item.log_type"
        placement="top"
        :color="item.color"
      >
        <div class="log-content">
          <div class="log-title-vertical">
            <span class="log-title" :style="{ color: colors[index % colors.length] }">{{ item.log_type }}</span>
          </div>
          <div class="log-desc">日均：{{ item.daily_avg }}，错误率：{{ item.error_correlation }}</div>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({ logs: Array })
const colors = ['#6366f1', '#f59e42', '#e57373', '#42b983', '#888fa6', '#f7b731', '#3a3a4a']
const logs = computed(() =>
  (props.logs || []).map((item, idx) => ({ ...item, color: colors[idx % colors.length] }))
)
</script>

<style lang="scss" scoped>
.timeline-panel {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 18px 8px 0;
  min-width: 180px;
  max-width: 100%;
  min-height: 220px;
  
  ::v-deep .el-timeline-item__content {
    margin-top: 0;
    transform: none;
    text-align: center;
    padding-top: 0;
    transform: translateX(-69px);
  }
  .log-title {
    font-weight: bold;
    writing-mode: vertical-rl;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 2px;
    font-size: 1rem;
    display: inline-block;
  }
  .log-title-vertical {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 6px;
  }
  .log-desc {
    color: #888fa6;
    font-size: 0.8rem;
  }
}

// 横向时间轴样式
.horizontal-timeline {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ::v-deep .el-timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
    margin: 0 24px 0 0;
    padding-bottom: 0;
  }
  ::v-deep .el-timeline-item__tail {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 100%;
    height: 2px;
    background: #e4e7ed;
    z-index: 0;
    transform: translateX(-50%);
  }
  ::v-deep .el-timeline-item__node {
    margin: 0;
  }
}
</style> 
<template>
  <div class="data-cards">
    <div class="card">
      <div class="label">
        总用户数
        <el-icon class="card-icon"><UserFilled /></el-icon>
      </div>
      <div class="value">{{ props.stats.totalUsers }}</div>
    </div>
    <div class="card">
      <div class="label">
        在线率
        <el-icon class="card-icon"><Connection /></el-icon>
      </div>
      <div class="value">{{ props.stats.onlineRatio }}%</div>
    </div>
    <div class="card">
      <div class="label">
        飞机总数
        <el-icon class="card-icon"><Guide /></el-icon>
      </div>
      <div class="value">{{ props.stats.totalPlanes }}</div>
    </div>
    <div class="card">
      <div class="label">
        货机占比
        <el-icon class="card-icon"><Van /></el-icon>
      </div>
      <div class="value">{{ props.stats.cargoRatio }}%</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { UserFilled, Connection, Guide, Van } from '@element-plus/icons-vue'
const props = defineProps({ stats: Object })
</script>

<style lang="scss" scoped>
.data-cards {
  display: flex;
  gap: 8px;
  width: 100%;
}
.card {
  flex: 1;
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 28px 20px 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 120px;
  transition: box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  &:hover {
    box-shadow: 0 8px 40px 0 rgba(80, 120, 200, 0.18);
  }
}
.label {
  font-size: 1.1rem;
  color: #888fa6;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.card-icon {
  font-size: 1.3rem;
  margin-left: 4px;
  color: #6366f1;
  vertical-align: middle;
}
.value {
  font-size: 2.2rem;
  font-weight: bold;
  color: #3a3a4a;
  margin-bottom: 4px;
  letter-spacing: 1px;
  transition: color 0.3s;
}
</style> 
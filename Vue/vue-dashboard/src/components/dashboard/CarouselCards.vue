<template>
  <div class="carousel-cards">
    <el-carousel height="120px" indicator-position="outside" arrow="always" :interval="4000">
      <el-carousel-item v-for="item in features" :key="item.feature">
        <div class="carousel-card">
          <div class="feature-title">{{ item.feature }}</div>
          <div class="feature-desc">{{ item.enabled ? '已启用' : '未启用' }}，执行率：{{ item.execution_rate }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const features = ref([])
onMounted(async () => {
  const res = await fetch('/data/system_features.json')
  const json = await res.json()
  features.value = json.system_features.slice(0, 6)
})
</script>

<style lang="scss" scoped>
.carousel-cards {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 18px 8px 18px;
  .carousel-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100px;
    .feature-title {
      font-weight: bold;
      color: #6366f1;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }
    .feature-desc {
      color: #888fa6;
      font-size: 0.98rem;
    }
  }
}
</style> 
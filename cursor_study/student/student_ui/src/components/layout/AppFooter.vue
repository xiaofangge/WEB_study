<template>
  <footer class="app-footer">
    <div class="footer-content">
      <span class="copyright">Copyright © {{ currentYear }} 学生管理系统. All Rights Reserved.</span>
      <span class="version">Version: 1.0.0</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 获取当前年份
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  height: var(--footer-height);
  background-color: var(--background-color-white);
  border-top: 1px solid var(--border-color-light);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  color: var(--text-color-secondary);
}

.copyright, .version {
  display: inline-block;
}
</style> 
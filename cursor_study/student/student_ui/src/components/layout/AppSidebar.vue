<template>
  <div class="app-sidebar" :class="{ collapsed: isCollapse, light: menuTheme === 'light' }">
    <div class="logo-container">
      <div class="logo">
        <span class="logo-icon">S</span>
        <span class="logo-text" v-if="!isCollapse">学生管理系统</span>
      </div>
    </div>
    <div class="menu-container">
      <ul class="menu-list">
        <li 
          v-for="menu in menuList" 
          :key="menu.path"
          class="menu-item"
          :class="{ active: currentRoute === menu.path }"
          @click="handleMenuClick(menu)"
        >
          <div class="menu-icon" v-html="menu.icon"></div>
          <span class="menu-title" v-if="!isCollapse">{{ menu.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/store'

const router = useRouter()
const route = useRoute()
const themeStore = useThemeStore()

// 菜单列表
const menuList = ref([
  {
    path: '/home',
    title: '首页',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
  },
  {
    path: '/student',
    title: '学生管理',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
  },
  {
    path: '/course',
    title: '课程管理',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>'
  },
  {
    path: '/grade',
    title: '成绩管理',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'
  },
  {
    path: '/attendance',
    title: '考勤管理',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'
  },
  {
    path: '/statistics',
    title: '数据统计',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>'
  },
  {
    path: '/settings',
    title: '系统设置',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
  }
])

// 是否折叠菜单
const isCollapse = computed(() => themeStore.isCollapse)
// 菜单主题
const menuTheme = computed(() => themeStore.menuTheme)
// 当前路由
const currentRoute = computed(() => route.path)

// 处理菜单点击
const handleMenuClick = (menu: any) => {
  router.push(menu.path)
}

// 监听窗口大小变化，在小屏幕下自动折叠菜单
const handleResize = () => {
  if (window.innerWidth < 768 && !isCollapse.value) {
    themeStore.toggleCollapse()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  // 初始检查
  handleResize()
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.app-sidebar {
  width: var(--sidebar-width);
  height: 100%;
  background-color: var(--menu-background);
  transition: all var(--transition-time);
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.1);
  z-index: 999;
  flex-shrink: 0;
  min-width: var(--sidebar-width);
}

.app-sidebar.collapsed {
  width: var(--sidebar-collapsed-width);
  min-width: var(--sidebar-collapsed-width);
}

.app-sidebar.light {
  background-color: white;
  color: var(--text-color-primary);
}

.logo-container {
  height: var(--header-height);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.light .logo-container {
  border-bottom: 1px solid var(--border-color-light);
}

.logo {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
}

.logo-text {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
}

.light .logo-text {
  color: var(--text-color-primary);
}

.menu-container {
  padding: 16px 0;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.65);
  transition: all 0.3s;
  margin-bottom: 4px;
  position: relative;
}

.light .menu-item {
  color: var(--text-color-regular);
}

.menu-item:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.light .menu-item:hover {
  color: var(--primary-color);
  background-color: rgba(64, 158, 255, 0.1);
}

.menu-item.active {
  color: white;
  background-color: var(--primary-color);
}

.light .menu-item.active {
  color: var(--primary-color);
  background-color: rgba(64, 158, 255, 0.1);
}

.menu-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.collapsed .menu-icon {
  margin-right: 0;
  margin-left: 4px;
}

.menu-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 
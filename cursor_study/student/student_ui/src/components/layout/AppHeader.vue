<template>
  <header class="app-header">
    <div class="header-left">
      <div class="toggle-sidebar" @click="toggleSidebar">
        <span class="toggle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
      </div>
      <div class="breadcrumb">{{ currentRoute }}</div>
    </div>
    <div class="header-right">
      <div class="settings-btn" @click="showSettings = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>
      <div class="user-dropdown" @click="showUserDropdown = !showUserDropdown">
        <div class="avatar">
          <span>{{ userInfo.name ? userInfo.name.slice(0, 1) : 'U' }}</span>
        </div>
        <span class="username">{{ userInfo.name || '未登录' }}</span>
        <div class="dropdown-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="dropdown-menu" v-if="showUserDropdown">
          <div class="dropdown-item" @click="handleProfile">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>个人中心</span>
          </div>
          <div class="dropdown-item" @click="handleLogout">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 系统设置对话框 -->
    <div class="settings-dialog" v-if="showSettings">
      <div class="settings-content">
        <div class="settings-header">
          <h3>系统设置</h3>
          <span class="close-btn" @click="showSettings = false">×</span>
        </div>
        <div class="settings-body">
          <div class="settings-item">
            <span class="settings-label">主题色</span>
            <div class="color-options">
              <div 
                v-for="color in themeColors" 
                :key="color"
                class="color-option"
                :style="{ backgroundColor: color }"
                :class="{ active: color === primaryColor }"
                @click="changePrimaryColor(color)"
              ></div>
            </div>
          </div>
          <div class="settings-item">
            <span class="settings-label">菜单主题</span>
            <div class="theme-switch">
              <div 
                class="theme-option" 
                :class="{ active: menuTheme === 'dark' }"
                @click="changeMenuTheme('dark')"
              >
                暗色
              </div>
              <div 
                class="theme-option" 
                :class="{ active: menuTheme === 'light' }"
                @click="changeMenuTheme('light')"
              >
                亮色
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useThemeStore } from '@/store'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const themeStore = useThemeStore()

const showUserDropdown = ref(false)
const showSettings = ref(false)

// 计算当前路由名称
const currentRoute = computed(() => {
  return route.meta.title || '首页'
})

// 用户信息
const userInfo = computed(() => userStore.userInfo)

// 主题相关
const isCollapsed = computed(() => themeStore.isCollapse)
const primaryColor = computed(() => themeStore.primaryColor)
const menuTheme = computed(() => themeStore.menuTheme)

// 可选的主题色
const themeColors = [
  '#409EFF', // 蓝色
  '#67C23A', // 绿色
  '#E6A23C', // 黄色
  '#F56C6C', // 红色
  '#909399', // 灰色
  '#9370DB', // 紫色
  '#00CED1'  // 青色
]

// 切换侧边栏
const toggleSidebar = () => {
  themeStore.toggleCollapse()
}

// 改变主题色
const changePrimaryColor = (color: string) => {
  themeStore.setPrimaryColor(color)
}

// 改变菜单主题
const changeMenuTheme = (theme: string) => {
  themeStore.setMenuTheme(theme)
}

// 打开个人中心
const handleProfile = () => {
  showUserDropdown.value = false
  // 这里可以打开个人中心页面或弹窗
  alert('个人中心功能开发中...')
}

// 退出登录
const handleLogout = () => {
  showUserDropdown.value = false
  userStore.logout()
  router.push('/login')
}

// 点击页面其他地方关闭下拉菜单
const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.user-dropdown') && showUserDropdown.value) {
    showUserDropdown.value = false
  }
  if (!target.closest('.settings-content') && !target.closest('.settings-btn') && showSettings.value) {
    showSettings.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

watchEffect(() => {
  // 设置主题色
  document.documentElement.style.setProperty('--primary-color', primaryColor.value)
})
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: var(--header-background);
  height: var(--header-height);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  z-index: 1000;
}

.header-left {
  display: flex;
  align-items: center;
}

.toggle-sidebar {
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 16px;
}

.toggle-icon {
  color: var(--text-color-primary);
  transition: color 0.3s;
}

.toggle-icon:hover {
  color: var(--primary-color);
}

.breadcrumb {
  font-size: 16px;
  color: var(--text-color-primary);
  font-weight: 500;
}

.header-right {
  display: flex;
  align-items: center;
}

.settings-btn {
  padding: 0 16px;
  cursor: pointer;
  color: var(--text-color-regular);
  display: flex;
  align-items: center;
  height: 100%;
  transition: color 0.3s;
}

.settings-btn:hover {
  color: var(--primary-color);
}

.user-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-left: 8px;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.user-dropdown:hover {
  background-color: var(--background-color-base);
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 8px;
}

.username {
  font-size: 14px;
  margin-right: 4px;
  color: var(--text-color-regular);
}

.dropdown-icon {
  margin-left: 4px;
  color: var(--text-color-secondary);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  width: 140px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  margin-top: 8px;
  z-index: 1001;
  animation: dropDown 0.3s;
}

@keyframes dropDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--text-color-regular);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: var(--background-color-base);
  color: var(--primary-color);
}

.dropdown-item svg {
  margin-right: 8px;
}

/* 系统设置对话框 */
.settings-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.settings-content {
  width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  animation: scaleIn 0.3s;
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color-light);
}

.settings-header h3 {
  margin: 0;
  font-size: 18px;
  color: var(--text-color-primary);
}

.close-btn {
  font-size: 24px;
  line-height: 1;
  color: var(--text-color-secondary);
  cursor: pointer;
  transition: color 0.3s;
}

.close-btn:hover {
  color: var(--text-color-primary);
}

.settings-body {
  padding: 20px;
}

.settings-item {
  margin-bottom: 20px;
}

.settings-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--text-color-primary);
}

.color-options {
  display: flex;
  gap: 10px;
}

.color-option {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
  border: 2px solid transparent;
}

.color-option:hover {
  transform: scale(1.1);
}

.color-option.active {
  border-color: #555;
  transform: scale(1.1);
}

.theme-switch {
  display: flex;
  gap: 10px;
}

.theme-option {
  flex: 1;
  padding: 8px 0;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: var(--background-color-base);
  color: var(--text-color-regular);
}

.theme-option:hover {
  color: var(--primary-color);
}

.theme-option.active {
  background-color: var(--primary-color);
  color: white;
}
</style> 
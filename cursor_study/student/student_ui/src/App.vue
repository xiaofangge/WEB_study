<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from './store'

const route = useRoute()
const themeStore = useThemeStore()

// 监听路由变化，设置页面标题
watch(() => route.meta.title, (title) => {
  if (title) {
    document.title = title as string
  }
})

onMounted(() => {
  // 初始化主题色
  if (themeStore.primaryColor) {
    document.documentElement.style.setProperty('--primary-color', themeStore.primaryColor)
  }
})
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
}
</style>

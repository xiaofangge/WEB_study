import { defineStore } from 'pinia'

// 用户状态存储
export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
    isLoggedIn: !!localStorage.getItem('token')
  }),
  actions: {
    // 登录
    login(token: string, userInfo: any) {
      this.token = token
      this.userInfo = userInfo
      this.isLoggedIn = true
      localStorage.setItem('token', token)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    // 退出登录
    logout() {
      this.token = ''
      this.userInfo = {}
      this.isLoggedIn = false
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    }
  }
})

// 主题设置存储
export const useThemeStore = defineStore('theme', {
  state: () => ({
    // 默认主题色
    primaryColor: localStorage.getItem('primaryColor') || '#409EFF',
    // 菜单栏主题 light/dark
    menuTheme: localStorage.getItem('menuTheme') || 'dark',
    // 是否折叠菜单
    isCollapse: localStorage.getItem('isCollapse') === 'true' ? true : false
  }),
  actions: {
    // 设置主题色
    setPrimaryColor(color: string) {
      this.primaryColor = color
      localStorage.setItem('primaryColor', color)
      // 设置CSS变量
      document.documentElement.style.setProperty('--primary-color', color)
    },
    // 设置菜单主题
    setMenuTheme(theme: string) {
      this.menuTheme = theme
      localStorage.setItem('menuTheme', theme)
    },
    // 切换菜单折叠状态
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      localStorage.setItem('isCollapse', String(this.isCollapse))
    }
  }
}) 
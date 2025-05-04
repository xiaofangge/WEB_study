import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: '/student',
        name: 'Student',
        component: () => import('../views/student/index.vue'),
        meta: {
          title: '学生管理',
          keepAlive: true,
          requireAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to: any, _from: any, next: any) => {
  // 设置标题
  document.title = to.meta.title as string || '学生管理系统'
  
  // 判断是否需要登录权限
  if (to.meta.requireAuth) {
    // 这里可以从localStorage或者pinia中获取登录状态
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router 
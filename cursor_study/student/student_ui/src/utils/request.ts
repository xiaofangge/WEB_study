import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import router from '@/router'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api', // api的base_url
  timeout: 15000 // 请求超时时间
})

// loading实例
let loadingInstance: any = null

// request拦截器
service.interceptors.request.use(
  config => {
    // 显示loading
    loadingInstance = ElLoading.service({
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    // 从localStorage获取token
    const token = localStorage.getItem('token')
    
    // 设置token到请求头
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    // 关闭loading
    loadingInstance && loadingInstance.close()
    
    const res = response.data
    
    // 如果返回的状态码不是200，说明接口请求失败
    if (res.code !== 200) {
      ElMessage({
        message: res.message || '系统错误',
        type: 'error',
        duration: 3 * 1000
      })

      // 401: 未登录或token过期
      if (res.code === 401) {
        // 清除token
        localStorage.removeItem('token')
        // 跳转到登录页面
        router.push('/login')
      }
      
      return Promise.reject(new Error(res.message || '系统错误'))
    } else {
      return res
    }
  },
  error => {
    // 关闭loading
    loadingInstance && loadingInstance.close()
    
    console.log('err:', error)
    ElMessage({
      message: error.message || '请求失败',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service 
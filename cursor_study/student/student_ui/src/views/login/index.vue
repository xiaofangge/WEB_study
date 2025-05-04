<template>
  <div class="login-container">
    <canvas ref="canvasRef" class="background-canvas"></canvas>
    <div class="login-box animated fadeIn">
      <div class="login-header">
        <h2>学生管理系统</h2>
        <p>Student Management System</p>
      </div>
      <div class="login-form">
        <div class="form-item">
          <input type="text" v-model="username" placeholder="用户名" />
        </div>
        <div class="form-item">
          <input type="password" v-model="password" placeholder="密码" />
        </div>
        <div class="form-item">
          <button class="login-btn" @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const canvasRef = ref<HTMLCanvasElement | null>(null)

// 粒子动画
let particleArray: any[] = []
let animationId: number | null = null

// 粒子类
class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = `rgba(${Math.floor(Math.random() * 255)}, 
                       ${Math.floor(Math.random() * 255)}, 
                       ${Math.floor(Math.random() * 255)}, 
                       ${Math.random() * 0.5 + 0.2})`
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.size > 0.2) this.size -= 0.02

    if (this.x < 0 || this.x > canvas.width) {
      this.speedX = -this.speedX
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.speedY = -this.speedY
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

// 初始化Canvas
const initCanvas = () => {
  if (canvasRef.value) {
    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particleArray.push(new Particle(canvas))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update(canvas)
        particleArray[i].draw(ctx)
        
        // 如果粒子太小，则创建新粒子
        if (particleArray[i].size <= 0.2) {
          particleArray.splice(i, 1)
          i--
          particleArray.push(new Particle(canvas))
        }
      }
      
      // 绘制粒子之间的连线
      connectParticles(ctx)
      
      animationId = requestAnimationFrame(animate)
    }

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x
          const dy = particleArray[i].y - particleArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 150, 255, ${1 - distance/100})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particleArray[i].x, particleArray[i].y)
            ctx.lineTo(particleArray[j].x, particleArray[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // 监听窗口大小变化
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particleArray = []
      createParticles()
    }

    createParticles()
    animate()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
    }
  }
}

// 处理登录
const handleLogin = () => {
  if (!username.value || !password.value) {
    alert('请输入用户名和密码')
    return
  }
  
  // 模拟登录请求
  // 实际项目中应该调用API
  setTimeout(() => {
    const token = 'mock-token-' + Date.now()
    const userInfo = {
      id: 1,
      username: username.value,
      name: '学生管理员',
      avatar: '',
      roles: ['admin']
    }
    
    userStore.login(token, userInfo)
    router.push('/home')
  }, 800)
}

onMounted(() => {
  const cleanup = initCanvas()
  if (cleanup) {
    onUnmounted(cleanup)
  }
})
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #001529 0%, #003366 100%);
  overflow: hidden;
}

.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.login-box {
  width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  color: var(--primary-color);
  font-size: 28px;
  margin-bottom: 8px;
}

.login-header p {
  color: var(--text-color-secondary);
  font-size: 14px;
}

.login-form {
  width: 100%;
}

.form-item {
  margin-bottom: 20px;
}

.form-item input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid var(--border-color-base);
  border-radius: 4px;
  transition: all 0.3s;
  outline: none;
}

.form-item input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.login-btn:hover {
  background-color: var(--primary-color-light);
}
</style> 
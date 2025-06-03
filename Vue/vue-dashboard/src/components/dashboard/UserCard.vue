<template>
  <swiper :modules="[Pagination]" :slides-per-view="1.2" :space-between="20" :loop="true" class="department-swiper">
    <swiper-slide v-for="(dept, index) in departments" :key="index" class="slide">
      <div class="user-card">
        <div class="avatar">
          <span v-if="!dept.avatar" class="avatar-text">{{ dept.department ? dept.department[0] : '?' }}</span>
          <img v-else :src="dept.avatar" alt="avatar" />
        </div>
        <div class="user-info">
          <div class="user-name">{{ dept.department || '未知部门' }}</div>
          <div class="user-role">在线率：{{ dept.online_ratio || '--' }}</div>
          <div class="user-socials">
            <i class="el-icon-message"></i>
            <i class="el-icon-phone"></i>
            <i class="el-icon-user"></i>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  departments: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.department-swiper {
  padding: 20px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    &:not(.swiper-slide-active) {
      transform: scale(0.9);
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
  .user-card {
    background-image:linear-gradient(to right, #e0eafc,#cfdef3);
    border-radius: 18px;
    box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
    padding: 32px 18px 18px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 180px;
    .avatar {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 12px;
      background: #e0e7ef;
      display: flex;
      align-items: center;
      justify-content: center;
      .avatar-text {
        font-size: 2.2rem;
        color: #6366f1;
        font-weight: bold;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .user-info {
      text-align: center;
      .user-name {
        font-size: 1.2rem;
        font-weight: bold;
        color: #23233a;
        margin-bottom: 4px;
      }
      .user-role {
        color: #888fa6;
        font-size: 1rem;
        margin-bottom: 8px;
      }
      .user-socials {
        display: flex;
        gap: 8px;
        justify-content: center;
        color: #b0b3c6;
        font-size: 1.2rem;
      }
    }
  }
}</style>
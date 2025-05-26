<template>
  <div class="birthday-list">
    <div class="title">Upcoming Birthdays</div>
    <div class="birthday-item" v-for="user in props.users" :key="user.department">
      <span v-if="!user.avatar" class="avatar avatar-text">{{ user.department ? user.department[0] : '?' }}</span>
      <img v-else :src="user.avatar" class="avatar" />
      <div class="info">
        <div class="name">{{ user.department }}</div>
        <div class="date">{{ randomBirthday(user) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ users: Array })
function randomBirthday() {
  // 随机生成生日标签
  const tags = ['Today', 'Tomorrow', 'Next Week', '14.07.2022']
  return tags[Math.floor(Math.random() * tags.length)]
}
</script>

<style lang="scss" scoped>
.birthday-list {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 18px 8px 18px;
  min-width: 180px;
  .title {
    font-weight: bold;
    color: #23233a;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .birthday-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    .avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      background: #e0e7ef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: #6366f1;
      font-weight: bold;
    }
    .info {
      .name {
        font-weight: 500;
        color: #23233a;
      }
      .date {
        color: #b0b3c6;
        font-size: 0.98rem;
      }
    }
  }
}
</style> 
<template>
  <div class="event-list">
    <div class="event-date">{{ dateStr }}</div>
    <div class="event-item" v-for="item in events" :key="item.task_name">
      <div class="event-icon"><i class="el-icon-date"></i></div>
      <div class="event-info">
        <div class="event-title">{{ item.task_name }}</div>
        <div class="event-desc">执行时间：{{ item.execution_time }}</div>
      </div>
      <div class="event-time">{{ item.avg_duration }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    date: {
      type: [String, Date],
      default: ''
    },
    events: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dateStr: ''
    }
  },
  mounted() {
    this.dateStr = this.date ? this.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''
  }
}
</script>

<style lang="scss" scoped>
.event-list {
  background-image:linear-gradient(to right, #e0eafc,#cfdef3);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(80, 120, 200, 0.10);
  padding: 18px 18px 8px 18px;
  min-width: 220px;
  .event-date {
    font-weight: bold;
    color: #23233a;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .event-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    .event-icon {
      font-size: 1.3rem;
      color: #6366f1;
      width: 28px;
      text-align: center;
    }
    .event-info {
      flex: 1;
      .event-title {
        font-weight: 500;
        color: #23233a;
      }
      .event-desc {
        color: #b0b3c6;
        font-size: 0.98rem;
      }
    }
    .event-time {
      color: #888fa6;
      font-size: 0.98rem;
      min-width: 60px;
      text-align: right;
    }
  }
}
</style> 
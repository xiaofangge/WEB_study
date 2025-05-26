<template>
  <DashboardHome />
</template>

<script>
import DashboardHome from './components/DashboardHome.vue'

export default {
  name: 'App',
  components: {
    DashboardHome
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  min-height: 100vh;
}
</style>

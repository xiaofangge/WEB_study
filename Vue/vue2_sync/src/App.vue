<template>
  <div id="app">
    <button @click="openDialog">打开弹框</button>
    <BaseDialog :isShow.sync="isShow" />
  </div>
</template>

<script>

import BaseDialog from './components/BaseDialog.vue';

export default {
  name: 'App',
  components: {
    BaseDialog
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    openDialog() {
      this.isShow = true;
    }
  }
}
</script>

<style scoped lang="css">
.app {
  text-align: center;
  margin-top: 50px;
}
</style>

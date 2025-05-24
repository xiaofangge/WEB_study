<template>
  <div id="app">
    <button @click="openDialog">打开弹框</button>
    <BaseDialog :isShow.sync="isShow" />
    <hr>
    <BaseForm ref="baseform" />
    <button @click="handleGet">获取数据</button>
    <button @click="handleReset">重置数据</button>
  </div>
</template>

<script>

import BaseDialog from './components/BaseDialog.vue';
import BaseForm from './components/BaseForm.vue';

export default {
  name: 'App',
  components: {
    BaseDialog, BaseForm
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    openDialog() {
      this.isShow = true;
    },
    handleGet() {
      console.log(this.$refs.baseform)
      console.log(this.$refs.baseform.getValues())
    },
    handleReset() {
      this.$refs.baseform.reset()
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

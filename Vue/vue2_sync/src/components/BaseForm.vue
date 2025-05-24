<!--
 * @author: Fang Ruichuan
 * @since: 2025-05-24
 * BaseForm.vue
-->
<template>
    <div class="container">
      <form action="">
        <label for="account">账号</label>
        <input type="text" id="account" v-model="account">
        <label for="pwd">密码</label>
        <input type="password" id="pwd" v-model="pwd">
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "BaseForm",
    data() {
      return {
        account: '',
        pwd: ''
      }
    },
    methods: {
      getValues() {
        return {
          account: this.account,
          pwd: this.pwd
        }
      },
      reset() {
        this.account = ''
        this.pwd = ''
      }
    }
  }
  </script>
  
  <style scoped lang="css">
  .container {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
  }
  </style>
  
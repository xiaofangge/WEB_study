<!--
 * @author: Fang Ruichuan
 * @since: 2025-06-01
 * message.vue
-->
<template>
  <div class="message" v-if="show">
    {{ label }}
  </div>
</template>

<script>
export default {
    name: "MyMessage",
    data() {
        return {
            label: "空消息",
            show: true
        }
    }
}
</script>

<style scoped>
.message {
    color: #fff;
    background-color: skyblue;
    padding: 15px 20px;
    width: 200px;
    height: 50px;
    position: fixed;
    top: 20px;
    right: 20px
}
</style>

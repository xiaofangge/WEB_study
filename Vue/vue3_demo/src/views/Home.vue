<!--
 * @author: Fang Ruichuan
 * @since: 2025-03-22
 * Home.vue
-->
<template>
  <div class="container">主页</div>
  <button @click="handleRequest">提交</button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import request from '../axios.ts'
import { getList } from '../api/user.ts'

onMounted(() => {
    getList()
});

const handleRequest = () => {
    getList().then((res) => {
        console.log("接收响应 => ", res)
    })
}

</script>

<style scoped></style>

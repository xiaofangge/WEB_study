<!--  -->
<template>
    <div>

        <!-- v-model用在HTML上 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target)!.value" /> -->

        <h4>账号: {{ username }}</h4>
        <h4>密码: {{ pwd }}</h4>
        <!-- v-model用在自定义组件上 -->
        <XinchaoInput v-model:username="username" v-model:pwd="pwd" />
        <!-- <XinchaoInput 
        :username="username"
        @update:username="username = $event" /> -->
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import XinchaoInput from './XinchaoInput.vue';


const username = ref<string>("张三")
const pwd = ref<string>("123131")
watch(username, (oldValue, newValue) => {
    console.log(newValue)
})
</script>

<style lang="scss" scoped>

</style>
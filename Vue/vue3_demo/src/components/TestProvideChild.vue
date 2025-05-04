<!-- TestProvideChild.vue -->
<template>
    <div>
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <h1>{{ sex }}</h1>
        <h1>{{ hobby }}</h1>
        <button @click="changeName">修改姓名</button><br>
        <button @click="injectChangeName">子组件修改姓名</button><br>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// inject() 方法第二个参数为默认值
let name = inject('name', ''),
      age = inject('age', 0),
      sex = inject('sex', 'unknown'),
      hobby = inject('hobby', ""),
      changeName = inject('changeName', () => {});

const injectChangeName = () => {
    // name.value = '心潮'
}
</script>

<style lang="scss" scoped>

</style>
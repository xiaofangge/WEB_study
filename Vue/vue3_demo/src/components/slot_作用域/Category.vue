<!--  -->
<template>
    <div class="content">
        <slot name="s1">内容1</slot>
        <slot name="s2" :foods="foods">内容2</slot>
    </div>
</template>

<script setup lang="ts" name="Category">
import { reactive } from 'vue';

const foods = reactive([
    {
        id: 1,
        name: '鱼香肉丝'
    },
    {
        id: 2,
        name: '麻婆豆腐'
    },
    {
        id: 3,
        name: '大肉饼'
    }
])
</script>

<style lang="scss" scoped>
.content {
    background-color: skyblue;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
}

</style>
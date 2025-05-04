<!--  -->
<template>
    <div class="content">
        <h2>{{ title }}</h2>
        <slot>默认内容</slot>
    </div>
</template>

<script setup lang="ts" name="Category">
defineProps(['title'])
</script>

<style lang="scss" scoped>
.content {
    background-color: skyblue;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
}
h2 {
    text-align: center;
    background-color: green;
    color: white;
    font-weight: 800;
}
</style>
<!--  -->
<template>
    <div class="content">
        <slot name="s1">内容1</slot>
        <slot name="s2">内容2</slot>
    </div>
</template>

<script setup lang="ts" name="Category">
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
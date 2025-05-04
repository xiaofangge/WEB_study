<!-- MyButton.vue -->
<template>
    <div>
        <button class="my-button"><slot></slot></button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MyButton',
}
</script>

<style lang="scss" scoped>
    .my-button {
        background-color: #41b883;
        color: #fff;
        border: none;
        border-radius: 10px;
        width: 80px;
    }
</style>
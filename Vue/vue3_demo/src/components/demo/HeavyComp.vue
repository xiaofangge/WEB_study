<template>
    <div class="item-container">
        <div v-for="n in 10000" class="item"></div>        
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 3px solid #f40;
}
.item {
    width: 5px;
    height: 3px;
    background-color: #ccc;
    margin: 0.1em;
}
</style>
<template>
    <div class="container">
        <div v-for="n in 100">
            <HeavyComp v-if="defer(n)"></HeavyComp>
        </div>        
    </div>
</template>

<script setup lang="ts">
import HeavyComp from './HeavyComp.vue'
import { useDefer } from './useDefer';


const defer  = useDefer()
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
}
</style>
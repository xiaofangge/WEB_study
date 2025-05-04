<!--  -->
<template>
    <div>
        <div class="child1">
            <Child1 />
        </div>
        <hr>
        <div class="child2">
            <Child2 />
        </div>
    </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>

<style lang="scss" scoped>

</style>
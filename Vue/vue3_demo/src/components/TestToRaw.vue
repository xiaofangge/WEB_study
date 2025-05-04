<!-- TestToRaw.vue -->
<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue';


const obj = {
    name: 'fangruichuan',
    age: 25,
    hobby: ['reading', 'running', 'coding']
}
const proxyObj = reactive(obj)
console.log(proxyObj)
const newObj = toRaw(proxyObj)
console.log(newObj)
console.log(Object.is(newObj, obj)) // true
</script>

<style lang="scss" scoped>

</style>
<!-- TestForRef.vue -->
<template>
    <div>
        <ul>
            <li v-for="(item, index) in students" 
                :key="index"
                :ref="el => {
                    if (el) list[index] = el
                }">
                {{ item?.name ?? "" }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';


const list = ref<any[]>([])
const students = reactive<any[]>([
    { name: '张三', id: 1001 },
    { name: '王五', id: 1002 },
    { name: '李四', id: 1003 }  
])

onMounted(() => {
    console.log(list.value)
    console.log(list.value[0])
    console.log(list.value[1])      
    console.log(list.value[2])      
})

</script>

<style lang="scss" scoped>

</style>
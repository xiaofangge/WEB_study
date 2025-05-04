<!--  -->
<template>
    <div>
        <h3>子组件2</h3>
        <h4>小孩: {{ boy }}</h4>
        <h5>从子组件1来的玩具: {{ toy }}</h5>
    </div>
</template>

<script setup lang="ts" name="Child2">
import { ComponentInternalInstance, Ref, getCurrentInstance, onUnmounted, ref } from 'vue';
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const boy = ref('大傻叉')
const toy = ref()
proxy!.$EventBus.on('send-toy', (val: Ref) => {
    console.log("val => ", val)
    toy.value = val.value
})

onUnmounted(() => {
    proxy!.$EventBus.all.clear()
})

</script>

<style lang="scss" scoped>

</style>
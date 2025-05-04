<!--  -->
<template>
    <div>
    <button @click="add()">添加</button>
    <ul>
      <li v-for="(i, index) in list" ref="l" key="index">{{ i }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
const l = ref(null)
const list = ref([1, 2, 3])

// nextTick(() => {
//     console.log("l.value => ", l.value);
// })

console.log("l.value => ", l.value)

const add = () => {
    list.value.push(list.value.length + 1);

    myNextTick(() => {
        console.log("l.value.length => ", (<any>l.value)?.length ?? 0)
    })
}

const myNextTick = (fn: Function) => {
    const app = document.getElementById('app') as HTMLElement;
    const observer = new MutationObserver(mutations => {
        console.log("mutations => ", mutations)
        fn()
    })

    observer.observe(app, {
        childList: true,    // 观察目标子节点的变化，是否有添加或删除元素
        attributes: true,   // 观察属性变化
        subtree: true,      // 观察后代节点，默认为false
    })
}
</script>

<style lang="scss" scoped>

</style>
<!--  -->
<template>
    <div>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>新年龄: {{ store.getAddAge(100)  }}</p>
        <p>名字+年龄: {{ store.getNameAndAge }}</p>
        <hr>
        <button @click="changeName">修改名字</button>
        <button @click="patchChange">批量修改</button>
        <button @click="reset">重置</button>
        <button @click="replace">直接替换</button>
        <button @click="saveName">actions方法</button>
    </div>
</template>

<script setup lang="ts" name="Father">
import { storeToRefs } from 'pinia';
import useUsersStore from '../../store/user'

const store = useUsersStore();

// const { name, age } = store; // 没有响应性
const { name, age } = storeToRefs(store)


const changeName = () => {
    store.name = '小明';
}

const patchChange = () => {
    store.$patch({
        name: "小芳",
        age: 30
    })
}

const reset = () => {
    store.$reset()
}

const replace = () => {
    store.$state = {
        name: '呵呵',
        age: 100
    }
}

const saveName = () => {
    store.saveName("大傻逼")
}

</script>

<style lang="scss" scoped>

</style>
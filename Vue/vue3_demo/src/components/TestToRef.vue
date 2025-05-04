<!-- TestToRef.vue -->
<template>
    <div>
        <h1>info.name {{ name }}</h1>
        <h1>nameRef.value {{ nameRef }}</h1>
        <button @click="changInfoName">改变info.name</button>
        <button @click="changNameRef">改变nameRef.value</button>
    </div>
</template>

<script lang="ts">
import { reactive, toRef, toRefs } from 'vue';

export default {
    setup() {
        const info = reactive({
            name: '章三',
            age: 25
        })

        const nameRef = toRef(info, 'name')
        console.log(nameRef.value)

        const infoRefs = toRefs(info)
        console.log(infoRefs)
        console.log({...infoRefs})

        const changInfoName = () => {
            info.name = '李四'
        }

        const changNameRef = () => {
            nameRef.value = '王五'
        }

        return {
            ...infoRefs,
            nameRef,
            changInfoName,
            changNameRef
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
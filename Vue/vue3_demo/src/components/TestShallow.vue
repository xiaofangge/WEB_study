<!-- TestShallow.vue -->
<template>
    <div>
        <p>学号: {{ id }}&nbsp;&nbsp;姓名: {{ info.name }}</p>
        <button @click="id++">点击增加学号</button>
        <button @click="changeName">改变姓名</button>
    </div>
</template>

<script lang="ts">
import { isReadonly, shallowReactive, shallowReadonly, toRefs } from 'vue';

export default {
    name: 'TestShallow',
    setup() {
        type Student = {
            id: number,
            info: {
                name: string,
            }
        }

        const student = shallowReactive<Student>({
            id: 1,
            info: {
                name: '张三'  // 这里的name不是响应式的
            }
        })

        const changeName = () => {
            student.info.name = '莉丝'
            console.log("name => ", student.info.name)
        }

        const person = shallowReadonly({
            name: '新潮',
            info: {
                age: 25
            }
        })

        console.log("第一层 => ", isReadonly(person))       // true
        console.log("第二层 => ", isReadonly(person.info))  // false

        return {
            ...toRefs(student),
            changeName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
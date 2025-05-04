<!-- TestWatch.vue -->
<template>
    <div>
        <h1>{{ count }}</h1>
        <hr>
        <h1>{{ state.count }}</h1>
        <hr>
        <h1>{{ boolean }}</h1>
        <button @click="handleChange">change</button>
    </div>
</template>

<script lang="ts">
import { onBeforeUpdate, reactive, ref, watch } from "vue"
export default {
    name: "TestWatch",
    setup() {
        const count = ref<number>(0)
        const boolean = ref<Boolean>(false)
        const state = reactive({
            count: 0
        })


        // setTimeout(() => {
        //     count.value = 100;
        //     state.count = 10000
        //     boolean.value = true
        // }, 2000)

        // watch(() => count.value, (newVal, oldVal) => {
        //     console.log(`count changed from ${oldVal} to ${newVal}`)
        // })

        // watch(boolean, (newVal, oldVal) => {
        //     console.log(`boolean changed from ${oldVal} to ${newVal}`)
        // })

        // watch(state, (newVal, oldVal) => {
        //     console.log(`state.count changed from ${oldVal.count} to ${newVal.count}`)
        // })

        const handleChange = () => {
            count.value++
            state.count++
            boolean.value = !boolean.value
        }

        const stop = watch([count, state, boolean], (
            [newCount, newState, newBoolean],
            [oldCount, oldState, oldBoolean],
            onInvalidate
        ) => {
            console.log(`count changed from ${oldCount} to ${newCount}`)
            console.log(`state.count changed from ${oldState.count} to ${newState.count}`)
            console.log(`boolean changed from ${oldBoolean} to ${newBoolean}`)

            // onInvalidate(() => {
            //     console.log("invalidate")  // 数据第二次改变时才会触发
            // })
        }, {
            flush: "post"
        })

        setTimeout(() => {
            stop()
        }, 4000)

        onBeforeUpdate(() => {
            console.log("before update")
        })

        return {
            count,
            state,
            boolean,
            handleChange
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
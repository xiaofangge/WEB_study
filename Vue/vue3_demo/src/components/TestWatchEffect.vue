<!-- TestWatchEffect.vue -->
<template>
    <div>
        <h1 ref="h1Ref">{{ count }}</h1>
    </div>
</template>

<script lang="ts">
import { onBeforeUpdate, onMounted, ref, watchEffect } from 'vue';

export default {
    name: 'TestWatchEffect',
    setup() {
        const count = ref<Number>(0)
        const h1Ref = ref()

        // setTimeout(() => {
        //     count.value = 1
        // }, 1000)

        // const getData: () => void = () => {
        //     return new Promise((resolve, reject) => {
        //         resolve(100)
        //     })
        // }

        setTimeout(() => {
            count.value = 2   // 
        }, 1000)

        // onBeforeUpdate(() => {
        //     console.log('onBeforeUpdate is triggered') // 
        // })

        onMounted(() => {
            console.log("onMounted is triggered")
        })

        // 返回值是一个用来停止副作用的函数
        watchEffect(async (onInvalidate) => {
            console.log('count:', count.value)
            console.log('h1Ref:', h1Ref.value)
            // const data = await getData()
            // console.log('data:', data)
            // onInvalidate(() => {
            //     console.log('onInvalidate is triggered') // 会在 stop 前执行
            // })  
        }, {
            flush: "sync",
            onTrack: (e) => {
                console.log('onTrack:', e)
            },
            onTrigger: (e) => {
                console.log('onTrigger:', e)
            }
        })

     



        // setTimeout(() => {
        //     stop()
        //     console.log('WatchEffect is stopped')
        // }, 2000)
        return {
            count,
            h1Ref
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
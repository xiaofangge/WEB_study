<!--  -->
<template>
    <div>
        <h1>{{ count }}</h1>
    </div>
</template>

<script lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watchEffect } from 'vue';

export default {
    name: 'Test3',
    setup() {
        const count = ref<number>(0)

        setTimeout(() => {
            count.value = 100
        }, 2000)

        onBeforeMount(() => {
            console.info("onBeforeMount")
        })

        onMounted(() => {
            console.info("onMounted")
        })

        onBeforeUpdate(() => {
            console.info("onBeforeUpdate")
        })

        onUpdated(() => {
            console.info("onUpdated")
        })

        watchEffect(() => {
            const a = count.value
            console.info("watchEffect")
        }, {
            flush: 'post'
        })

        return {
            count
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
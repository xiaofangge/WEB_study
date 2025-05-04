<!--  -->
<template>
    <div>
        <h1>{{ attrs.title }}</h1>
    </div>
</template>

<script lang="ts">
import { toRefs, watch, watchEffect } from 'vue';

export default {
    name: 'Test',
    // props: {
    //     title: String
    // },
    setup(props, ctx) {

        console.log("ctx => ", ctx)
        console.log("attrs => ",ctx.attrs)
        // watchEffect(() => {
        //     console.info('watchEffect title changed', props.title)
        // })

        // watch(() => props.title, (newVal, oldVal) => {
        //     console.info('watch title changed', newVal, oldVal)
        // })

        return {
            attrs: ctx.attrs
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
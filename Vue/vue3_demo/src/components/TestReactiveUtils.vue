<!-- TestReactiveUtils.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { isProxy, isReactive, isReadonly, reactive, readonly } from 'vue';

export default {
    name: 'TestReactiveUtils',
    setup() {
        const state1 = reactive({
            count: 0
        })

        const state2 = readonly({
            count: 0
        })

        const state3 = readonly(state1)

        const state4 = new Proxy({
            count: 0
        }, {})

        console.log(isProxy(state1), isReactive(state1), isReadonly(state1))  // true true false
        console.log(isProxy(state2), isReactive(state2), isReadonly(state2))  // true false true
        console.log(isProxy(state3), isReactive(state3), isReadonly(state3))  // true true true
        console.log(isProxy(state4), isReactive(state4), isReadonly(state4))  // false false false
    }
}
</script>

<style lang="scss" scoped>

</style>
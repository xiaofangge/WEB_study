<!-- TestMarkRaw.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { isReactive, markRaw, reactive } from 'vue';

export default {
    setup() {
        const obj = {
            a: 1, 
            b: 2,
            more: {
                c: 3,
                d: 4
            }
        }
        const rawObj = markRaw(obj)
        console.log(rawObj)
        console.log(Object.is(obj, rawObj)) // true

        const noProxyObj = reactive(rawObj)
        console.log(isReactive(noProxyObj)) // false
        // ... 深拷贝
        console.log(isReactive(reactive({...rawObj}))) // true

        const reactiveObj = reactive({
            nested: rawObj.more
        })
        console.log(isReactive(reactiveObj.nested)) // true
        console.log(reactiveObj.nested === rawObj.more) // false
    }
}
</script>

<style lang="scss" scoped>

</style>
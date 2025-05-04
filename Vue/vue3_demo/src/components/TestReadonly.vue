<!-- TestReadonly.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { reactive, readonly, watchEffect } from 'vue';

export default {
    name: 'TestReadonly',
    setup() {
        const reactiveObj = reactive({
            a: 1,
            b: 2,
            c: [4, 5, 6],
            d: {
                e: 7,
                f: true,
                g: {
                    h: 'hello'
                }
            }
        })

        const newReactiveObj = readonly(reactiveObj)

        reactiveObj.c.push(7)
        console.log(newReactiveObj.c)

        // newReactiveObj.d.g.h = 'world' // 无法为“h”赋值，因为它是只读属性。
        console.log(newReactiveObj.d.f)

        watchEffect(() => {
            console.log(newReactiveObj.d.g.h)
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
<!-- TestShallowRef.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { ref, shallowRef, watchEffect } from 'vue';

export default {
    setup() {
        const info1 = ref({
            name: "张三"
        })
        const info2 = shallowRef({  // ref的浅层作用
            name: "李四"
        })

        info1.value.name = '王五'
        info2.value.name = '老六'

        let name = ""
        
        watchEffect(() => {
            console.log("info1 => ", info1.value.name)
            console.log("info2 => ", info2.value.name)
            name = info2.value.name
            console.log("name => ", name)
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
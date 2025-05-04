<!-- TestRef.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { isRef, ref, unref } from 'vue';

export default {
    name: "TestRef",
    setup() {
        const info = ref({
            name: "fangruichuan",
            age: 25
        })
        // const info = {
        //     name: "fangruichuan",
        //     age: 25
        // }
        console.log(isRef(info) ? info.value : info)
        console.log(unref(info))
    }
}
</script>

<style lang="scss" scoped>

</style>
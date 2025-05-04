<!--  -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';

export default {
    name: 'TestRefReactiveUp',
    setup() {
        const books = reactive([ref('Vue 3 Guide'), ref('Vue 3 Cookbook')])
        console.log("book one => ", books[0].value)
    }
}
</script>

<style lang="scss" scoped>

</style>
<!--  -->
<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="handlePlus">+</button>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'


onMounted(() => {
    console.log("mounted")
})

export default {
    name: 'Test2',
    props: {
        count: Number,
    },
    emits: ['plus'],
    setup(props, ctx) {
        console.log("this => ", this) // undefined
        const handlePlus = () => {
            ctx.emit('plus', 100)
        }
        
        return {
            handlePlus
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
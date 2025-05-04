<!--  -->
<template>
    <div>
        <h3>子组件1</h3>
        <h4>玩具: {{ toy }}</h4>
        <button @click="sendToy">发送玩具</button>
    </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue';

export default {
    setup() {
        const toy = ref("奥特曼")
        // 同 vue2中的 this
        const { proxy  } = getCurrentInstance() as ComponentInternalInstance;

        const sendToy = () => {
            proxy!.$EventBus.emit('send-toy', toy)
        }

        return {
            toy,
            sendToy
        }
    }
}

</script>

<style lang="scss" scoped>

</style>
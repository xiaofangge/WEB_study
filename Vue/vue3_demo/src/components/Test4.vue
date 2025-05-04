<!--  -->
<template>
    <div>
        <span>{{ item?.name ?? "" }}</span>
        <button @click="remove(item!.id)">删除</button>
    </div>
</template>

<script lang="ts">
import { PropType, onBeforeUnmount, onUnmounted } from 'vue';

export default {
    name: "Test4",
    props: {
        item: Object as PropType<{ id: number, name: string }>
    },
    emits: ['remove'],
    setup(props, context) {
        const remove = (id: number) => {
            context.emit('remove', id)
        }

        onBeforeUnmount(() => {
            console.info(`ID为【${props.item?.id}】的项【即将】销毁`)
        })
        onUnmounted(() => {
            console.info(`ID为【${props.item?.id}】的项【已经】销毁`)
        })

        return {
            remove,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
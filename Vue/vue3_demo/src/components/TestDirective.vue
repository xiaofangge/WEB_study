<!-- TestDirective.vue -->
<template>
    <div>
        <div class="tab" 
        @click="handleClick($event)"
        v-tab="{  
            activeClass: 'active',
            curIndex
        }">
            <button data-index="0">按钮一</button>
            <button data-index="1">按钮二</button>
            <button data-index="2">按钮三</button>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { tab } from '../directives'

export default {
    name: 'TestDirective',
    directives: {
        tab
    },
    setup() {
        const curIndex = ref<number>(0)
        const handleClick = (event: MouseEvent) => {
            const tar = event.target as HTMLElement
            const className = tar.className

            if (Object.is(className, '')) {
                const index = parseInt(tar.dataset?.index ?? "")
                curIndex.value = index
            }
        }

        return {
            handleClick,
            curIndex
        }
    }
}
</script>

<style lang="scss" scoped>
.tab {
    .active {
         background-color: skyblue;
         border: 2px solid slategrey;
         color: white;
    }
}
</style>
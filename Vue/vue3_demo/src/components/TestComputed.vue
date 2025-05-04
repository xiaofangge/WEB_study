<!-- TestComputed.vue -->
<template>
    <div>

    </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

export default {
    name: 'TestComputed',
    setup() {
        const sentence = ref<string>(', 您好，欢迎来到小野森森的课堂')

        const senteceUp = computed(() => `心潮${sentence.value}`)

        console.log("sentenceUp.value => ", senteceUp.value)

        const superSentence = computed({
            get: () => `心潮${sentence.value}`,
            set: (newValue: string) => {
                console.log("set superSentence.value => ", newValue)
                sentence.value = newValue.replace('心潮', '')
            }
        })
        console.log("superSentence.value => ", superSentence.value)
        superSentence.value = '小野心潮'
        console.log("sentence.value => ", sentence.value)
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <CalcTableContainer>
        <Model :model="table"></Model>
    </CalcTableContainer>
</template>

<script setup lang="ts">
import { getOptions } from "@/core/model";
import { DfConfig } from "./type";
import { ElInput } from "element-plus";
import { defineComponent, onMounted } from "vue";
import { DictSelect, CalcTableContainer, Model } from "@/core/components"
import { useLdVxeTable } from "@/core/model/hooks";

const options = getOptions<DfConfig>()
console.log(options);
onMounted(() => {
    console.log("首次加载完成");
})
let table = useLdVxeTable({
    async getList() {
        return [{ k1: "阿萨德", k2: "测试1" }, { k1: "张三", k2: "测试2" }]
    },
    column: [
        {
            title: "测试1",
            dataKey: "k1"
        },
        {
            title: "测试2",
            dataKey: "k2"
        }
    ]
})
</script>

<style scoped>
</style>
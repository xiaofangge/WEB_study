<template>
    测试model:{{ options.test1 }}

    <button @click="test22">向外传递数据</button>
</template>

<script setup lang='ts'>
import { getOptions, useCallBack, useControl } from "@/core/model"
import { DfTestConfig } from "./type";

const options = getOptions<DfTestConfig>();



const call = useCallBack<DfTestConfig>()


function test22() {
    call({
        type: "click",
        data: "asd"
    })
}
useControl<DfTestConfig>({
    getData: () => {
        console.log("内部方法被调用");
    }
})
</script>

<style lang='scss' scoped></style>
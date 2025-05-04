<template>
    子组件渲染111{{ opt.name }}
    <br />
    <button @click="test">子传父</button>
    <br />
    <button @click="test22">子组件调用父组件方法</button>
</template>

<script setup lang='ts'>
import { getOptions, useCallBack, useControl } from '~/src/core/model';
import { DfTest2Config } from './type';

//父组件传值，子组件接收
const opt = getOptions<DfTest2Config>();

//子传父组件
const callBack = useCallBack<DfTest2Config>()


console.log("接收", opt);

function test() {
    callBack({
        type: "click",
        data: ""
    })
}

function test22() {
    opt.name = "李四"
}

//暴露方法,供父组件传值
useControl<DfTest2Config>({
    getData: () => {
        console.log("触发open");
    },getData2:()=>{
        console.log("触发open2");
    }
})
</script>

<style lang='scss' scoped></style>
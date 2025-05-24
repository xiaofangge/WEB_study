<template>
    <div>
        <div>【服务资源占用比】</div>
        <div ref="dataBar" class=" w-full h-full"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
console.log("vertical => ", props.data)

const dataBar = ref(null)
let myEcharts = null;
onMounted(() => {
    myEcharts = echarts.init(dataBar.value);
    render()
})

const render = () => {
    const options = {
        // x轴数据
        xAxis: {
            type: "category",
            data: props.data.servers.map(item => item.name),
            axisLabel: {
                color: '#9eb1c8'
            }
        },
        // y轴数据
        yAxis: {
            type: 'value',
            show: false,
            max: function(value) {
                return parseInt(value.max * 1.2);
            }
        },
        // 图表绘制的位置: 上下左右
        grid: {
            top: 16,
            right: 0,
            bottom: 26,
            left: -26,
            containLabel: true
        },
        // 核心配置
        series: [
            {
                type: 'bar',
                data: props.data.servers.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                itemStyle: {
                    color: '#5D98CE',
                    barBorderRadius: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 5,  // 阴影模糊
                },
                barWidth: 12,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: "#fff"
                    },
                    formatter: '{c}%'
                }
            }
        ]
    }
    myEcharts.setOption(options)
}

watch(() => props.data, render);

</script>

<style lang="css" scoped>
    
</style>
<template>
    <div>
        <div>【大区数据信息】</div>
        <div ref="dataBar" class=" w-full h-full"></div>
    </div>
</template>
 
<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
// 1. 初始化echarts实例
const dataBar = ref(null);
let myEcharts = null;
onMounted(() => {
    myEcharts = echarts.init(dataBar.value)
    render()
})

// 2. 指定图表的配置项和数据
const render = () => {
    const option = {
        // x轴数据
        xAxis: {
            show: false,
            type: 'value',
            max: function(value) {
                return parseInt(value.max * 1.2);
            }
        },
        // y轴数据
        yAxis: {
            type: "category",
            data: props.data.regions.map(item => item.name),
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9eb1c8'
            }
        },
        // 图表绘制的位置: 上下左右
        grid: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            containLabel: true
        },
        // 核心配置
        series: [
            {
                type: 'bar',
                data: props.data.regions.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
                itemStyle: {
                    color: '#5D98CE',
                    barBorderRadius: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 5,  // 阴影模糊
                },
                barWidth: 12,
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: "#fff"
                    }
                }
            }
        ]
    };
    // 3. 使用刚指定的配置项和数据显示图表
    myEcharts.setOption(option)
}

watch(() => props.data, () => render())

</script>

<style lang="css" scoped></style>
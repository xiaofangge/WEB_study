<!--  -->
<template>
    <div class="category">
        <Category title="">
            <template v-slot:s2="params">
                <ul>
                    <li v-for="item in params.foods" :key="item.id">{{ item.name }}</li>
                </ul>
            </template>
            <template v-slot:s1>
                <h2>今日美食推荐</h2>
            </template>
        </Category>
        <Category>
            <!-- 解构出来 -->
            <template v-slot:s2="{foods}">
                <ol>
                    <li v-for="item in foods" :key="item.id">{{ item.name }}</li>
                </ol>
            </template>
            <template v-slot:s1>
                <h2>今日美景大赛</h2>
            </template>
        </Category>
        <Category>
            <!-- 解构出来 -->
            <template #s2="{foods}">
                <h4 v-for="item in foods" :key="item.id">{{ item.name }}</h4>
            </template>
            <template #s1>
                <h2>今日电影直播</h2>
            </template>
        </Category>
    </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'


</script>

<style lang="scss" scoped>
.category {
    display: flex;
    // 均分开
    justify-content: space-evenly; 
}
h2 {
    text-align: center;
    background-color: green;
    color: white;
    font-weight: 800;
}
img, video {
    width: 100%;
}
</style>
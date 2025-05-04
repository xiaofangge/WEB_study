<!--  -->
<template>
    <div class="category">
        <Category title="">
            <template v-slot:s2>
                <ul>
                    <li v-for="item in foods" :key="item.id">{{ item.name }}</li>
                </ul>
            </template>
            <template v-slot:s1>
                <h2>今日美食推荐</h2>
            </template>
        </Category>
        <Category>
            <template v-slot:s2>
                <img :src="imageUrl" alt="" />
            </template>
            <template v-slot:s1>
                <h2>今日美景大赛</h2>
            </template>
        </Category>
        <Category>
            <template #s2>
                <video :src="videoUrl" controls></video>
            </template>
            <template #s1>
                <h2>今日电影直播</h2>
            </template>
        </Category>
    </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from 'vue';
import Category from './Category.vue'
const foods = reactive([
    {
        id: 1,
        name: '鱼香肉丝'
    },
    {
        id: 2,
        name: '麻婆豆腐'
    },
    {
        id: 3,
        name: '大肉饼'
    }
])

const imageUrl = ref('https://images.wallpaperscraft.com/image/single/japanese_apricot_flowers_buds_1252465_1280x720.jpg')
const videoUrl = ref('https://cdn.pixabay.com/video/2021/04/12/70796-538877060_large.mp4')
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
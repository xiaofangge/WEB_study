<!--  -->
<template>
    <div class="category">
        <Category title="今日美食推荐">
            <ul>
                <li v-for="item in foods" :key="item.id">{{ item.name }}</li>
            </ul>
        </Category>
        <Category title="今日美景大赛">
            <img :src="imageUrl" alt="">
        </Category>
        <Category title="今日电影直播">
            <video :src="videoUrl" controls />
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
img, video {
    width: 100%;
}
</style>
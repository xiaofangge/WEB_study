<template>
    <div class="layout flex" v-if="configStore.showLayout" :class="{
        'content_font_size_small': configStore.fontSize === 'small',
        'content_font_size_default': configStore.fontSize === 'default',
        'content_font_size_large': configStore.fontSize === 'large'
    }">
        <div class="left" v-show="configStore.showLayout">
            <el-menu :default-active="active" active-text-color="#ffd04b" background-color="#545c64"
                text-color="#fff" router>
                <el-sub-menu :index="'' + index" v-for="(route, index) in router.options.routes[0].children">
                    <template #title>
                        {{ (route.meta?.title as string) }}
                    </template>
                    <el-menu-item :index="(routeChild.name as any)" @click="toPage(routeChild)"
                        v-for="routeChild in filterRoutes(route.children!)">
                        <span>{{ routeChild.meta?.title ?? 'title未定义' }}</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="flex-c wh100">
            <div class="top_menu" v-show="configStore.showLayout">
                <el-menu mode="horizontal" background-color="#545c64" text-color="#fff"
                    @select="onSelect"
                    menu-trigger="hover"
                    active-text-color="#ffd04b">
                    <el-sub-menu style="{width:'30px'}" index="1" >
                        <template #title>字体大小</template>
                        <el-menu-item index="1-small">小号字体</el-menu-item>
                        <el-menu-item index="1-default">中号字体</el-menu-item>
                        <el-menu-item index="1-large">大号字体</el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu style="{width:'30px'}" index="2" >
                        <template #title>当前库房id:{{kfid}}</template>
                        <el-menu-item index="2-2">2</el-menu-item>
                        <el-menu-item index="2-4">4</el-menu-item>
                        <el-menu-item index="2-15">15</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            
            <div class="main_mar wh100" :style="{overflow: 'hidden'}">
                <div class="main wh100 card-sha" :style="{overflow: 'hidden'}">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="wh100">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRouter, useRoute } from "vue-router";
import { useConfigStore } from "@/store/modules/config";
import { ElSubMenu, ElMenuItem, ElMenu, ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus";
import { RouterView } from "vue-router";
import { getStorage, setStorage } from "@/core/utils";
import { useShowDialogLoading } from "@/core/hooks";
import { useMessage } from "naive-ui";
import { ref,computed } from "vue";

let kfid = ref("")

function initKfid(){
    kfid.value = getStorage("kfid");
   if(!kfid.value){
     setStorage("kfid",4)
     initKfid()
     return;
   }
}

initKfid();

(window as any).$message = useMessage();

const configStore = useConfigStore()
const router = useRouter();
const Route = useRoute();

const active = computed(()=>{
    if(Route.meta && Route.meta.activeMenu){
        return Route.meta.activeMenu
    }
    return Route.name
})

function filterRoutes(routes:any[]){
    return routes.filter(route=>{
        if(route.meta && route.meta.hide){
            return false
        }
        return true
    })
}


function onSelect(e:string){
    if(e.startsWith("1-")){
        let val = e.substring(2,e.length)
        configStore.setFontSize(val as never)
    }else if(e.startsWith("2-")){
        let val = e.substring(2,e.length)
        setStorage("kfid",val)
        window.location.reload()
    }
}

// 缓存中的数据填入到pinia中
let storage_showLayout = getStorage("showLayout")
let storage_debug = getStorage("debug")
let storage_test = getStorage("test")
if (storage_showLayout != null) {
    configStore.setShowLayout(storage_showLayout)
}
if (storage_debug != null) {
    configStore.setDebug(storage_debug)
}
if (storage_test != null) {
    configStore.setTest(storage_test)
}

function toPage(route: RouteRecordRaw) {
    router.push({
        name: route.name
    })
}
</script>

<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;

    .left {
        width: 220px;
        height: 100vh;
        overflow-y: scroll;
        background-color: #545c64;
    }

    .layout_top {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        background-color: #545c64;
        color: #fff;
    }

    .left::-webkit-scrollbar {
        display: none;
    }

    .main_mar {
        background-color: #f6f9f8;
        padding: 10px;
        box-sizing: border-box;

        .main {
            // padding: 10px;
            box-sizing: border-box;
            border-radius: 12px;
            padding: 10px 10px 4px 10px;
            box-sizing: border-box;
            // overflow-y: scroll;
            background-color: white;

        }
    }
}

// .header {
//     background-color: #c6e2ff;
//     padding: 0px;
//     height: 100px;
//     overflow: hidden;

//     .left_img {
//         width: 1712px;
//         height: 100px;
//     }
// }

// .aside {
//     height: 100vh;
//     overflow-y: scroll;
//     width: 209px;
//     background-color: #d9ecff;
// }

// .main {
//     padding: 10px;
// }
</style>

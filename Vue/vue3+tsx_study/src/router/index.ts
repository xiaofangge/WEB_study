import { useConfigStore } from "@/store/modules/config";
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import { isMicroEnv } from "@/core/micro/helpers";
import { saveHaiTaiQuery } from "../core/utils/haitai";


const modulesFiles: any = import.meta.glob("./modules/*.ts", { eager: true });
let modulesRouter: RouteRecordRaw[] = []
Object.keys(modulesFiles).forEach(key => {
    modulesRouter.push(...modulesFiles[key].default)
})

let redirectObj = isMicroEnv ? {} : { redirect: "/test" }

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        component: () => import("@/layout/index.vue"),
        ...redirectObj,
        children: [
            ...modulesRouter
        ]
    },
    {
        path: '/:w+',
        component: () => import("@/core/error/index.vue")
    }]
})

router.beforeEach((route, from, next) => {
    if (route.meta.title) {
        /** 修改标题 */
        document.title = route.meta.title as string
    }
    saveHaiTaiQuery(route);
    next();
})

router.afterEach((route) => {
    // 浏览器参数有layout=true 开启本地layout
    if (route.query.layout) {
        const configStore = useConfigStore()
        if (route.query.layout === "true") {
            configStore.setShowLayout(true)
        } else if (route.query.layout === "false") {
            configStore.setShowLayout(false)
        }
    }

    // 开启debug
    if (route.query.debug) {
        const configStore = useConfigStore()
        if (route.query.debug === "true") {
            configStore.setDebug(true)
        } else if (route.query.debug === "false") {
            configStore.setDebug(false)
        }
    }

    // 开启testBut
    if (route.query.test) {
        const configStore = useConfigStore()
        if (route.query.test === "true") {
            configStore.setTest(true)
        } else if (route.query.test === "false") {
            configStore.setTest(false)
        }
    }
})

export default router;



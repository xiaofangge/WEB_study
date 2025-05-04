import { RouteRecordRaw } from "vue-router";

/** 获取路由配置 */
export function getRoutesByModules() :RouteRecordRaw[]{
    const modulesFiles: any = import.meta.glob("../modules/*.ts", { eager: true });
    let modulesRouter: RouteRecordRaw[] = []
    Object.keys(modulesFiles).forEach(key => {
        modulesRouter.push(...modulesFiles[key].default)
    })

    return modulesRouter;
}
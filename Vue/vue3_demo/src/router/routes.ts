const routes = [
    {
        path: '/home',
        name: '主页',
        component: () => import('../views/Home.vue'), //.vue不能省略
    },
    {
        path: '/demo1',
        name: 'vue-splitpane使用',
        component: () => import('../views/Demo/SplitPaneDemo.vue'), //.vue不能省略
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../views/About/about.vue")
    }
]
export default routes

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    meta: { title: '首页', icon: 'dashboard' },
    children: [
      // {
      //   path: 'index',
      //   component: () => import('@/views/index'),
      //   name: 'Index',
      //   meta: { title: '首页', icon: 'dashboard', affix: true }
      // },
      {
        path: 'index',
        component: () => import('@/views/monitor/operlog/index'),
        name: 'Index',
        meta: { title: '操作日日志', icon: 'dashboard', affix: false }
      },
      {
        path: 'calendar',
        component: () => import('@/views/monitor/vModel/index'),
        name: 'Calendar',
        meta: { title: '自定义v-model组件', icon: 'dashboard', affix: false }
      }
    ]
  }
  // {
  //   path: '/g6',
  //   component: Layout,
  //   redirect: 'index',
  //   meta: { title: 'g6课程', icon: 'dashboard' },
  //   children: [
  //     {
  //       path: 'g6/index',
  //       component: () => import('@/views/g6'),
  //       name: 'g6index',
  //       meta: { title: '初次尝试', icon: 'dashboard', affix: false }
  //     },
  //     {
  //       path: 'g6/lesson1',
  //       component: () => import('@/views/g6/lesson1.vue'),
  //       name: 'g6lesson1',
  //       meta: { title: '课程1', icon: 'dashboard', affix: false }
  //     },

  //   ]
  // },
  // {
  //   path: '/openlayer',
  //   component: Layout,
  //   redirect: 'index',
  //   meta: { title: 'openlayer课程', icon: 'dashboard' },
  //   children: [
  //     {
  //       path: 'openlayer/lesson1',
  //       component: () => import('@/views/openlayer/lesson1.vue'),
  //       name: 'openlayerlesson1',
  //       meta: { title: '课程1', icon: 'dashboard', affix: false }
  //     },
  //     {
  //       path: 'openlayer/lesson2',
  //       component: () => import('@/views/openlayer/lesson2.vue'),
  //       name: 'openlayerlesson2',
  //       meta: { title: '课程2', icon: 'dashboard', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/gojs',
  //   component: Layout,
  //   meta: { title: 'gojs课程', icon: 'user' },
  //   redirect: 'index',
  //   children: [
  //     {
  //       path: 'gojs/lesson1',
  //       component: () => import('@/views/gojs/lesson1.vue'),
  //       name: 'gojslesson1',
  //       meta: { title: '课程1', icon: 'dashboard', affix: false }
  //     },
  //     {
  //       path: 'gojs/lesson2',
  //       component: () => import('@/views/gojs/lesson2.vue'),
  //       name: 'gojslesson2',
  //       meta: { title: '课程2', icon: 'dashboard', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'profile',
  //       component: () => import('@/views/system/user/profile/index'),
  //       name: 'Profile',
  //       meta: { title: '个人中心', icon: 'user' }
  //     }
  //   ]
  // }
]

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = []

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

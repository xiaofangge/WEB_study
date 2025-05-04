import { RouteRecordRaw } from 'vue-router';

/**
 * 测试页面
 */
export default <RouteRecordRaw[]>[
    {
        path: '/test',
        name: 'test',
        redirect: "/test/page1",
        meta: {
            title: '测试页面',
        },
        component: () => import('@/core/components/ParentRoute'),
        children: [
            {
                path: '/test/page1',
                name: 'test_page1',
                component: () => import('@/views/test/page1'),
                meta: {
                    title: '测试页面1',
                }
            },
            {
                path: '/test/page2',
                name: 'test_page2',
                component: () => import('@/views/test/page2'),
                meta: {
                    title: '测试页面2',
                }
            },
            {
                path: '/test/page3',
                name: 'test_page3',
                component: () => import('@/views/test/page3'),
                meta: {
                    title: '测试页面3',
                }
            },
            {
                path: '/test/page4',
                name: 'test_page4',
                component: () => import('@/views/test/page4'),
                meta: {
                    title: 'toRef和toRefs',
                }
            },
            {
                path: '/test/page5',
                name: 'test_page5',
                component: () => import('@/views/test/page5'),
                meta: {
                    title: '实现v-model',
                }
            },
            {
                path: '/test/page6',
                name: 'test_page6',
                component: () => import('@/views/test/page6'),
                meta: {
                    title: 'nextTick',
                }
            },
            {
                path: '/test/copyTest',
                name: 'test_copyTest',
                component: () => import('@/views/test/copyTest'),
                meta: {
                    title: 'JS复制',
                }
            },
            {
                path: '/test/tes228',
                name: 'test_tes228',
                component: () => import('@/views/test/tes228'),
                meta: {
                    title: 'tes228',
                }
            },
        ]
    }
]
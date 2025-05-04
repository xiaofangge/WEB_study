import { RouteRecordRaw } from 'vue-router';

/**
 * 文件上传
 */
export default <RouteRecordRaw[]>[
    {
        path: '/upload',
        name: 'upload',
        redirect: "/upload/single",
        meta: {
            title: '文件上传',
        },
        component: () => import('@/core/components/ParentRoute'),
        children: [
            {
                path: '/upload/single',
                name: 'upload_single',
                component: () => import('@/views/upload/single'),
                meta: {
                    title: '单文件上传',
                }
            },
            {
                path: '/upload/mutiple',
                name: 'upload_mutiple',
                component: () => import('@/views/upload/mutiple'),
                meta: {
                    title: '多文件上传',
                }
            },
            {
                path: '/upload/large',
                name: 'upload_large',
                component: () => import('@/views/upload/large'),
                meta: {
                    title: '大文件上传',
                }
            },
        ]
    }
]
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Login from '../page/Login';
import Article from '../page/Article';
import Layout from '../page/Layout';
import Board from '../page/Board';
import About from '../page/About';
import NotFound from '../page/NotFound';

// 配置路由 createBrowserRouter history模式 
// createHashRouter hash模式
const router = createHashRouter([
    {
        path: '/',
        Component: () => <Layout />,
        children: [
            {
                // 设置默认路由
                // path: 'board',
                index: true,
                Component: () => <Board />
            },
            {
                path: 'about',
                Component: () => <About />
            }
        ]
    },
    {
        path: '/login',
        Component: () => <Login />
    },
    {
        path: '/article/:id/:name',
        Component: () => <Article />
    },
    {
        // 配置404页面
        path: '*',
        Component: () => <NotFound />
    }
])

export default router;
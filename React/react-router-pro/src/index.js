import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// // 1.创建路由对象并配置路由关系
// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <div>登录页面</div>
//   },
//   {
//     path: '/article',
//     element: <div>文章页面</div>
//   }
// ])

// 1.导入路由组件
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. 包裹路由组件 */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            我是一级路由Layout组件
            <br />
            <Link to="/">面板</Link>
            <Link to="/about">关于</Link>
            
            {/* 二级路由出口 */}
            <Outlet />
        </div>
    )
}

export default Layout
import { getBillList } from "@/store/modules/billStore";
import { TabBar } from 'antd-mobile';
import { BillOutline, AddCircleOutline, CalculatorOutline } from 'antd-mobile-icons';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './index.scss'

const { Outlet, useNavigate } = require("react-router-dom")

const Layout = () => {
    const tabs = [
        {
          key: '/',
          title: '月度账单',
          icon: <BillOutline />,
        },
        {
          key: '/new',
          title: '记账',
          icon: <AddCircleOutline />,
        },
        {
          key: '/year',
          title: '年度账单',
          icon: <CalculatorOutline />
        },
      ]
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeChange = (key) => {
        navigate(key)
    }
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch]);
    return (
        <div className="layout">
            <div className="containter">
                {/* 用于在嵌套路由中渲染子路由的内容 */}
                <Outlet />
            </div>
            <div className="footer">
                <TabBar onChange={routeChange}>
                    {tabs.map((item) => (
                        <TabBar.Item
                            key={item.key}
                            title={item.title}
                            icon={item.icon}
                            selectedIcon={item.icon}
                        />
                    ))}
                </TabBar>
            </div>
        </div>
    )
}
export default Layout
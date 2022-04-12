import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    ShoppingOutlined,
    BarChartOutlined,
    SettingOutlined,
    FundOutlined,
    HomeOutlined,
    PieChartOutlined,
    LineChartOutlined,
} from '@ant-design/icons';

import logo from "../../pages/Login/images/logo.webp"
import "./index.css"
const { SubMenu } = Menu;
const Nav = () => {
    return (
        <div style={{ height: '100%' }}>
            <header>
                <div className="header">
                    <Link to='/'>
                        <img src={logo} alt="logo" className="header-img"></img>
                        <span className="header-span">后台管理</span>
                    </Link>
                </div>
            </header>
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={['HomeOutlined']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="HomeOutlined" icon={<HomeOutlined />}>
                        <Link to='/'>首页</Link>
                    </Menu.Item>
                    <SubMenu key="ShoppingCartOutlined" icon={<ShoppingCartOutlined />} title="商品">
                        <Menu.Item key="category" icon={<ShoppingOutlined />}>
                            <Link to='/category'>商品类型</Link>
                        </Menu.Item>
                        <Menu.Item key="product" icon={<ShopOutlined />}>
                            <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="UserOutlined" icon={<UserOutlined />}>
                        <Link to='/user'>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="SettingOutlined" icon={<SettingOutlined />}>
                        <Link to='/role'>角色管理</Link>
                    </Menu.Item>

                    <SubMenu key="FundOutlined" icon={<FundOutlined />} title="图形图表">
                        <Menu.Item key="PieChartOutlined" icon={<PieChartOutlined />}>
                            <Link to='/charts/pie'>饼状图</Link>
                        </Menu.Item>
                        <Menu.Item key="BarChartOutlined" icon={<BarChartOutlined />}>
                            <Link to='/charts/bar'>柱状图</Link>
                        </Menu.Item>
                        <Menu.Item key="LineChartOutlined" icon={<LineChartOutlined />}>
                            <Link to='/charts/line'>折线图</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}
export default Nav;
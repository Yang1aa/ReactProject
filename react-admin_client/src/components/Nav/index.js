import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import menuList from '../../config/menuConfig';
import logo from "../../pages/Login/images/logo.webp"
import "./index.css"
const { SubMenu } = Menu;
const Nav = () => {
    const getMenuNodes = (menuList) => {
        return menuList.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {
                            getMenuNodes(item.children)
                        }
                    </SubMenu>

                )
            }
        })
    }
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
                    defaultSelectedKeys={['/']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        getMenuNodes(menuList)
                    }
                </Menu>
            </div>
        </div>
    )
}
export default Nav;
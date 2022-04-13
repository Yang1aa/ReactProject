import React, { useState } from 'react'
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import menuList from '../../config/menuConfig';
import logo from "../../pages/Login/images/logo.webp"
import "./index.css"
const { SubMenu } = Menu;
const Nav = () => {
    const uselocation = useLocation();
    const [selectPath] = useState(uselocation.pathname);
    let open = ''
    const getMenuNodes = (menuList) => {
        return menuList.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            } else {
                const path = item.children.find(it =>
                    it.key === uselocation.pathname
                )
                if (path)
                    open = item.key;
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
    getMenuNodes(menuList);
    return (
        <div style={{ height: '100%' }}>
            <header>
                <div className="header">
                    <img src={logo} alt="logo" className="header-img"></img>
                    <span className="header-span">后台管理</span>
                </div>
            </header>
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={[selectPath]}
                    defaultOpenKeys={[open]}
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
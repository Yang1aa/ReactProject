import React, { useEffect } from 'react'
import { useNavigate, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'

import Nav from '../../components/Nav';
import Header from '../../components/Header';
// import Content from '../../components/Content';

import Home from '../Home'
import Category from '../Category'
import Product from '../Product'
import User from '../User'
import Role from '../Role'
import Bar from '../Charts/Bar.js'
import Line from '../Charts/Line.js'
import Pie from '../Charts/Pie.js'
import './index.css'

const {Content, Footer, Sider } = Layout;
const Admin = () => {
  const navigate = useNavigate();
  const user = memoryUtils.user;
  useEffect(() => {
    if (JSON.stringify(user) === '{}') {
      navigate('/login')
    }
  })
  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <Nav />
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Category />} />
            <Route path='/product' element={<Product />} />
            <Route path='/user' element={<User />} />
            <Route path='/role' element={<Role />} />
            <Route path='/charts/bar' element={<Bar />} />
            <Route path='/charts/line' element={<Line />} />
            <Route path='/charts/pie' element={<Pie />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center', color: 'gray' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
  )
}
export default Admin;
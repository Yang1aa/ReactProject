import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ConfigProvider } from 'antd';

import zh_CN from 'antd/es/locale/zh_CN';
import Login from './pages/Login';
import Admin from './pages/Admin';

const App = () => {

  return (
    <ConfigProvider locale={zh_CN}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;

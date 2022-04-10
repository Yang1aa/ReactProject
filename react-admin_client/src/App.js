import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Admin from './pages/Admin';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

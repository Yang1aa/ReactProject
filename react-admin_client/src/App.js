import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import Admin from './pages/Admin';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

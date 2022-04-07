import React, { Component } from 'react'
// import './index.less'
import logo from './images/logo.webp'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} alt="logo " />
          <h1>后台管理系统</h1>
        </div>
        <div className="context">
          <h1>用户登录</h1>
          <div>内容</div>
        </div>
      </div>
    )
  }
}

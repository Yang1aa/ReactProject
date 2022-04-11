import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { reqLogin } from '../../api';
import memoryUtils from '../../utils/memoryUtils'
import localUtils from '../../utils/localUtils';

import './index.css'
import logo from './images/logo.webp'
import mp4 from './images/bg.mp4'

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { username, password } = values;
    const result = await reqLogin(username, password);
    if (result.status === 0) {
      message.success("登陆成功！");
      console.log('data', result.data);
      memoryUtils.user = result.data;
      localUtils.setUser(result.data);
      navigate('/', { replace: true });
    } else {
      message.error(result.msg);
    }
  };
  useEffect(() => {
    if (JSON.stringify(memoryUtils.user) !== '{}') {
      navigate('/');
    }
  })

  return (
    <div>
      <video autoPlay loop muted>
        <source src={mp4} type="video/mp4" />Your browser does not support the video tag.
      </video>
      <div className='login'>
        <div className="header">
          <img src={logo} alt="logo " />
          <h1>后台管理系统</h1>
        </div>
        <div className="context">
          <h2>用户登录</h2>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: '请输入账号!' },
                  { max: 12, message: '用户名最长12位' },
                  { min: 4, message: '用户名最短4位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线组成' }
                ]}
                style={{ marginTop: '25px' }}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '请输入密码!' },
                  { max: 12, message: '用户名最长12位' },
                  { min: 4, message: '用户名最短4位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数组或下划线组成' }]}
                style={{ marginTop: '30px' }}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ float: 'right', margin: '-20px 0' }}>记住密码</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item
                style={{ marginTop: '-15px' }}
              >
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Login
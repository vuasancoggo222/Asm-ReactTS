import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { UserType } from '../../types/user';

type SignUpProps = {
  onSignup : (user: UserType) => void
}

const SignUp = (props: SignUpProps) => {
  const onFinish = (values: UserType) => {
   props.onSignup(values);
  };
  return (
    <div style={{ margin:"30px auto"}}>
    <Form
    name="normal_login"
    className="login-form"
    style={{  width:"300px"}}
    
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
     <Form.Item
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item
      name="address"
      rules={[{ required: true, message: 'Please input your address!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Address" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "100%"}} className="login-form-button">
       Register
      </Button><span style={{marginTop:"10px"}}>You have an account ?  </span>
      <br /><Link to="/sign-in" className="">login now!</Link>
    </Form.Item>
  </Form>
  </div>
  )
}

export default SignUp
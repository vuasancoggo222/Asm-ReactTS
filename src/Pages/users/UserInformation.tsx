import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd';
type Props = {}

const UserInformation = (props: Props) => {
  const [form] = Form.useForm();
  return (
    <>
    <h2>Thông tin cá nhân</h2>
     <div style={{textAlign: 'center',marginLeft:"100px"}}>
     <Form
      layout="horizontal"
      form={form}
      style={{width:"800px"}}
    >

      <Form.Item label="Họ và tên">
        <Input style={{marginLeft:"40px",width:"700px"}} placeholder="input placeholder"  />
      </Form.Item>
      <Form.Item label="Địa chỉ email">
        <Input style={{marginLeft:"22px",width:"700px"}} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Ngày sinh">
        <Input style={{marginLeft:"38px",width:"700px"}} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input style={{marginLeft:"18px",width:"700px"}} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input style={{marginLeft:"58px",width:"700px"}} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
     </div>
    </>
   
  )
}

export default UserInformation
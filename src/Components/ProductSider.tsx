import React from 'react'
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, InputNumber, Menu } from 'antd'
import { CategoryType } from '../types/category'
import { Link, useNavigate } from 'react-router-dom'
type Props = {
  category : CategoryType[]
}

const ProductSider = (props: Props) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate(`/products/filter?gte=${values.gte}&lte=${values.lte}`)
  };
  
  return (
<Sider width={220} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Danh mục">
            {props.category && props.category.map((item, index)=>{
              return <Link to={`/category/${item._id}`}><Menu.Item key={item._id}>{item.name}</Menu.Item></Link>
            })}
            
           
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Khoảng giá">
         <Form  onFinish={onFinish} style={{marginLeft:"30px"}}>
         <Form.Item label="Tối thiểu" name="gte"
        rules={[{ required: true, message: 'Vui lòng điền giá trị tối thiểu!' }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Tối đa" name="lte"
        rules={[{ required: true, message: 'Vui lòng điền giá trị tối ta!' }]}>
        <InputNumber style={{marginLeft:"15px"}} />
      </Form.Item>
       <Button type="primary" htmlType="submit">Apply</Button>
         </Form>
          
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
  )
}

export default ProductSider
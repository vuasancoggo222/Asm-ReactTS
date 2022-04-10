import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import { Link, NavLink } from 'react-router-dom';

const { SubMenu } = Menu;
type NavAdminProps = {}

const NavAdmin = (props: NavAdminProps) => {
  const handleClick = (e:any) => {
    console.log('click ', e);
  };
  return (
   <div>
     <Sider>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Product Management">
            <Menu.Item key="product"><Link to="/admin/product">Product List</Link></Menu.Item>
            <Menu.Item key="productadd"><Link to="/admin/product/add">Add new product</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<MailOutlined />} title="Category Management">
            <Menu.Item key="category">Category List</Menu.Item>
            <Menu.Item key="categoryadd">Add New Category</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<MailOutlined />} title="News Management">
            <Menu.Item key="news">News List</Menu.Item>
            <Menu.Item key="newsadd">Add New Post</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<MailOutlined />} title="Contact Management">
            <Menu.Item key="contact">Contact List</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<MailOutlined />} title="Order Management">
            <Menu.Item key="order">Order List</Menu.Item>
        </SubMenu>
      </Menu>
   </Sider>
   </div>
  )
}

export default NavAdmin
